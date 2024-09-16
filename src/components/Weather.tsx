import React, { useEffect, useState } from "react";
import Input from "./WeatherPage/Input";
import Image from "next/image";
import WeatherDetails from "./WeatherPage/WeatherDetails";
import WeatherRange from "./WeatherPage/WeatherRange";
import DayForeCast from "./WeatherPage/DayForeCast";
import getFormattedWeatherData from "@/services/weatherServices";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

type Props = {};

const Weather = (props: Props) => {
  const [query, setQuery] = useState({ q: "iwaki" });
  const [unit, setUnit] = useState("metric");
  interface WeatherData {
    hourly: any;
    daily: any;
    temp: any;
    feels_like: any;
    temp_min: any;
    temp_max: any;
    pressure: any;
    humidity: any;
    name: any;
    country: any;
    sunrise: any;
    sunset: any;
    details: any;
    description: string;
    icon: string;
    speed: any;
    visibility: number;
    formattedLocalTime: number;
    dt: any;
    timezone: any;
    lat: any;
    lon: any;
  }

  const [weather, setWeather] = useState<WeatherData | null>(null);

  const getWeather = async () => {
    const CityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(CityName)}`, {
      autoClose: 2500,
    });

    await getFormattedWeatherData({ ...query, unit }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      const correctedData = {
        ...data,
        formattedLocalTime: data.formatedLocalTime,
      };
      setWeather(correctedData);
      console.log(" correctedData:", correctedData); // Moved the console log inside the .then block
    });
  };

  useEffect(() => {
    getWeather();
  }, [unit, query]);

  return (
    <div className=" flex-grow m-5 gap-4 flex  h-[95vh] ">
      {/* left panel */}
      <div className=" rounded-[24px] bg-[#16161F] p-6  flex flex-col gap-8 w-1/2">
        <div className="flex justify-between mb-4">
          <Image
            className="w-auto h-auto mr-3 bg-[#1E1E29]"
            width={100}
            height={50}
            src="/images/logo.png"
            alt="logo"
          />
          <Input setQuery={setQuery} setUnit={setUnit} />
        </div>

        {weather && <WeatherDetails weather={weather} />}
      </div>

      {/* Right panel */}

      <div className=" rounded-[24px] bg-[#13131A] p-6  flex flex-col gap-8 w-1/2">
        <div className="bg-[#16161F] rounded-lg p-4 text-white">
          <h4 className="font-bold mb-4">Today&apos;s weather details</h4>
          {/* Example content for the next weather card */}

          {weather && <WeatherRange weather={weather} />}
        </div>

        <div className="bg-[#16161F] rounded-lg p-4 text-white">
          <h4 className="font-bold mb-4">5 day forecast</h4>
          {/* Example content for the next weather card */}
          <div className="flex gap-10">
            {weather && <DayForeCast weather={weather} />}
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default Weather;
