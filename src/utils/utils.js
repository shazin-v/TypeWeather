export const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed();

export const getDayLabel = (dateString, index) => {
  const forecastDate = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  if (index === 0) return "Today";
  if (index === 1) return "Tomorrow";

  return forecastDate.toLocaleDateString("en-US", { weekday: "long" });
};

export const loadOptions = async (inputValue) => {
  try {
    const response = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_GEO_API_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }
    );
    const response_1 = await response.json();
    return {
      options: response_1.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      })),
    };
  } catch (error) {
    console.error("Error fetching city data:", error);
    return { options: [] };
  }
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getWeatherBackground = (details) => {
  const lowerDescription = details.toLowerCase();

  if (lowerDescription.includes("clear")) return "/images/clear.gif";
  if (lowerDescription.includes("clouds")) return "/images/clouds.gif";
  if (lowerDescription.includes("rain")) return "/images/rain.gif";
  if (lowerDescription.includes("storm")) return "/images/thunderstorm.gif";
  if (lowerDescription.includes("snow")) return "/images/snow.gif";

  return "/images/image.png";
};