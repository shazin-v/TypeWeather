import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import { AsyncPaginate } from "react-select-async-paginate";

type Props = {
  setQuery: any;
  setUnit: any;
};

const Input = ({ setQuery, setUnit }: Props) => {
  const [city, setCity] = useState("");
  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Geolocation success:", position); // Log the entire position object
          console.log("Latitude:", latitude, "Longitude:", longitude); // Log specific values
          setQuery({ lat: latitude, lon: longitude });
        },
        (error) => {
          // Handle specific error codes
          switch (error.code) {
            case 1:
              console.error("Error: Permission denied. Please allow location access.");
              alert("Please allow location access in your browser settings.");
              break;
            case 2:
              console.error("Error: Position unavailable.");
              alert("Position information is unavailable.");
              break;
            case 3:
              console.error("Error: Timeout. The request took too long.");
              alert("Location request timed out. Please try again.");
              break;
            default:
              console.error("An unknown error occurred:", error);
              alert("An unknown error occurred. Please try again.");
          }
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by your browser.");
    }
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
        {/* <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={600}
          value={city}
          // value={search}
          // onChange={handleOnChange}
          onChange={(e) => setCity(e.target.value)}
          loadOptions={loadOptions}
        /> */}
        <BiSearch
          className="cursor-pointer transition ease-out hover:scale-125"
          size={30}
          onClick={handleSearch}
        />

        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleGeoLocation}
        />
      </div>
    </div>
  );
};

export default Input;
