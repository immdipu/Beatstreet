import React, { useRef, useState, useLayoutEffect } from "react";
import RippleButton from "ripple-effect-reactjs";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useUserContext } from "../Context/UserContext";
import {
  LoginAlert,
  EyeNotVisibility,
  EyeVisibility,
  TopNav,
} from "../components";
import ClipLoader from "react-spinners/ClipLoader";
import { motion } from "framer-motion";
import userApis from "../Api/userApi";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { isLogged } from "../redux/slice/userSlice";

const LogIn = () => {
  const { loginUser, login_loading, login_failed, login_success } =
    useUserContext();
  const navigate = useNavigate();
  const [validateEmail, setValidateEmail] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const Login = useMutation({
    mutationFn: (data) => userApis.Login(data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);

      dispatch(isLogged(data.data.user));
    },
    onError: (res) => {
      toast.error(res?.response?.data?.message || "An error occured");
    },
  });

  useLayoutEffect(() => {
    if (user.islogged) {
      navigate("/");
    }
  }, [user.islogged]);

  const HandlePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
    const passwordField = document.getElementById("pwd");
    if (!passwordVisibility) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  };

  const handleSubmit = () => {
    if (
      emailRef.current.value !== "" &&
      passwordRef.current.value.trim() !== ""
    ) {
      const emailValidation =
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          emailRef.current.value
        );
      if (!emailValidation) {
        toast.error("Please provide valid email address");
        return setValidateEmail(true);
      }
      setValidateEmail(false);
      let data = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      Login.mutate(data);
    } else {
      toast.error("Please fill in the form");
    }
  };

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0vw", transition: { ease: "easeInOut" } }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      className=" max-w-lg w-full mx-auto mt-24 max-md:px-4 flex flex-col items-center justify-center"
    >
      {alert}

      <div className="rounded-full bg-slate-300 w-fit p-2">
        <PersonIcon fontSize="large" color="primary" />
      </div>

      <h3 className="text-white text-xl">Log in</h3>
      <form
        className={
          "w-full flex flex-col gap-10 mt-4 transition-all duration-200 ease-linear " +
          (validateEmail ? "gap-10" : "gap-7")
        }
      >
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
            className="w-full outline-none tracking-wide  text-white px-4 font-thin border-none h-full bg-transparent relative z-10 peer"
          />
          {validateEmail && (
            <p className="text-red-500 font-light text-sm mt-1 px-1">
              Please provide valid email address
            </p>
          )}
          <p
            htmlFor="email"
            className="absolute text-sm text-white opacity-100  left-3 bg-darkBlue font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:opacity-50 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus-within:opacity-100  peer-focus-within:-top-3  peer-focus-within:text-sm  "
          >
            E-mail Address
          </p>
        </div>
        <div className="border rounded-md border-slate-300 border-opacity-30 focus-within:border-opacity-90 focus-within:border-2 duration-150 transition-all ease-linear h-12 relative w-full">
          <input
            type="password"
            id="pwd"
            placeholder=" "
            required
            ref={passwordRef}
            className="w-full rounded-md tracking-wider outline-none border-none text-white px-4 font-extralight h-full bg-transparent relative z-10 peer"
          />
          <p
            htmlFor="pwd"
            className="absolute text-sm text-white opacity-100  left-3 bg-darkBlue font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:opacity-50 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus-within:opacity-100  peer-focus-within:-top-3  peer-focus-within:text-sm"
          >
            Password
          </p>

          <div
            className="absolute pt-1 pr-1 cursor-pointer top-0 right-0 z-10 h-fit"
            onClick={HandlePasswordVisibility}
          >
            <RippleButton color={"#0d417c9e"} speed={700} radius={999}>
              {passwordVisibility ? <EyeVisibility /> : <EyeNotVisibility />}
            </RippleButton>
          </div>
        </div>
        <div
          className={
            "flex justify-center " +
            (login_loading ? "pointer-events-none" : "pointer-events-auto")
          }
        >
          <RippleButton speed={400} color={"#bbb7b7bf"} radius={7} width={40}>
            <button
              type="button"
              className="bg-white rounded-md border-2 h-12 text-lg w-full"
              onClick={handleSubmit}
            >
              {login_loading ? (
                <div className="mt-2">
                  <ClipLoader size={30} color="#2764eb" speedMultiplier={3} />
                </div>
              ) : (
                "Log in"
              )}
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
    </motion.div>
  );
};

export default LogIn;
