import React from "react";
import marvelLogo from "../Assets/img/marvelLogo.jpg";

const Header = () => {
  return (
    <div>
      <div className="banner">
        <img src={marvelLogo} alt="marvel logo" />
      </div>
      <div className="header-category">
        <div className="container">
          <span>Personnages</span>
          <span>Comics</span>
          <span>Favoris</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
