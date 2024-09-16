import { DateTime } from "luxon";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = async(infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  try {
    const response = await fetch(url.toString());
    if (!response.ok) throw new Error("Failed to fetch weather data");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }};

const iconUrlFromCode = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy '| Local time:'hh:mm:a "
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const formatCurrent = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    visibility,
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon, description } = weather[0];
  const formatedLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    name,
    country,
    details,
    icon: iconUrlFromCode(icon),
    description,
    speed,
    formatedLocalTime,
    dt,
    visibility,
    timezone,
    lat,
    lon,
  };
};

const formatForecastWeather = (sec, offset, data) => {
  const daily = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "cccc"),
      icon: iconUrlFromCode(f.weather[0].icon),
      date: f.dt_txt,
    }))
    .slice(0, 5);

  return { daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formatCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);

  const { lat, lon, dt, timezone } = formatCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((d) => formatForecastWeather(dt, timezone, d.list));

  return { ...formatCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
