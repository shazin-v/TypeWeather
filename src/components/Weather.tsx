import React from "react";
import Input from "./WeatherPage/Input";
import Image from "next/image";
import WeatherDetails from "./WeatherPage/WeatherDetails";

type Props = {};

const Weather = (props: Props) => {
  return (
    <div className="w-full p-4 m-6 bg-gray-800 rounded-lg">
      <div className="flex justify-between mb-4">
        <Image
          className="w-auto h-auto bg-gray-600"
          width={100}
          height={100}
          src="/images/logo.png"
          alt="logo"
        />
        <Input />
      </div>
      {/* Grid layout for weather details and next card */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left column: WeatherDetails */}
        <div className="space-y-4">
          <WeatherDetails />
        </div>
        {/* Right column: Next weather card */}
        <div className="bg-gray-700 rounded-lg p-4 text-white">
          <h4 className="font-bold mb-4">Next Weather</h4>
          {/* Example content for the next weather card */}
          <p>Location: Rio de Janeiro, RJ</p>
          <p>Temperature: 30ºC</p>
          <p>Condition: Clear Sky</p>
        </div>

        <div className="bg-gray-700 rounded-lg p-4 text-white">
          <h4 className="font-bold mb-4">Next Weather</h4>
          {/* Example content for the next weather card */}
          <p>Location: Rio de Janeiro, RJ</p>
          <p>Temperature: 30ºC</p>
          <p>Condition: Clear Sky</p>
        </div>  
      </div>
    </div>
  );
};

export default Weather;
