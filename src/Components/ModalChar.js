import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PageNumber from "./PageNumber";

const ModalChar = ({ setModalChar, marvelPublicKey }) => {
  const location = useLocation();
  const [isLoadingModalChar, setIsLoadingModalChar] = useState(false);
  const [charComics, setCharComics] = useState([]);
  const [pageComics, setPageComics] = useState(1);
  const [lastPageComics, setLastPageComics] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.post(
          "https://marvel-backend-ca.herokuapp.com/character/comics",
          {
            publicKey: marvelPublicKey,
            characterId: location.state.char.id,
            page: pageComics,
          }
        );
        console.log(response.data.data.results);

        setCharComics(response.data.data.results);
        setIsLoadingModalChar(true);
        setLastPageComics(Math.ceil(response.data.data.total / 100));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, [marvelPublicKey, pageComics, location]);

  return (
    location.state && (
      <div className="modal-char">
        <div className="modal-char-info">
          {/* COLUMN LEFT */}
          <img
            src={
              location.state.char.thumbnail.path +
              "." +
              location.state.char.thumbnail.extension
            }
            alt={location.state.char.name}
          />
          {/* COLUMN RIGHT */}
          <div className="modal-char-column-b">
            <span className="border">NOM:{"    "}</span>
            <div>{location.state.char.name} </div>
            <span className="border">DESCRIPTION:{"    "}</span>
            <div>
              {location.state.char.description
                ? location.state.char.description
                : "LA DESCRIPTION N'EST PAS DIPSONIBLE"}
            </div>

            {isLoadingModalChar ? (
              charComics.length === 0 ? (
                <p>PAS DE RESULTATS, DESOLE...</p>
              ) : (
                <div className="comics-carrousel">
                  {charComics.map((comic, index) => {
                    return (
                      <img
                        src={
                          comic.thumbnail.path + "." + comic.thumbnail.extension
                        }
                        alt=""
                      />
                    );
                  })}
                </div>
              )
            ) : (
              <>CHARGEMENT</>
            )}

            {lastPageComics > 1 && (
              <PageNumber
                page={pageComics}
                lastPage={lastPageComics}
                setPage={setPageComics}
              />
            )}
          </div>
          <div
            className="close-modal-char"
            onClick={() => {
              setModalChar(false);
            }}
          >
            <FontAwesomeIcon icon="times-circle" className="icon" />
          </div>
        </div>
      </div>
    )
  );
};

export default ModalChar;
