import React from "react";

type Props = {};

const WeatherRange = (props: Props) => {
  return (
    <div className="flex-col">
      <div className="flex justify-between  border-b-2 border-b-[#1C1C27]">
        <div className="flex p-2 gap-3">
          <img src="/images/weather/Thermal.svg" alt="thermal" />
          <p>Thermal sensation</p>
        </div>
        <div>
          <p>26 C</p>
        </div>
      </div>

      <div className="flex justify-between  border-b-2 border-b-[#1C1C27]">
        <div className="flex p-2 gap-3">
          <img src="/images/weather/Rain.svg" alt="Rain" />
          <p>Probability of rain</p>
        </div>
        <div>
          <p>0%</p>
        </div>
      </div>

      <div className="flex justify-between  border-b-2 border-b-[#1C1C27]">
        <div className="flex p-2 gap-3">
          <img src="/images/weather/Wind.svg" alt="Wind" />
          <p>Wind Speed</p>
        </div>
        <div>
          <p>8 km/h</p>
        </div>
      </div>

      <div className="flex justify-between  border-b-2 border-b-[#1C1C27]">
        <div className="flex p-2 gap-3">
          <img src="/images/weather/Air.svg" alt="Air" />
          <p>Air humidity</p>
        </div>
        <div>
          <p>40 %</p>
        </div>
      </div>
      <div className="flex justify-between  border-b-2 border-b-[#1C1C27]">
        <div className="flex p-2 gap-3">
          <img src="/images/weather/UV.svg" alt="UV" />
          <p>UV index</p>
        </div>
        <div>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherRange;
