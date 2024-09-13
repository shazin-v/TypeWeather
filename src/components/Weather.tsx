import React from "react";
import Input from "./WeatherPage/Input";
import Image from "next/image";
import WeatherDetails from "./WeatherPage/WeatherDetails";
import WeatherRange from "./WeatherPage/WeatherRange";
import DayForeCast from "./WeatherPage/DayForeCast";

type Props = {};

const Weather = (props: Props) => {
  return (
    // <div className="w-full p-4 m-6 bg-gray-800 rounded-lg">
    //   <div className="flex w-1/2 justify-between mb-4">
    //     <Image
    //       className="w-auto h-auto bg-gray-600"
    //       width={100}
    //       height={100}
    //       src="/images/logo.png"
    //       alt="logo"
    //     />
    //     <Input />
    //   </div>
    //   {/* Grid layout for weather details and next card */}

    //   <div className="grid grid-cols-1">
    //     {/* Left column: WeatherDetails */}
    //     <div className="flex">
    //       <WeatherDetails />
    //     </div>
    //     {/* Right column: Next weather card */}
    //     <div className="bg-gray-700 rounded-lg p-4 text-white w-1/2">
    //       <h4 className="font-bold mb-4">Next Weather</h4>
    //       {/* Example content for the next weather card */}
    //       <p>Location: Rio de Janeiro, RJ</p>
    //       <p>Temperature: 30ºC</p>
    //       <p>Condition: Clear Sky</p>
    //     </div>

    //     <div className="bg-gray-700 rounded-lg p-4 text-white w-1/2">
    //       <h4 className="font-bold mb-4">Next Weather</h4>
    //       {/* Example content for the next weather card */}
    //       <p>Location: Rio de Janeiro, RJ</p>
    //       <p>Temperature: 30ºC</p>
    //       <p>Condition: Clear Sky</p>
    //     </div>
    //   </div>
    // </div>

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
          <Input />
        </div>

        <WeatherDetails />
      </div>

      {/* Right panel */}

      <div className=" rounded-[24px] bg-[#13131A] p-6  flex flex-col gap-8 w-1/2">
        <div className="bg-[#16161F] rounded-lg p-4 text-white">
          <h4 className="font-bold mb-4">Today&apos;s weather details</h4>
          {/* Example content for the next weather card */}

          <WeatherRange />
        </div>

        <div className="bg-[#16161F] rounded-lg p-4 text-white">
          <h4 className="font-bold mb-4">5 day forecast</h4>
          {/* Example content for the next weather card */}
          <div className="flex">
            <DayForeCast />
            <DayForeCast />
            <DayForeCast />
            <DayForeCast />
            <DayForeCast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
