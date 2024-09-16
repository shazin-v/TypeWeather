import Image from "next/image";
import React from "react";
import { kelvinToCelsius, getDayLabel } from "@/utils/utils";
import { WeatherData } from "@/types/types";

type Props = {
  weather: WeatherData;
};

const DayForeCast = ({ weather }: Props) => {
  const { daily } = weather;
  return (
    <>
      <div className="flex gap-10">
        {daily.map((day, index) => (
          <div key={index} className="bg-slate">
            <p>{getDayLabel(day.date, index)}</p>
            <Image src={day.icon} alt="Weather icon" width={100} height={100} />
            <p>temperature</p>
            <p>{kelvinToCelsius(day.temp)}ºC</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DayForeCast;
