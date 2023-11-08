import { GrLocation } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";

function SearchBar() {
  return (
    <div className="sm:w-[90%] lg:w-[68%] md:w-[90%] w-[90%] h-14 bg-white rounded-lg flex">
      <div className="w-[250px] h-full flex items-center justify-center px-4">
        <GrLocation size={25} />
        <select className="w-full px-8 outline-none border-r-2 border-gray-300">
          <option value="del">Delhi</option>
          <option value="hyd">Hyderabad</option>
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
