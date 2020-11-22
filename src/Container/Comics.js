import React, { useState, useEffect } from "react";
import axios from "axios";

import CardComics from "../Components/CardComics";
import TimeOrder from "../Components/TimeOrder";
import PageNumber from "../Components/PageNumber";
import Loading from "../Components/Loading";
const Comics = ({ marvelPublicKey, setModalCom, favComic, favComics }) => {
  const [pageComics, setPageComics] = useState(1);
  const [isLoading2, setIsLoading2] = useState(false);
  const [comics, setComics] = useState([]);
  const [lastPageComics, setLastPageComics] = useState();
  const [searchComics, setSearchComics] = useState("");
  // MODIFIER LE BACK
  // MODIFIER LA requete
  const [period, setPeriod] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      setIsLoading2(false);

      try {
        const response = await axios.post(
          "https://marvel-backend-ca.herokuapp.com/comics",
          {
            publicKey: marvelPublicKey,
            page: pageComics,
            search: searchComics,
            period: period,
          }
        );
        console.log(
          "requete vers mon backend avec les param " + searchComics + period
        );
        setComics(response.data.data.results);
        setIsLoading2(true);
        setLastPageComics(Math.ceil(response.data.data.total / 100));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, [marvelPublicKey, pageComics, searchComics, period]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchComics(event.target.value);
  };

  return (
    <div>
      {!isLoading2 ? (
        <Loading />
      ) : (
        <>
          <div className="search-bar">
            <form>
              <input
                type="text"
                value={searchComics}
                onChange={(event) => {
                  handleChange(event);
                }}
                placeholder="Recherche"
              />
            </form>
          </div>
          <TimeOrder setPeriod={setPeriod} />
          <div className="container">
            <div className="vitrine">
              {comics.map((comic, index) => {
                return (
                  <CardComics
                    key={comic.id}
                    comic={comic}
                    setModalCom={setModalCom}
                    favComic={favComic}
                    favComics={favComics}
                  />
                );
              })}
            </div>
            <PageNumber
              page={pageComics}
              lastPage={lastPageComics}
              setPage={setPageComics}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Comics;
