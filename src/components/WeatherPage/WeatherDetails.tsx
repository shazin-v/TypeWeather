import Image from "next/image";
import React from "react";
import { kelvinToCelsius } from "@/utils/utils";
import { WeatherData } from "@/types/types";

type Props = {
  weather: WeatherData;
};

const WeatherDetails = ({ weather }: Props) => {
  const {
    formattedLocalTime,
    temp,
    temp_min,
    temp_max,
    description,
    name,
    country,
    icon,
  } = weather;

  return (
    <div className="relative bg-[url('/images/image.png')] bg-cover bg-no-repeat h-[550px] p-4 flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-between p-5">
        <h6 className="font-bold text-white">{`${name}, ${country}`}</h6>
        <h6 className="font-bold text-white">{formattedLocalTime}</h6>
      </div>

      {/* Bottom Section */}
      <div className="p-5 text-white flex justify-between items-center">
        <div>
          <h6 className="font-bold text-white">{kelvinToCelsius(temp)}ºC</h6>
          <h6 className="text-white">
            {kelvinToCelsius(temp_min)}ºC / {kelvinToCelsius(temp_max)}ºC
          </h6>
          <h6 className="text-white">{description}</h6>
        </div>
        <div>
          <Image src={icon} alt="icon" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
