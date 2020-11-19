import React from "react";

const Card = ({ char }) => {
  return (
    <div className="single-card">
      {char.name}
      {/* <img src={char.thumbnail.path} alt="char.urls[0].url" />  */}
    </div>
  );
};

export default Card;
