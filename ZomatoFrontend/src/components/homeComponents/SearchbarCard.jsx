import React from "react";
import { BsArrowBarRight } from "react-icons/bs";

function SearchbarCard({ name, address, image }) {
  return (
    <div className="w-[97%] h-[95%] rounded flex items-center justify-center gap-1 p-1 shadow-sm shadow-slate-700 border">
      <div
        className={`w-[20%] h-[90%] rounded bg-[url(${image})] bg-cover bg-no-repeat border-1 shadow-md`}
      ></div>
      <div className="w-[72%] h-[90%] rounded px-2 flex justify-between">
        <div className="h-full flex flex-col justify-evenly">
          <h1 className="text-xs font-medium font-serif">{name}</h1>
          <p className="text-xs font-light">{address}</p>
        </div>
        <button className="text-xs gap-1 flex items-center text-red-500">
          Order Now <BsArrowBarRight />
        </button>
      </div>
    </div>
  );
}

export default SearchbarCard;
