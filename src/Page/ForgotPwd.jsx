import React from "react";
import { Link } from "react-router-dom";
import RippleButton from "ripple-effect-reactjs";

const ForgotPwd = () => {
  return (
    <div className="max-w-2xl mx-auto mt-5 w-full">
      <section className="bg-[#1e1f22] shadow-md px-10 py-6 rounded-md">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl text-slate-50">Forgot your password?</h2>
          <p className="font-thin text-slate-100 text-sm font-sans">
            Change your password in three easy steps. This will help you to
            secure your password!
          </p>
        </div>

        <div className="text-slate-300 font-Rubik font-thin tracking-wide  mt-5">
          <ol>
            <li>1. Enter your email address below</li>
            <li>2. Our system will send you a temporary link</li>
            <li>3. Use the link to reset your password</li>
          </ol>
        </div>
      </section>
      <section className="bg-[#1e1f22] shadow-md px-10 py-6 rounded-md mt-8">
        <div>
          <h4 className="text-slate-50 font-Rubik font-extralight text-lg">
            Enter your email address
          </h4>
          <input
            type="email"
            className=" outline-none rounded h-11 max-sm:w-full mt-2 w-4/6 text-white font-thin font-Rubik bg-transparent border opacity-40 focus:opacity-100 text-sm tracking-wider required transition-all duration-500 px-4  ease-linear focus:border-2"
          />
          <p className="font-thin text-slate-100 text-sm font-sans opacity-70 mt-3">
            Enter the email address you used during the registration. Then we'll
            email a link to this address.
          </p>
        </div>
        <div className="mt-7 flex justify-between items-center max-sm:flex-col">
          <div className="w-40">
            <RippleButton color={"#519aff2e"} speed={500}>
              <button className="text-skyBlue bg-[#519aff2e] w-full px-3 py-2 rounded-md">
                Send Reset Link
              </button>
            </RippleButton>
          </div>

          <div className="w-32">
            <RippleButton color={"#c7757547"}>
              <Link
                to={"/login"}
                className="text-red-300 bg-[#c7757547] pl-5 text-sm w-full px-3 py-2 block rounded-md"
              >
                Back to Login
              </Link>
            </RippleButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPwd;
