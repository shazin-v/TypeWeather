import Image from "next/image";
import React from "react";

type Props = {
  weather: {
    formattedLocalTime: number;
    name: string;
    country: string;
    temp: number;
    temp_max: number;
    description: string;
    temp_min: number;
    icon: any;
  };
};

const kelvinToCelsius = (kelvin: number) => (kelvin - 273.15).toFixed(1);
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
  const tempMinInCelsius = kelvinToCelsius(temp_min);
  const tempMaxInCelsius = kelvinToCelsius(temp_max);
  const tempInCelsius = kelvinToCelsius(temp);
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
        <h6 className="font-bold text-white">{tempInCelsius}ºc</h6>
        <div className="flex justify-between mt-2">
          <h6 className="text-white">
            {tempMinInCelsius}ºC / {tempMaxInCelsius}ºC
          </h6>
          <h6 className="text-white">{description}</h6>
          <Image src={icon} alt="icon" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
