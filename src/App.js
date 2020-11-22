import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";

// CSS
import "./Assets/css/App.css";

import Home from "./Container/Home";
import Comics from "./Container/Comics";
import Fav from "./Container/Fav";
import Header from "./Components/Header";
import ModalChar from "./Components/ModalChar";
import ModalCom from "./Components/ModalCom";

// FONTAWESOME LIBRARY
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimesCircle,
  faNewspaper,
  faMask,
  faStar,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
library.add(faTimesCircle, faNewspaper, faMask, faStar, faSearch);

function App() {
  const marvelPublicKey = "ad5601d5c92fe0d5a228e44044695f0a";

  // DISPLAY MODALS STATES
  const [modalChar, setModalChar] = useState(false);
  const [modalCom, setModalCom] = useState(false);

  // COOKIES STATES
  // NEED TO CONVERT TYPE OF DATA INTO THE COOKIE AND CONVERT IT INTO AN ARRAY A EACH VISITS.
  const [favCharacters, setFavCharacters] = useState(
    (Cookie.get("characters") &&
      Cookie.get("characters").slice(1, -1).split(",").map(Number)) ||
      []
  );

  const [favComics, setFavComics] = useState(
    (Cookie.get("comics") &&
      Cookie.get("comics").slice(1, -1).split(",").map(Number)) ||
      []
  );

  // FUNCTION TO USE TO SET THE FAVORITS
  const favCharacter = (id) => {
    if (favCharacters.indexOf(id) === -1) {
      let newTab = [...favCharacters];
      newTab.push(id);
      setFavCharacters(newTab);
      Cookie.set("characters", newTab);
    } else {
      let newTab = [...favCharacters];
      newTab.splice(favCharacters.indexOf(id), 1);
      setFavCharacters(newTab);
      Cookie.set("characters", newTab);
    }
    console.log(favCharacters);
  };
  const favComic = (id) => {
    if (favComics.indexOf(id) === -1) {
      let newTab = [...favComics];
      newTab.push(id);
      setFavComics(newTab);
      Cookie.set("comics", newTab);
    } else {
      let newTab = [...favComics];
      newTab.splice(favComics.indexOf(id), 1);
      setFavComics(newTab);
      Cookie.set("comics", newTab);
    }
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics">
          <Comics
            marvelPublicKey={marvelPublicKey}
            setModalCom={setModalCom}
            favComic={favComic}
            favComics={favComics}
          />
        </Route>
        <Route path="/favorit">
          <Fav
            marvelPublicKey={marvelPublicKey}
            favCharacter={favCharacter}
            favCharacters={favCharacters}
            favComic={favComic}
            favComics={favComics}
            setModalChar={setModalChar}
            setModalCom={setModalCom}
          />
        </Route>
        <Route path="/">
          <Home
            marvelPublicKey={marvelPublicKey}
            setModalChar={setModalChar}
            favCharacter={favCharacter}
            favCharacters={favCharacters}
          />
        </Route>
      </Switch>
      {modalChar && (
        <ModalChar
          setModalChar={setModalChar}
          marvelPublicKey={marvelPublicKey}
        />
      )}
      {modalCom && <ModalCom setModalCom={setModalCom} />}
    </Router>
  );
}

export default App;
