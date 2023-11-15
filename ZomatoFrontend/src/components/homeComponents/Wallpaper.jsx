import React from "react";

import "../styles/wallpaper.css";
import SearchBar from "./SearchBar";
import HomeHeader from "./HomeHeader";

function Wallpaper({ openModal, closeModal, openSignupModal }) {
  return (
    <div className="w-screen h-[80vh] bg-[url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)] bg-cover bg-center bg-no-repeat overflow-hidden">
      <HomeHeader
        openModal={openModal}
        closeModal={closeModal}
        OpenSignupModal={openSignupModal}
      />
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
