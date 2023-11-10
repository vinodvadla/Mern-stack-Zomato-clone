import { GrLocation } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [locations, setLocations] = useState([]);
  const getLocations = async () => {
    let res = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/cities",
      { country: "India" }
    );
    setLocations(res.data.data);
  };
  useEffect(() => getLocations, []);

  return (
    <div className="sm:w-[90%] lg:w-[68%] md:w-[90%] w-[90%] h-14 bg-white rounded-lg flex">
      <div className="w-[250px] h-full flex items-center justify-center px-4">
        <GrLocation size={25} />
        <select className="w-full px-8 outline-none border-r-2 border-gray-300">
          {locations.map((e, i) => {
            return (
              <option key={i} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
      <div className="md:w-[70%] lg:w-[70%] sm:[50%] flex items-center judtify-center ">
        <LuSearch size={25} className="text-gray-400" />
        <input
          type="text"
          className="w-full outline-none text-base px-4 py-2 placeholder:text-base"
          placeholder="Search for a restaurant,cuisine or a dish"
        />
      </div>
    </div>
  );
}

export default SearchBar;
