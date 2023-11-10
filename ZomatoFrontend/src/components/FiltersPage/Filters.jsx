import React from "react";
import Allfilters from "./Allfilters";
import FoodCards from "./FoodCards";
import HomeHeader from "./../homeComponents/HomeHeader";
function Filters() {
  return (
    <div>
      <HomeHeader />
      <div className="px-10 py-4">
        <h1 className="text-2xl font-bold py-3">Breakfast placees in Mumbai</h1>
        <div className="w-screen h-full flex lg:flex-row md:w-screen gap-10 flex-col">
          <Allfilters />
          <FoodCards />
        </div>
      </div>
    </div>
  );
}

export default Filters;
