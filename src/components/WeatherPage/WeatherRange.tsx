"use client";
import React from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { FiWind } from "react-icons/fi"; // Add wind icon from react-icons
import { BsDroplet } from "react-icons/bs"; // Humidity icon
import { IoThermometer } from "react-icons/io5"; // Thermal sensation icon


type Props = {
  weather: {
    details: string;
    icon: string;
    speed: number;
    humidity: number;
    feels_like: number;
    visibility: number;
    rain?: {
      "1h": number; // Amount of rain in millimeters
    };
  };
};

const WeatherRange = ({ weather }: Props) => {
  const { details, icon, speed, humidity, feels_like, rain, visibility } = weather;

  // Determine the rain amount and convert it to a probability percentage if needed
  const rainAmount = rain ? rain["1h"] : 0;
  const rainProbability = rainAmount > 0 ? `${rainAmount.toFixed(2)} mm` : "0%";

  const visibilityKm = (visibility / 1000).toFixed(1);

  // Convert feels_like from Kelvin to Celsius
  const feelsLikeCelsius = (feels_like - 273.15).toFixed(1);

  const weatherrangedetails = [
    // TODO: visibility
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
      value: `${feelsLikeCelsius}°C`, 
    },
  ];

  return (
    <div className="flex-col">
      {weatherrangedetails.map(({ id, Icon, title, value }) => (
        <div key={id} className="flex justify-between border-b-2 border-b-[#1C1C27]">
          <div className="flex p-2 gap-3">
            <Icon size={24} />
            <p>{title}</p>
          </div>
          <div>
            <p>{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherRange;
