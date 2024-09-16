"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import Input from "./WeatherPage/Input";

type Props = {};

const Homepage = (props: Props) => {
  const [query, setQuery] = useState({ q: "iwaki" });
  const [unit, setUnit] = useState("metric");
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/weather");
  };
  return (
    <div className=" w-full h-screen overflow-auto">
      <div className="flex justify-center items-center mx-auto gap-2.5 p-2.5 mt-4 w-1/3">
        <Image
          className="w-auto h-auto"
          width={100}
          height={100}
          src="/images/logo.png"
          alt="logo"
        />
        <h1 className="text-2xl font-bold text-gray-100 leading-7">
          TypeWeather
        </h1>
      </div>
      <div className="w-[504px] flex flex-col justify-center items-center mx-auto mt-40">
        <h1 className="text-lg text-blue-200  font-bold">
          Welcome to TypeWeather
        </h1>
        <p className="text-lg text-gray-400  pt-2 pb-14">
          Choose a location to see the weather forecast
        </p>
        <Input setQuery={setQuery} setUnit={setUnit}/>
        <button onClick={handleNavigate}>Next page</button>
      </div>
    </div>
  );
};

export default Homepage;
