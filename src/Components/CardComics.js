import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardComics = ({ comic, setModalCom, favComic, favComics }) => {
  const pictureUrl = comic.thumbnail.path + "." + comic.thumbnail.extension;

  return (
    <div
      className="single-card"
      style={{
        backgroundImage: `url(${pictureUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={
          favComics && favComics.indexOf(comic.id) === -1
            ? "fav-button"
            : "fav-button red"
        }
        key={"1" + comic.id}
        onClick={() => {
          favComic(comic.id);
        }}
      >
        <FontAwesomeIcon icon="star" className="icon" />
      </div>
      <Link
        to={{
          // pathname: `/comics/${comic.id}`,
          state: {
            comic,
          },
        }}
        key={comic.id}
        onClick={() => {
          setModalCom(true);
        }}
      >
        <div className="spacer-name"></div>
        <span className="single-card-name"> {comic.title}</span>
        <div className="spacer-name"></div>

        {/* <img
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt={"picture" + comic.title}
        /> */}
      </Link>
    </div>
  );
};

export default CardComics;
