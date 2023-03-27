import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import RippleButton from "ripple-effect-reactjs";
import { useUserContext } from "../Context/UserContext";
import ClipLoader from "react-spinners/ClipLoader";
import { LoginAlert } from "../components";
import { motion } from "framer-motion";

const ForgotPwd = () => {
  const {
    forgotPassword,
    forgot_password_loading,
    forgot_password_success,
    forgot_password_failed,
  } = useUserContext();
  const [validateEmail, setValidateEmail] = useState(false);
  const emailRef = useRef(null);

  let alert = null;
  if (forgot_password_failed) {
    alert = (
      <LoginAlert
        message={"Failed! The email you provided is not registered"}
        alertClass={"failed"}
      />
    );
  }

  if (forgot_password_success) {
    alert = (
      <LoginAlert
        message={
          "SUCCESS! A email containing password reset link has been sent to your email"
        }
        alertClass={"success"}
      />
    );
  }

  const handleSubmit = () => {
    if (emailRef.current.value.trim() !== "") {
      const emailValidation =
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          emailRef.current.value
        );

      if (!emailValidation) {
        return setValidateEmail(true);
      }
      setValidateEmail(false);
      let data = {
        email: emailRef.current.value,
      };
      forgotPassword(data);
      emailRef.current.value = null;
    }
  };

  return (
    <motion.div
      initial={{ y: "-100vw" }}
      animate={{ y: "0vw", transition: { ease: "easeInOut" } }}
      exit={{ y: "100vw", transition: { ease: "easeInOut" } }}
      className="max-w-2xl max-lg:pl-14 max-md:pl-0   max-lg:max-w-lg mx-auto  mt-5 w-full"
    >
      {alert}
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

          <p className="text-sm font-Rubik mt-3 font-thin">
            <span className="text-red-500 font-medium">Note: </span> If you
            can't find the password reset email in your inbox, please check your
            spam folder as it may have been filtered there.
          </p>
        </div>
      </section>
      <section className="bg-[#1e1f22] shadow-md px-10 py-6 rounded-md mt-8">
        <div
          className={
            " rounded-md   focus-within:border-opacity-90 focus-within:border-2 duration-150 transition-all ease-linear h-12 relative w-full " +
            (validateEmail
              ? "border-red-600 border-2"
              : "border-slate-300 border border-opacity-30")
          }
        >
          <input
            type="email"
            id="email"
            placeholder=" "
            ref={emailRef}
            className="w-full outline-none text-sm tracking-wide  text-white px-4 font-thin border-none h-full bg-transparent relative z-10 peer"
          />
          {validateEmail && (
            <p className="text-red-500 font-light text-sm mt-1 px-1">
              Please provide valid email address
            </p>
          )}
          <p
            htmlFor="email"
            className="absolute text-sm  text-white opacity-100  left-3 bg-[#1e1f22] font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:opacity-50 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus-within:opacity-100  peer-focus-within:-top-3  peer-focus-within:text-sm  "
          >
            E-mail Address
          </p>
          <p className="font-thin text-slate-100 text-sm max-md:text-xs font-sans opacity-70 mt-3">
            Enter the email address you used during the registration. Then we'll
            email a link to this address.
          </p>
        </div>

        <div
          className={
            "flex justify-between items-center max-lg:mt-16  max-md:flex-col max-md:gap-5 transition-all duration-200 ease-linear " +
            (validateEmail ? "mt-24 max-md:mt-36" : "mt-10 max-md:mt-20")
          }
        >
          <div className="w-40" onClick={handleSubmit}>
            <RippleButton color={"#519aff2e"} speed={500}>
              <button className="text-skyBlue bg-[#519aff2e] w-full px-3 py-2 rounded-md">
                {forgot_password_loading ? (
                  <div className="mt-2">
                    <ClipLoader size={30} color="#2764eb" speedMultiplier={3} />
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </RippleButton>
          </div>

          <div className="w-32">
            <RippleButton color={"#c7757547"}>
              <Link
                to={"/login"}
                className="text-red-300 max-md:scale-75 bg-[#c7757547] pl-5 text-sm w-full px-3 py-2 block rounded-md"
              >
                Back to Login
              </Link>
            </RippleButton>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ForgotPwd;
