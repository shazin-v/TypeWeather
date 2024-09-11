import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {};

const Input = (props: Props) => {
  return (
    <div className="w-full">
      <div className="relative flex">
        <input
          className="text-gray-400 bg-gray-600  w-full rounded-lg border-none focus:outline-none px-4 py-3 h-16"
          placeholder="Search Location"
          required
          type="text"
        />
        <ClipLoader
          color="#8FB2F5"
          size={30}
          className="absolute top-4 right-6 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Input;
