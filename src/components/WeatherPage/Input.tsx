import React, { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { AsyncPaginate } from "react-select-async-paginate";
import { loadOptions } from "@/utils/utils";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

type Props = {
  setQuery: any;
};

const Input = ({ setQuery }: Props) => {
  const [search, setSearch] = useState(null);
  const router = useRouter();

  const handleSearch = (searchData: any) => {
    setSearch(searchData);
    if (searchData) {
      const [lat, lon] = searchData.value.split(" ");
      setQuery({ lat, lon });
    }
  };

  const handleGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setQuery({ lat: latitude, lon: longitude });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              toast.error("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              toast.error("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              toast.error("The request to get user location timed out.");
              break;
            default:
              toast.error(`An unknown error occurred: ${error.message}`);
              break;
          }
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  const handleNavigation = () =>{
    router.push("/")
  }

  return (
    <>
      <div className="w-full mt-7">
        <div className="flex justify-center items-center gap-2">
          <Image
            className="w-auto h-auto p-3 mr-3 rounded-lg bg-[#1E1E29] max-md:ml-5 cursor-pointer"
            width={100}
            height={100}
            src="/images/logo.png"
            alt="logo"
            onClick={handleNavigation}
          />
          <AsyncPaginate
            placeholder="Search for city"
            className="w-1/2 cursor-pointer rounded-lg outline-none max-md:w-full"
            debounceTimeout={600}
            value={search}
            onChange={handleSearch}
            loadOptions={loadOptions}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#1E1E29", // Custom background color for input
                color: "white",
                borderColor: "transparent", // Remove border if needed
                "&:hover": {
                  borderColor: "#4A4A68", // Change hover border color
                },
              }),
              input: (base) => ({
                ...base,
                color: "white", // Input text color
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#1E1E29", // Dropdown background color
              }),
              singleValue: (base) => ({
                ...base,
                color: "white", // Text color for the selected value
              }),
              placeholder: (base) => ({
                ...base,
                color: "#aaa", // Placeholder text color
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#33334D" : "#1E1E29", // Highlight focused option
                color: "white", // Option text color
              }),
            }}
          />
          <BiCurrentLocation
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125 max-md:mx-5"
            onClick={handleGeoLocation}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
