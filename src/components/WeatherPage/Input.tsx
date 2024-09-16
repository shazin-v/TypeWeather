import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { BiCurrentLocation } from "react-icons/bi";

type Props = {
  setQuery: any;
  setUnits: any;
};

const Input = ({ setQuery, setUnits }: Props) => {
  const [city, setCity] = useState("");
  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-2">
        <input
          className="text-gray-400 bg-[#1E1E29]  w-full rounded-lg border-none focus:outline-none px-4 py-3 h-16"
          placeholder="Search by citiy..."
          required
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <ClipLoader
          color="#8FB2F5"
          size={30}
          className="absolute top-4 right-6 pointer-events-none"
        /> */}
        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default Input;
