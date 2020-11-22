import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";

import PageNumber from "../Components/PageNumber";
import Card from "../Components/Card";
import CardComics from "../Components/CardComics";
import Loading from "../Components/Loading";

const Fav = ({
  marvelPublicKey,
  favCharacter,
  favCharacters,
  setModalChar,
  favComic,
  favComics,
  setModalCom,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageFav, setPageFav] = useState(1);
  const [lastPageFav, setLastPageFav] = useState();
  const [favChars, setFavChars] = useState();
  const [favComs, setFavComs] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      const searchCharacters = Cookie.get("characters") || "";
      const searchComics = Cookie.get("comics") || "";
      setIsLoading(false);

      try {
        const response = await axios.post(
          "https://marvel-backend-ca.herokuapp.com/favorits",
          {
            publicKey: marvelPublicKey,
            page: pageFav,
            searchComics: searchComics,
            searchCharacters: searchCharacters,
          }
        );
        // console.log(response.data.tableForCharacters);
        setFavChars(response.data.tableForCharacters);
        // console.log(response.data.tableForComics);
        setFavComs(response.data.tableForComics);
        setIsLoading(true);
        setLastPageFav(
          Math.ceil(
            (response.data.tableForCharacters.length +
              response.data.tableForComics.length) /
              100
          )
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, [pageFav, favCharacters, favComics, marvelPublicKey]);

  return isLoading ? (
    <div className="container">
      <p>Personnages Favori(s)</p>
      <div className="fav-characters-section">
        {favChars.map((char, i) => {
          return (
            <Card
              key={i}
              char={char[0]}
              setModalChar={setModalChar}
              favCharacter={favCharacter}
              favCharacters={favCharacters}
            />
          );

          // <div key={i}>{char[0].name}</div>;
        })}
      </div>
      <p>Comics Favori(s) </p>
      <div className="fav-comics-section">
        {favComs.map((comic, i) => {
          return (
            <CardComics
              key={i}
              comic={comic[0]}
              setModalCom={setModalCom}
              favComic={favComic}
              favComics={favComics}
            />
          );
        })}
      </div>
      <div>
        <PageNumber
          page={pageFav}
          lastPage={lastPageFav}
          setPage={setPageFav}
        />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Fav;
