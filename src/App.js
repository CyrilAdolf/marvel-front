import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Cookie from "js-cookie";

// CSS
import "./Assets/css/App.css";

import Home from "./Container/Home";
import Header from "./Components/Header";

function App() {
  // const [token, setToken] = useState(Cookie.get("userToken") || null);
  const marvelPublicKey = "ad5601d5c92fe0d5a228e44044695f0a";
  // const setUser = (dataToken) => {
  //   if (dataToken) {
  //     // CONNECTION = CREATE A TOKEN AND SO A COOKIE
  //     Cookie.set("userToken", dataToken);
  //     setToken(dataToken);
  //   } else {
  //     // DISCONNECTION = REMOVE COOKIE AND TOKEN
  //     Cookie.remove("userToken");
  //     setToken(null);
  //   }
  // };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home marvelPublicKey={marvelPublicKey} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
