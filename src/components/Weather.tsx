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
  const [query, setQuery] = useState({ q: "" });
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
      {weather ? (
        <>
          <div className="flex-grow gap-4 flex m-7 max-md:flex-col">
            {/* Left panel */}
            <div className="rounded-[24px] bg-[#16161F] p-6 flex flex-col w-1/2 h-4/5 max-md:w-full">
              <WeatherDetails weather={weather} />
            </div>

            {/* Right panel */}
            <div className="rounded-[24px] bg-[#13131A] px-6 flex flex-col gap-3 w-1/2 h-4/5 max-md:w-full">
              <div className="bg-[#16161F] rounded-lg p-4 text-[#7F7F98] my-3">
                <h4 className="font-bold mb-4">Today&apos;s weather details</h4>
                <WeatherRange weather={weather} />
              </div>
              <div className="bg-[#16161F] rounded-lg p-4 text-white max-md:mb-2">
                <h4 className="font-bold pb-4 text-[#7F7F98]">
                  5 day forecast
                </h4>
                <div className="flex gap-10">
                  <DayForeCast weather={weather} />
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
            autoClose={2500}
            hideProgressBar={true}
            theme="colored"
          />
        </>
      ) : (
        <div className="flex justify-center items-center h-1/2">
          <p className="text-3xl text-[#aaaaaa] max-md:text-center max-md:text-xl">
            Select a country to display weather
          </p>
        </div>
      )}
    </>
  );
};

export default Weather;
