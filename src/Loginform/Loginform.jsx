import Moon from "./moon.jpg";
import Googleicon from "./Google_Icons-09-512.webp";
import { Link } from "react-router-dom";

const Loginform = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <img src={Moon} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full  flex flex-col p-20 justify-between items-center  ">
        <h1 className="text-2xl w-full text-black font-semibold  max-w-[500px]">
          Faculty
        </h1>
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="font-semibold text-black text-4xl mb-2 ">Login</h3>
            <p className="text-base mb-2">
              Welcome back! Please enter your detils
            </p>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full py-2 my-2 bg-transparent text-black border-b  border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full py-2 my-2 bg-transparent text-black border-b  border-black outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center ">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 border-2 border-black"
              />
              <p className="text-sm">Remember me?</p>
            </div>
            <p className="text-sm underline underline-offset-2 font-medium cursor-pointer whitespace-nowrap">
              Forgot password?
            </p>
          </div>
          <div className="w-full flex flex-col my-4">
            <Link to="/home">
              <button className="w-full text-white my-2 font-semibold bg-black rounded-md p-4 text-center flex items-center justify-center   cursor-pointer">
                Log in
              </button>
            </Link>

            <button className="w-full text-black my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Register
            </button>
          </div>
          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-xl font-semibold absolute text-black bg-white ">
              or
            </p>
          </div>
          <div className="w-full text-black my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            <img src={Googleicon} className="h-6 mr-2" />
            Sign in with google
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-md font-normal text-black ">
            Dont have an account?{" "}
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              Sign up for free!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
