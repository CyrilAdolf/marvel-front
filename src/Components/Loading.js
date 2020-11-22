import React from "react";
import GIF from "../Assets/img/StanLee.gif";

const Loading = () => {
  return (
    <div className="container">
      <div className="isLoading">
        <span>CHARGEMENT</span>
        <div></div>
        <img src={GIF} alt="StanLeeGIF" />
      </div>
    </div>
  );
};

export default Loading;
