import React, { useCallback, useEffect, useState } from "react";
import Input from "./WeatherPage/Input";
import WeatherDetails from "./WeatherPage/WeatherDetails";
import WeatherRange from "./WeatherPage/WeatherRange";
import DayForeCast from "./WeatherPage/DayForeCast";
import getFormattedWeatherData from "@/services/weatherServices";
import { capitalizeFirstLetter } from "@/utils/utils";
import { WeatherData } from "@/types/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Weather = (props: Props) => {
  const [query, setQuery] = useState({ q: "kochi" });
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const getWeather = useCallback(async () => {
    const CityName = query.q || "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(CityName)}`, {
      autoClose: 2500,
    });

    try {
      const data = await getFormattedWeatherData({ ...query });
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      const correctedData = {
        ...data,
        formattedLocalTime: data.formatedLocalTime, // Corrected key name
      };
      setWeather(correctedData);
    } catch (error) {
      toast.error(`Failed to fetch weather data: ${error}`);
    }
  }, [query]);

  useEffect(() => {
    getWeather();
  }, [query, getWeather]);

  return (
    <>
      <div className="flex justify-between">
        <Input setQuery={setQuery} />
      </div>
      <div className=" flex-grow gap-4 flex m-7 ">
        {/* left panel */}
        <div className=" rounded-[24px] bg-[#16161F] p-6  flex flex-col w-1/2 h-4/5">
          {weather && <WeatherDetails weather={weather} />}
        </div>
        {/* Right panel */}
        <div className=" rounded-[24px] bg-[#13131A] px-6  flex flex-col gap-8 w-1/2 h-4/5">
          <div className="bg-[#16161F] rounded-lg p-4 text-[#7F7F98]">
            <h4 className="font-bold mb-4">Today&apos;s weather details</h4>
            {weather && <WeatherRange weather={weather} />}
          </div>
          <div className="bg-[#16161F] rounded-lg p-4 text-white">
            <h4 className="font-bold mb-4 text-[#7F7F98]">5 day forecast</h4>
            {/* Example content for the next weather card */}
            <div className="flex gap-10">
              {weather && <DayForeCast weather={weather} />}
            </div>
          </div>
        </div>
        <ToastContainer
          autoClose={2500}
          hideProgressBar={true}
          theme="colored"
        />
      </div>
    </>
  );
};

export default Weather;
