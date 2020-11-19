import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Components/Card";

const Home = ({ marvelPublicKey }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.post("http://localhost:3100/", {
          publicKey: marvelPublicKey,
          page: page,
        });
        console.log(response.data.data.results);
        setCharacters(response.data.data.results);
        setIsLoading(true);
        const lastPage = Math.ceil(response.data.data.total / 100);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, [marvelPublicKey, page]);

  return !isLoading ? (
    <div className="container">Chargement</div>
  ) : (
    <div className="container">
      <div className="vitrine">
        {characters.map((char, i) => {
          return <Card key={char.id} char={char}></Card>;
        })}
      </div>
      <div className="page-numb"></div>
    </div>
  );
};

export default Home;
