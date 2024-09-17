import React from "react";
import Image from "next/image";
import { kelvinToCelsius, capitalizeFirstLetter } from "@/utils/utils";
import { WeatherData } from "@/types/types";
import { getWeatherBackground } from "@/utils/utils";

type Props = {
  weather: WeatherData;
};

const WeatherDetails = ({ weather }: Props) => {
  const {
    formattedLocalTime,
    localTime,
    temp,
    temp_min,
    temp_max,
    details,
    description,
    name,
    country,
    icon,
  } = weather;

  const backgroundImage = getWeatherBackground(details);
  const textColor = details.toLowerCase().includes("clear")
    ? "text-black"
    : "text-white";

  return (
    <div
      className={` bg-no-repeat bg-cover  h-[550px] p-4 flex flex-col justify-between ${textColor}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Top Section */}
      <div className="flex justify-between p-5 backdrop-blur-lg bg-white/10">
        <div>
          <h6 className="font-bold text-lg ">{`${name}, ${country}`}</h6>
          <h6 className="font-light pt-4">{formattedLocalTime}</h6>
        </div>
        <p className="font-bold">{localTime}</p>
      </div>

      {/* Bottom Section */}
      <div className="  flex justify-between items-center ">
        <div className="backdrop-blur-lg bg-white/10 p-5">
          <h6 className="font-bold  text-5xl">{kelvinToCelsius(temp)}ºc</h6>
          <div className="pt-4 flex gap-4">
            <h6 className="font-bold">
              {kelvinToCelsius(temp_min)}ºc / {kelvinToCelsius(temp_max)}ºc
            </h6>
            <h6 className="font-normal">
              {capitalizeFirstLetter(description)}
            </h6>
          </div>
        </div>
        <div>
          <Image src={icon} alt="icon" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
