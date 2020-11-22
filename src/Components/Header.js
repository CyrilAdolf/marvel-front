import React from "react";
import { Link } from "react-router-dom";
// import marvelLogo from "../Assets/img/marvelLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <div className="banner">
        {/* <img src={marvelLogo} alt="marvel logo" /> */}
        MARVEL
      </div>
      <div className="aside">
        <div className="aside-category">
          <Link to="/">
            <span>
              <FontAwesomeIcon icon="mask" className="icon" />
            </span>
            <span>Personnages</span>
          </Link>
          <Link to="/comics">
            <span>
              <FontAwesomeIcon icon="newspaper" className="icon" />
            </span>
            <span>Comics</span>
          </Link>
          <Link to="/favorit">
            <span>
              <FontAwesomeIcon icon="star" className="icon" />
            </span>
            <span>Favoris</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
