import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Components/Card";
import AbcOrder from "../Components/AbcOrder";
import PageNumber from "../Components/PageNumber";
import Loading from "../Components/Loading";

const Home = ({
  marvelPublicKey,
  setModalChar,
  favCharacter,
  favCharacters,
}) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      setIsLoading(false);

      try {
        const response = await axios.post(
          "https://marvel-backend-ca.herokuapp.com/",
          {
            publicKey: marvelPublicKey,
            page: page,
            search: search,
          }
        );
        setCharacters(response.data.data.results);
        setIsLoading(true);
        setLastPage(Math.ceil(response.data.data.total / 100));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, [marvelPublicKey, page, search]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div className="char-page">
      <div className="main-char">
        {!isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="search-bar">
              <form>
                <input
                  type="text"
                  value={search}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  placeholder="VOTRE RECHERCHE"
                />
              </form>
            </div>
            <AbcOrder setSearch={setSearch} />
            <div className="container">
              <div className="vitrine">
                {characters.map((char, i) => {
                  return (
                    <Card
                      key={char.id}
                      char={char}
                      setModalChar={setModalChar}
                      favCharacter={favCharacter}
                      favCharacters={favCharacters}
                    />
                  );
                })}
              </div>
              <div>
                <PageNumber page={page} lastPage={lastPage} setPage={setPage} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
