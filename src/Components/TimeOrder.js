import React from "react";

const TimeOrder = ({ setPeriod }) => {
  const timePeriod19 = ["30", "40", "50", "60", "70", "80", "90"];
  const timePeriod20 = ["00", "10", "20"];

  return (
    <div className="aside-comics">
      {timePeriod19.map((elem, i) => {
        return (
          <span
            key={i}
            onClick={(event) => {
              setPeriod(`19${elem}`);
              console.log(`19${elem}`);
            }}
          >
            {elem + "'"}
          </span>
        );
      })}
      {timePeriod20.map((elem, i) => {
        return (
          <span
            key={i}
            onClick={(event) => {
              setPeriod(`20${elem}`);
              console.log(`20${elem}`);
            }}
          >
            {elem + "'"}
          </span>
        );
      })}
    </div>
  );
};

export default TimeOrder;
