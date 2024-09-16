import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

type Props = {
  onSearchChange: (searchData: any) => void;
};

const Search = ({ onSearchChange }: Props) => {
  const [search, setSearch] = useState(null);

  // Corrected the syntax in the loadOptions function
  const loadOptions = (inputValue: string) => {
    console.log("Input value:", inputValue); // Log input value
    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ad9eb5a690msh59a2977a4510f40p1c9254jsn97f637b61547', // Replace with your RapidAPI key
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("API response:", response); // Log API response
        return {
          options: response.data.map((city: any) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((error) => {
        console.error("Error fetching city data:", error);
        return { options: [] }; // Return empty options in case of error
      });
  };

  const handleOnChange = (searchData: any) => {
    console.log("Selected city data:", searchData); // Log selected city data
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
