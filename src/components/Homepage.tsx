"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const Homepage = (props: Props) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/weather");
  };
  return (
    <>
      <div className=" w-full h-screen overflow-auto">
        <div className="flex justify-center items-center mx-auto gap-2.5 p-2.5 mt-10">
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
          <h1 className="text-4xl text-[#8FB2F5]  font-bold">
            Welcome to TypeWeather
          </h1>
          <p className="text-xl text-[#BFBFD4]  pt-5 pb-14">
            Choose a location to see the weather forecast
          </p>
          <button
            className="p-3 rounded-full bg-[#8FB2F5] text-black cursor-pointer transition ease-out hover:scale-125"
            onClick={handleNavigate}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
