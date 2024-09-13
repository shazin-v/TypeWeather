import React from "react";

type Props = {};

const DayForeCast = (props: Props) => {
  return (
    <div>
      <p>Tomorrow</p>
      <img src="/images/weather/Day/Rain.svg" alt="Rain" />
      <p>Temporal</p>
      <div className="flex">
        <p>32ºc</p>
        <p>26ºc</p>
      </div>
    </div>
  );
};

export default DayForeCast;
