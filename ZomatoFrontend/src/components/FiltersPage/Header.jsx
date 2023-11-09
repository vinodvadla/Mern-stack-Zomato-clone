import React from "react";

function Header() {
  return (
    <div className="w-screen h-[13vh] bg-red-500 flex items-center justify-between px-10">
      <h1 className="text-white font-bold text-3xl italic">zomato</h1>
      <div className="lg:w-[18%] md:w-[20vw] sm:w-[25vw] xs:w-[30vw] w-[40%] flex items-center justify-between p-4">
        <button className="text-white text-sm font-normal lg:text-md rounded px-2">
          Log in
        </button>
        <button className="text-white font-normal text-sm">Sign up</button>
      </div>
    </div>
  );
}

export default Header;
