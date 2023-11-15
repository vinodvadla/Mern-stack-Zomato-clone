import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

function HomeHeader({ openModal, closeModal, OpenSignupModal }) {
  let { pathname } = useLocation();
  let { user, UserDispatch } = useUserContext();
  let navigate = useNavigate();
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
        onClick={() => {
          navigate("/");
        }}
        className={`text-white cursor-pointer font-bold text-3xl italic ${
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
        {!user ? (
          <>
            <button
              className="text-white font-normal text-xl"
              onClick={openModal}
            >
              Log in
            </button>
            <button
              onClick={OpenSignupModal}
              className="text-white font-normal text-xl"
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            <button className="text-white font-normal text-xl">
              {user.name}
            </button>
            <button
              onClick={() => {
                UserDispatch({ type: "LOGOUT" });
                closeModal();
              }}
              className="text-white font-normal text-xl"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default HomeHeader;
