import React from "react";
import RippleButton from "ripple-effect-reactjs";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const LogIn = () => {
  const handleSubmit = () => {
    preventDefault();
    console.log("hello");
  };
  return (
    <div className=" max-w-lg w-full mx-auto mt-24 max-md:px-4 flex flex-col items-center justify-center">
      <div className="rounded-full bg-slate-300 w-fit p-2">
        <PersonIcon fontSize="large" color="primary" />
      </div>

      <h3 className="text-white text-xl">Log in</h3>
      <form className="w-full flex flex-col gap-8 mt-4">
        <div className="border opacity-60 rounded-md focus-within:opacity-100 focus-within:border-2 duration-150 transition-all ease-linear h-12 relative w-full">
          <input
            type="email"
            id="email"
            placeholder=" "
            className="w-full outline-none tracking-wide  text-white px-4 font-thin border-none h-full bg-transparent relative z-10 peer"
          />
          <p
            htmlFor="email"
            className="absolute text-sm text-white opacity-100 left-3 bg-darkBlue font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg  peer-focus-within:-top-3  peer-focus-within:text-sm  "
          >
            E-mail Address
          </p>
        </div>
        <div className="border opacity-60 rounded-md focus-within:opacity-100 focus-within:border-2 duration-150 transition-all ease-linear h-12 relative w-full">
          <input
            type="password"
            id="pwd"
            placeholder=" "
            required
            className="w-full tracking-wider outline-none border-none text-white px-4 font-extralight h-full bg-transparent relative z-10 peer"
          />
          <p
            htmlFor="pwd"
            className="absolute text-sm required text-white opacity-100 left-3 bg-darkBlue font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg  peer-focus-within:-top-3  peer-focus-within:text-sm  "
          >
            Password
          </p>
        </div>
        <div className="border- flex justify-center">
          <RippleButton speed={600} color={"#bbb7b7bf"} radius={7} width={40}>
            <button
              type="button"
              className="bg-white rounded-md border-2 h-12 text-lg w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </RippleButton>
        </div>
      </form>
      <div className="flex justify-end flex-col items-end mt-8 gap-3 text-sm text-stone-200 font-extralight w-full">
        <Link
          to={"/forgotPassword"}
          className="hover:text-skyBlue duration-150 transition-all ease-linear"
        >
          Forgot password?
        </Link>
        <Link
          to={"/signup"}
          className="hover:text-skyBlue duration-150 transition-all ease-linear"
        >
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
