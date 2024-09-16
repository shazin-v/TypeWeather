"use client"

import React, { useState } from "react";
import Search from "./Search";

type Props = {};

const Dummy = (props: Props) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData: { value: string; label: string }) => {
        const [lat, lon] = searchData.value.split(" ");
    
        const currentWeatherFetch = fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ec0b1fabbbd6349b9ce05f1c07a67c9e&units=metric`
        );
        const forecastFetch = fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ec0b1fabbbd6349b9ce05f1c07a67c9e&units=metric`
        );
    
        Promise.all([currentWeatherFetch, forecastFetch])
          .then(async (response) => {
            const weatherResponse = await response[0].json();
            const forcastResponse = await response[1].json();
            setCurrentWeather({ city: searchData.label, ...weatherResponse });
            setForecast({ city: searchData.label, ...forcastResponse });
            console.log("wDummy eatherResponse",currentWeather)
            console.log("fDummy orcastResponse",forecast)
          })
          .catch(console.log);
      };
  return (
    <div>
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
};

export default Dummy;
