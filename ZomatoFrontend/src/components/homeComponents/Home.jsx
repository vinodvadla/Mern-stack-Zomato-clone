import { useState } from "react";
import Wallpaper from "./Wallpaper";
import QuickSearches from "./QuickSearches";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useUserContext } from "../../hooks/useUserContext";
import { MdAlternateEmail } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import FacebookLogin from "react-facebook-login";

function Home() {
  let { UserDispatch } = useUserContext();
  const [openModal, setOpenModal] = useState(false);
  let [isSocial, setIsSocial] = useState(false);
  let [isSignup, setIsSignup] = useState(false);
  let [error, setError] = useState(null);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [rEmail, setRemail] = useState("");
  let [rName, setRname] = useState("");
  let [rPass, setRpass] = useState("");
  let [rerror, setRerror] = useState(null);
  let [msg, setmsg] = useState(null);

  const loginUser = async () => {
    if (email == "" || password == "") {
      return setError("Please fill all fields");
    }
    setEmail("");
    setPassword("");
    let res = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });
    if (res.data.error) {
      return setError(res.data.error);
    }
    closeModal();
    UserDispatch({
      type: "LOGIN",
      payload: { token: res.data.token, ...res.data.user },
    });
  };
  let login = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        let response = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${res.access_token}`,
            },
          }
        );
        UserDispatch({ type: "LOGIN", payload: response.data });
        closeModal();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const registerUser = async () => {
    let res = await axios.post("http://localhost:5000/signup", {
      name: rName,
      email: rEmail,
      password: rPass,
    });
    setRemail("");
    setRpass("");
    setRname("");
    if (res.data.error) {
      return setRerror(res.data.error);
    }
    setmsg(res.data.message);
  };
  const isOpenModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  const openSignupModal = () => {
    setIsSignup(true);
  };

  return (
    <div>
      <Wallpaper
        openModal={isOpenModal}
        closeModal={closeModal}
        openSignupModal={openSignupModal}
      />
      <QuickSearches />
      {!isSocial ? (
        <Modal
          ariaHideApp={false}
          className="w-[90%] h-[70%] overflow-hidden md:w-[40%] xs:w-[60%] lg:w-[30%] sm:w-[50%] duration-200 bg-white m-auto shadow-sm shadow-black border border-gray-400 rounded border-none outline-none translate-y-[25%]"
          isOpen={openModal}
          onAfterOpen={isOpenModal}
          onRequestClose={closeModal}
        >
          <div className="w-full h-full relative flex items-center justify-center">
            <GrClose
              className="absolute top-4 right-4 font-bold cursor-pointer"
              size={20}
              onClick={closeModal}
            />
            <div className="w-[85%] h-[100%] flex flex-col items-center gap-5 justify-center">
              <h1 className="font-bold text-xl">Login With Social Accounts</h1>
              <div
                onClick={login}
                className="w-full h-[13%] cursor-pointer flex items-center justify-evenly px-2 bg-white shadow-sm shadow-black rounded"
              >
                <FcGoogle size={25} />
                <h1 className="text-lg font-semibold">Continue With Google</h1>
              </div>

              <FacebookLogin
                appId="4400092300130513"
                textButton="Continue with facebook"
                icon={<FaFacebookF size={20} />}
                autoLoad={true}
                cssClass="w-[325px] text-white font-bold cursor-pointer h-[55px] flex items-center justify-evenly px-4 bg-blue-700 shadow-sm shadow-black rounded"
                callback={(res) => {
                  UserDispatch({ type: "LOGIN", payload: { ...res } });
                }}
              />

              <div className="w-full h-[2px] border-dotted border-black border-2 rounded-md relative flex items-center justify-center">
                <p className="text-lg font-bold absolute bg-white">Or</p>
              </div>
              <div
                onClick={() => {
                  setIsSocial((prev) => !prev);
                }}
                className="w-full h-[13%] flex items-center cursor-pointer justify-evenly px-2 bg-[#769532] shadow-sm shadow-black rounded"
              >
                <h1 className="text-lg font-semibold text-white">
                  Login with Credentials
                </h1>
              </div>
              <h1 className="text-md text-semibold">
                Don't have an Account ?{" "}
                <span className=" text-red-500 text-bold text-md">
                  Create Account
                </span>
              </h1>
            </div>
          </div>
        </Modal>
      ) : (
        <Modal
          ariaHideApp={false}
          className="w-[90%] h-[70%] overflow-hidden md:w-[40%] xs:w-[60%] lg:w-[30%] sm:w-[50%] duration-200 bg-white m-auto shadow-sm shadow-black border border-gray-400 rounded border-none outline-none translate-y-[25%]"
          isOpen={openModal}
          onAfterOpen={isOpenModal}
          onRequestClose={closeModal}
        >
          <p className="text-xs text-red-500">{error && error}</p>
          <div className="w-full h-full relative flex items-center justify-center">
            <GrClose
              className="absolute top-4 right-4 font-bold cursor-pointer"
              size={20}
              onClick={closeModal}
            />
            <FaArrowLeft
              className="absolute top-4 left-4 font-bold cursor-pointer"
              size={20}
              onClick={() => {
                setIsSocial((prev) => !prev);
              }}
            />
            <div className="w-[85%] h-[100%] flex flex-col items-center gap-5 justify-center">
              <h1 className="font-bold text-xl">Login</h1>
              <div className="w-full h-[13%] cursor-pointer flex items-center justify-evenly px-2 bg-white shadow-sm shadow-black rounded">
                <MdAlternateEmail size={25} />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    if (error !== "") {
                      setError(null);
                    }
                    setEmail(e.target.value);
                  }}
                  className="h-full w-[80%] outline-none border-none"
                  placeholder="Enter Email"
                />
              </div>
              <div className="w-full h-[13%] cursor-pointer flex items-center justify-evenly px-2 bg-white shadow-sm shadow-black rounded">
                <RiLockPasswordLine size={25} />
                <input
                  type="text"
                  value={password}
                  onChange={(e) => {
                    if (error !== "") {
                      setError(null);
                    }
                    setPassword(e.target.value);
                  }}
                  className="h-full w-[80%] outline-none border-none"
                  placeholder="Enter Password"
                />
              </div>
              <div className="w-full h-[2px] border-dotted border-black border-2 rounded-md relative flex items-center justify-center"></div>
              <div
                onClick={loginUser}
                className="w-full cursor-pointer h-[13%] flex items-center justify-evenly px-2 bg-[#769532] shadow-sm shadow-black rounded"
              >
                <h1 className="text-lg font-semibold text-white">Login</h1>
              </div>
              <h1 className="text-md text-semibold">
                Don't have an Account ?{" "}
                <span className=" text-red-500 text-bold text-md">
                  Create Account
                </span>
              </h1>
            </div>
          </div>
        </Modal>
      )}
      <Modal
        ariaHideApp={false}
        className="w-[90%] h-[75%] py-3 overflow-hidden md:w-[40%] xs:w-[60%] lg:w-[30%] sm:w-[50%] duration-200 bg-white m-auto shadow-sm shadow-black border border-gray-400 rounded border-none outline-none translate-y-[25%]"
        isOpen={isSignup}
        onRequestClose={() => {
          setIsSignup(false);
        }}
      >
        <p className="text-xs text-red-400 text-center">{rerror && rerror}</p>
        <p className="text-xs text-green-500 text-center">{msg && msg}</p>
        <div className="w-full h-full relative flex items-center justify-center">
          <GrClose
            className="absolute top-4 right-4 font-bold cursor-pointer"
            size={20}
            onClick={() => {
              setIsSignup(false);
            }}
          />
          <div className="w-[85%] h-[100%] flex flex-col items-center gap-5 justify-center">
            <h1 className="font-bold text-xl">Register with Details</h1>
            <div className="w-full h-[13%] cursor-pointer flex items-center justify-evenly px-2 bg-white shadow-sm shadow-black rounded">
              <MdDriveFileRenameOutline size={25} />
              <input
                type="text"
                value={rName}
                onChange={(e) => {
                  if (rerror !== "") {
                    setRerror(null);
                  }
                  setRname(e.target.value);
                }}
                className="h-full w-[80%] outline-none border-none"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="w-full h-[13%] cursor-pointer flex items-center justify-evenly px-2 bg-white shadow-sm shadow-black rounded">
              <MdAlternateEmail size={25} />
              <input
                type="text"
                value={rEmail}
                onChange={(e) => {
                  if (rerror !== "") {
                    setRerror(null);
                  }
                  setRemail(e.target.value);
                }}
                className="h-full w-[80%] outline-none border-none"
                placeholder="Enter Email"
              />
            </div>
            <div className="w-full h-[13%] cursor-pointer flex items-center justify-evenly px-2 bg-white shadow-sm shadow-black rounded">
              <RiLockPasswordLine size={25} />
              <input
                type="text"
                value={rPass}
                onChange={(e) => {
                  if (rerror !== "") {
                    setRerror(null);
                  }
                  setRpass(e.target.value);
                }}
                className="h-full w-[80%] outline-none border-none"
                placeholder="Enter Password"
              />
            </div>
            <div className="w-full h-[2px] border-dotted border-black border-2 rounded-md relative flex items-center justify-center"></div>
            <div
              onClick={registerUser}
              className="w-full cursor-pointer h-[13%] flex items-center justify-evenly px-2 bg-[#769532] shadow-sm shadow-black rounded"
            >
              <h1 className="text-lg font-semibold text-white">Register</h1>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
