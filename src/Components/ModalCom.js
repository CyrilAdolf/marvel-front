import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalCom = ({ setModalCom }) => {
  const location = useLocation();
  console.log(location.state.comic);

  return (
    <div className="modal-char">
      <div className="modal-char-info">
        <img
          src={
            location.state.comic.thumbnail.path +
            "." +
            location.state.comic.thumbnail.extension
          }
          alt={location.state.comic.name}
        />
        <div className="modal-char-column-b">
          <span className="border">TITRE</span>
          <div>{location.state.comic.title}</div>
          <div className="modal-com-creators">
            <span className="border">CREATEURS :</span>
            {location.state.comic.creators.available !== 0 ? (
              location.state.comic.creators.items.map((item, index) => {
                return (
                  <div key={index}>
                    <span>{item.role}</span>
                    <span>{item.name}</span>
                  </div>
                );
              })
            ) : (
              <div>INFORMATIONS NON DISPONIBLES ... </div>
            )}
          </div>
        </div>
        <div
          className="close-modal-char"
          onClick={() => {
            setModalCom(false);
          }}
        >
          <FontAwesomeIcon icon="times-circle" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ModalCom;
