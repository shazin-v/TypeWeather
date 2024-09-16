import React from "react";

type Props = {
  weather: {
    temp_min: any;
    icon: any;
    temp_max: any;
    daily: [
      temp: number,
      title: string,
      icon: string,
      date: string // Date for the forecast
    ];
  };
};
const kelvinToCelsius = (kelvin: number) => (kelvin - 273.15).toFixed(1);

// Function to get "Today", "Tomorrow", or the actual day name (like "Monday")
const getDayLabel = (dateString: string, index: number) => {
  const forecastDate = new Date(dateString); // Convert forecast date string to Date object
  const today = new Date(); // Get today's date
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1); // Set tomorrow's date

  if (index === 0) return "Today"; // For the first item, label it "Today"
  if (index === 1) return "Tomorrow"; // For the second item, label it "Tomorrow"

  // If it's not today or tomorrow, return the day of the week
  return forecastDate.toLocaleDateString("en-US", { weekday: "long" });
};

const DayForeCast = ({ weather }: Props) => {
  const { temp_min, temp_max, icon, daily } = weather;
  // const { temp, title, icon: dailyIcon } = weather.daily;
  const tempMinInCelsius = kelvinToCelsius(temp_min);
  const tempMaxInCelsius = kelvinToCelsius(temp_max);
  return (
    <div className="flex gap-10">
      {daily.map((day, index) => (
        <div key={index} className="bg-slate">
          <p>{getDayLabel(day.date, index)}</p> {/* Use getDayLabel function */}
          <img src={day.icon} alt="Weather icon" />
          <p>temperature</p>
          <p>{kelvinToCelsius(day.temp)}ºC</p>
        </div>
      ))}
    </div>
  );
};

export default DayForeCast;
