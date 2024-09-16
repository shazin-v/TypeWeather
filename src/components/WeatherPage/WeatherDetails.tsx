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
    // TODO
    <div className="relative bg-[url('/images/image.png')] bg-cover bg-no-repeat h-[600px] p-4">
      <div className="flex justify-between">
        <h6 className="font-bold text-white">{`${name}, ${country}`}</h6>
        <h6 className="font-bold text-white">{formattedLocalTime}</h6>
      </div>

      {/* This flex-grow pushes the next div to the bottom */}
      <div className="flex-grow"></div>

      <div className="flex flex-col justify-end  p-4">
        <h6 className="font-bold text-white">{kelvinToCelsius(temp)}ºc</h6>
        <div className="flex justify-between mt-2">
          <h6 className="text-white">
            {kelvinToCelsius(temp_min)}ºC / {kelvinToCelsius(temp_max)}ºC
          </h6>
          <h6 className="text-white">{description}</h6>
          <Image src={icon} alt="icon" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
