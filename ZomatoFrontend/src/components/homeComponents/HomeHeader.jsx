import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";

function HomeHeader() {
  let { pathname } = useLocation();

  return (
    <div
      className={`w-screen h-[70px] ${
        pathname == "/" ? "bg-transparent" : "bg-red-700"
      } flex items-center justify-between px-4`}
    >
      <div className={`text-white ${pathname === "/" ? "" : "hidden"}`}>
        <AiOutlineMenu size={25} className="md:flex lg:hidden" />
      </div>
      <h1
        className={`text-white font-bold text-3xl italic ${
          pathname === "/" ? "hidden" : ""
        }`}
      >
        zomato
      </h1>
      <div
        className={`flex items-center justify-center gap-8 ${
          pathname === "/" ? "sm:hidden md:hidden" : ""
        }   lg:flex pr-4`}
      >
        <button className="text-white font-normal text-xl">Log in</button>
        <button className="text-white font-normal text-xl">Sign up</button>
      </div>
    </div>
  );
}

export default HomeHeader;
