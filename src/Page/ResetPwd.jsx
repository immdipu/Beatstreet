import React, { useRef, useState } from "react";
import RippleButton from "ripple-effect-reactjs";
import { LoginAlert, EyeNotVisibility, EyeVisibility } from "../components";
import { useUserContext } from "../Context/UserContext";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const ResetPwd = () => {
  const { token } = useParams();
  const {
    resetPassword,
    password_reset_begin,
    password_reset_failed,
    password_reset_success,
  } = useUserContext();
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [passwordValidateText, setPasswordValidateText] = useState("Error");

  const HandlePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
    const passwordField1 = document.getElementById("pwd11");
    const passwordField2 = document.getElementById("pwd22");
    if (!passwordVisibility) {
      passwordField1.type = "text";
      passwordField2.type = "text";
    } else {
      passwordField1.type = "password";
      passwordField2.type = "password";
    }
  };

  const HandlePasswordChange = () => {
    if (
      passwordRef.current.value.trim() !== "" &&
      passwordConfirmRef.current.value.trim() !== ""
    ) {
      if (
        passwordRef.current.value.trim() !==
        passwordConfirmRef.current.value.trim()
      ) {
        setPasswordValidateText("Password didn't match");
        return setValidatePassword(true);
      }
      if (passwordRef.current.value.length < 8) {
        setPasswordValidateText("Password length can't be less than 8");
        return setValidatePassword(true);
      }
      setValidatePassword(false);
      let data = {
        password: passwordRef.current.value.trim(),
        passwordConfirm: passwordConfirmRef.current.value.trim(),
      };
      resetPassword(token, data);
    }
  };
  let alert = null;
  if (password_reset_failed) {
    alert = (
      <LoginAlert
        message={"Ah error has occured ! Try again later"}
        alertClass={"failed"}
      />
    );
  }

  if (password_reset_success) {
    passwordRef.current.value = null;
    passwordConfirmRef.current.value = null;
    alert = (
      <LoginAlert
        message={"Password has been changed successfully"}
        alertClass={"success"}
      />
    );
  }

  return (
    <div className="max-w-sm w-full mx-auto bg-[#1e1f22] py-5 px-6 mt-28 rounded-md">
      {alert}
      <h3 className="text-slate-300 text-center text-xl">Change password</h3>
      <div className="border border-neutral-600 focus-within:border-opacity-100 mt-4 focus-within:border-neutral-400 rounded-md focus-within:opacity-100 focus-within:border-2 duration-150 transition-all ease-linear h-9 relative w-full">
        <input
          type="password"
          id="pwd11"
          placeholder=" "
          required
          ref={passwordRef}
          className="w-full outline-none tracking-wide  text-white px-4 font-thin border-none h-full bg-transparent relative z-10 peer"
        />
        <p
          htmlFor="pwd"
          className="absolute peer-placeholder-shown:opacity-60 text-sm peer-focus-within:opacity-100 text-white opacity-100 left-3 bg-[#1e1f22] font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:top-[6px] peer-placeholder-shown:text-base  peer-focus-within:-top-3  peer-focus-within:text-sm"
        >
          Password
        </p>

        <div
          className="absolute pt-1 pr-1 cursor-pointer scale-75 rounded-full  -top-2 right-0 z-10 h-fit"
          onClick={HandlePasswordVisibility}
        >
          <RippleButton color={"#0d417c9e"} speed={700} width={90} radius={999}>
            {passwordVisibility ? <EyeVisibility /> : <EyeNotVisibility />}
          </RippleButton>
        </div>
      </div>
      <div
        className={
          "border border-neutral-600 focus-within:border-opacity-100 mt-6 focus-within:border-neutral-400 rounded-md focus-within:opacity-100 focus-within:border-2 duration-150 transition-all ease-linear h-9 relative w-full " +
          (validatePassword ? "mb-4" : "mb-1")
        }
      >
        <input
          type="password"
          id="pwd22"
          placeholder=" "
          required
          ref={passwordConfirmRef}
          className="w-full rounded-md tracking-wider outline-none border-none text-white px-4 font-extralight h-full bg-transparent relative z-10 peer"
        />
        <p
          htmlFor="pwd2"
          className="absolute peer-placeholder-shown:opacity-60 text-sm peer-focus-within:opacity-100 text-white opacity-100 left-3 bg-[#1e1f22] font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:top-[6px] peer-placeholder-shown:text-base  peer-focus-within:-top-3  peer-focus-within:text-sm"
        >
          Password Confirm
        </p>
        {validatePassword && (
          <p className="text-red-500 font-light text-sm mt-1 px-1">
            {passwordValidateText}
          </p>
        )}
        <div
          className="absolute pt-1 pr-1 cursor-pointer -top-2 scale-75 rounded-full right-0 z-10 h-fit"
          onClick={HandlePasswordVisibility}
        >
          <RippleButton color={"#0d417c9e"} speed={700} radius={999}>
            {passwordVisibility ? <EyeVisibility /> : <EyeNotVisibility />}
          </RippleButton>
        </div>
      </div>
      <div className="w-44 mt-10" onClick={HandlePasswordChange}>
        <RippleButton color={"#519aff2e"} speed={500}>
          <button
            className={
              "text-skyBlue select-none bg-[#519aff2e] w-full px-3 py-2 rounded-md " +
              (password_reset_begin
                ? "pointer-events-none"
                : "pointer-events-auto")
            }
          >
            Change password
          </button>
        </RippleButton>
      </div>
      {password_reset_begin && (
        <h4 className="text-white text-center mb-3 absolute bg-black inset-0 bg-opacity-30 flex items-center justify-center">
          <ClipLoader size={60} color="#2764eb" speedMultiplier={2} />
        </h4>
      )}
    </div>
  );
};

export default ResetPwd;
