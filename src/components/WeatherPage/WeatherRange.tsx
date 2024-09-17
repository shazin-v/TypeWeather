"use client";
import React from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { BsDroplet } from "react-icons/bs";
import { IoThermometer } from "react-icons/io5";
import { kelvinToCelsius } from "@/utils/utils";
import { WeatherData } from "@/types/types";

type Props = {
  weather: WeatherData;
};

const WeatherRange = ({ weather }: Props) => {
  const { speed, humidity, feels_like, visibility } = weather;
  const visibilityKm = (visibility / 1000).toFixed();

  const weatherrangedetails = [
    {
      id: 1,
      Icon: MdOutlineVisibility,
      title: "Visibility",
      value: `${visibilityKm} km`,
    },
    {
      id: 2,
      Icon: FiWind,
      title: "Wind Speed",
      value: `${speed.toFixed(2)} km/h`,
    },
    {
      id: 3,
      Icon: BsDroplet,
      title: "Air humidity",
      value: `${humidity}%`,
    },
    {
      id: 4,
      Icon: IoThermometer,
      title: "Thermal sensation",
      value: `${kelvinToCelsius(feels_like)}°C`,
    },
  ];

  return (
    <>
      <div className="flex-col">
        {weatherrangedetails.map(({ id, Icon, title, value }) => (
          <div
            key={id}
            className="flex justify-between border-b-2 border-b-[#1C1C27] p-2"
          >
            <div className="flex p-2 gap-3">
              <Icon size={24} />
              <p className="text-[#BFBFD4]">{title}</p>
            </div>
            <div>
              <p className="text-white">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherRange;
