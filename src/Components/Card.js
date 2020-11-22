import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ char, setModalChar, favCharacter, favCharacters }) => {
  const pictureUrl = char.thumbnail.path + "." + char.thumbnail.extension;
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
          favCharacters && favCharacters.indexOf(char.id) !== -1
            ? "fav-button red"
            : "fav-button"
        }
        key={char.id}
        onClick={() => {
          favCharacter(char.id);
        }}
      >
        <FontAwesomeIcon icon="star" className="icon" />
      </div>
      <Link
        to={{
          // pathname: `/character/${char.id}`,
          state: {
            char,
          },
        }}
        key={"1" + char.id}
        onClick={() => {
          setModalChar(true);
        }}
      >
        <div className="spacer-name"></div>
        <span className="single-card-name">{char.name}</span>
      </Link>
    </div>
  );
};

export default Card;
