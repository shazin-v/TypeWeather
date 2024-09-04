"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const Homepage = (props: Props) => {
    const router = useRouter();

const handleNavigate = () =>{
    router.push("/weather")
}
  return (
    <div className=" w-full h-screen overflow-auto">
      <div className="flex justify-center items-center mx-auto gap-2.5 p-2.5 mt-4 w-1/3">
        {/* <Image className="w-auto h-auto" src="/images/logo.png" alt="logo" /> */}
        <h1 className="text-2xl font-bold text-gray-100 leading-7">
          TypeWeather
        </h1>
      </div>
      <div className="w-[504px] flex flex-col justify-center items-center mx-auto mt-40">
        <h1 className="text-lg text-blue-200  font-bold">
          Welcome to TypeWeather
        </h1>
        <p className="text-lg text-gray-400  pt-2">
          Choose a location to see the weather forecast
        </p>
        <div className="pt-14 w-full">
          <div className="relative flex">
            <input
              className="text-white text-[var(--text-md-font-size)] bg-[var(--color-gray-600)] w-full rounded-lg border-none focus:outline-none px-4 py-3 h-16"
              placeholder="Search Location"
              required
              type="text"
            />
            {/* <ClipLoader color="#8FB2F5" size={30} className="absolute top-4 right-6 pointer-events-none" /> */}
          </div>
        </div>
        <button onClick={handleNavigate}>Next page</button>
      </div>
    </div>
  );
};

export default Homepage;
