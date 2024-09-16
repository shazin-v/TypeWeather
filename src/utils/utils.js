export const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

// Function to get "Today", "Tomorrow", or the actual day name (like "Monday")
export const getDayLabel = (dateString, index) => {
  const forecastDate = new Date(dateString); // Convert forecast date string to Date object
  const today = new Date(); // Get today's date
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1); // Set tomorrow's date

  if (index === 0) return "Today"; // For the first item, label it "Today"
  if (index === 1) return "Tomorrow"; // For the second item, label it "Tomorrow"

  // If it's not today or tomorrow, return the day of the week
  return forecastDate.toLocaleDateString("en-US", { weekday: "long" });
};

// Load options from the GeoDB Cities API
export const loadOptions = async (inputValue) => {
  try {
    const response = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_GEO_API_KEY, // Ensure this is correctly set in .env.local
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
