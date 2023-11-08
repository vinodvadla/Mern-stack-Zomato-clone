import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/wallpaper.css";
import SearchBar from "./SearchBar";

function Wallpaper() {
  return (
    <div className="w-screen h-[80vh] bg-[url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)] p-2 bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="w-screen h-[12%] flex items-center justify-between px-4 ">
        <div className=" text-white">
          <AiOutlineMenu size={25} className="md:flex lg:hidden" />
        </div>
        <div className="flex items-center justify-center gap-8 hidden  sm:hidden md:hidden lg:flex pr-4">
          <button className="text-white font-normal text-xl">Log in</button>
          <button className="text-white font-normal text-xl">Sign up</button>
        </div>
      </div>
      <div className="w-full h-[88%] flex flex-col items-center justify-start gap-6">
        <h1 className="zomato-text text-8xl font-extrabold text-white text-center">
          zomato
        </h1>
        <p className="text-white text-4xl text-center p-2 tracking-wide">
          Discover the best food & drinks in Hyderabad
        </p>
        <SearchBar />
      </div>
    </div>
  );
}

export default Wallpaper;
