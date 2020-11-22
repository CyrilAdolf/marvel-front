import React from "react";

const AbcOrder = ({ setSearch }) => {
  const alphaList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="aside-char">
      {alphaList.map((elem, i) => {
        return (
          <span
            onClick={(event) => {
              setSearch(event.target.textContent);
            }}
          >
            {elem}
          </span>
        );
      })}
    </div>
  );
};

export default AbcOrder;
