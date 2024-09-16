
// Type for weather daily forecast data
export type DailyForecast = {
    temp: number;
    title: string;
    icon: string;
    date: string;
  };
  
  // Type for formatted weather data
  export type WeatherData = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    name: string;
    country: string;
    details: string;
    description: string;
    icon: string;
    speed: number;
    visibility: number;
    formattedLocalTime: string;
    dt: number;
    timezone: number;
    lat: number;
    lon: number;
    daily: DailyForecast[];
  };
  
  // Type for search data input
  export type SearchData = {
    value: string;
    label: string;
  };
  