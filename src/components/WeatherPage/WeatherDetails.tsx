import React from "react";

type Props = {};

const WeatherDetails = (props: Props) => {
  return (
    <div className="relative bg-[url('/images/clouds.gif')] bg-cover bg-no-repeat h-[600px] w-[632px] p-4">
      <div className="flex justify-between">
        <h6 className="font-bold text-white">Porto Alegre, RS</h6>
        <h6 className="font-bold text-white">21:39</h6>
      </div>
      <h6 className="font-bold text-white">Monday, May 15, 2023</h6>

      {/* This flex-grow pushes the next div to the bottom */}
      <div className="flex-grow"></div>

      <div className="flex flex-col justify-end bg-black p-4">
        <h6 className="font-bold text-white">28ºc</h6>
        <div className="flex justify-between mt-2">
          <h6 className="text-white">32ºc / 26ºc</h6>
          <h6 className="text-white">Few clouds</h6>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
