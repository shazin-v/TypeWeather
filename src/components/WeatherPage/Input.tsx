import React, { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import { AsyncPaginate } from "react-select-async-paginate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadOptions } from "@/utils/utils"; // Assuming utils.ts is in the root 'utils' folder

type Props = {
  setQuery: any;
};

const Input = ({ setQuery }: Props) => {
  const [search, setSearch] = useState(null);

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
          toast.error(
            `An unknown error occurred. Please try again: ${error.message}`
          );
        }
      );
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="flex justify-center items-center gap-2">
          <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleSearch}
            loadOptions={loadOptions}
          />
          <BiSearch
            className="cursor-pointer transition ease-out hover:scale-125"
            size={30}
            onClick={() => search && handleSearch(search)}
          />

          <BiCurrentLocation
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleGeoLocation}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
