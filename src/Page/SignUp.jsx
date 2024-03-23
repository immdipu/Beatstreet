import React, { useState } from "react";
import RippleButton from "ripple-effect-reactjs";
import { Link } from "react-router-dom";
import { EyeNotVisibility, EyeVisibility, UserVerify } from "../components";
import ClipLoader from "react-spinners/ClipLoader";
import PersonIcon from "@mui/icons-material/Person";
import { motion, AnimatePresence } from "framer-motion";
import userApis from "../Api/userApi";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [showVerfiyModal, setShowVerfiyModal] = useState(false);
  const Signup = useMutation({
    mutationFn: (data) => userApis.Register(data),
    onSuccess: (data) => {
      localStorage.setItem("userEmail", data.data.email);
      if (data.status === "success") {
        toast.success("Verfication code has been sent to your email");
        setShowVerfiyModal(true);
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const HandlePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
    const passwordField1 = document.getElementById("pwd1");
    const passwordField2 = document.getElementById("pwd2");
    if (!passwordVisibility) {
      passwordField1.type = "text";
      passwordField2.type = "text";
    } else {
      passwordField1.type = "password";
      passwordField2.type = "password";
    }
  };

  const handleSubmit = () => {
    if (
      form.fullName.trim() !== "" &&
      form.email.trim() !== "" &&
      form.password.trim() !== "" &&
      form.passwordConfirm.trim() !== ""
    ) {
      const emailValidation =
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email);
      if (!emailValidation) {
        return toast.error("Please type correct email");
      }
      if (form.password.trim() !== form.passwordConfirm.trim()) {
        return toast.error("password didn't match");
      }
      if (form.password.length < 4) {
        return toast.error("password length cannot be less than 4.");
      }
      let data = {
        name: form.fullName.trim(),
        email: form.email.trim(),
        password: form.password.trim(),
        passwordConfirm: form.passwordConfirm.trim(),
      };
      Signup.mutate(data);
    } else {
      toast.error("Please fill all the fields");
    }
  };

  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(form);
  };

  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: "0vh", transition: { ease: "easeInOut" } }}
      exit={{ y: "-100vh", transition: { ease: "easeInOut" } }}
      className=" max-w-md w-full mx-auto mt-10 max-md:px-4 flex flex-col items-center justify-center"
    >
      <AnimatePresence>
        {showVerfiyModal && (
          <UserVerify setShowVerfiyModal={setShowVerfiyModal} />
        )}
      </AnimatePresence>
      <div className="rounded-full bg-slate-300 w-fit p-2">
        <PersonIcon fontSize="large" color="primary" />
      </div>

      <h3 className="text-white text-xl">Sign up</h3>
      <form className={"w-full flex flex-col gap-5 mt-4  "}>
        <div className="border border-neutral-600 focus-within:border-opacity-100 focus-within:border-neutral-400 rounded-md focus-within:opacity-100 focus-within:border-2 duration-150 transition-all ease-linear h-9 relative w-full">
          <input
            type="text"
            id="FullName"
            name="fullName"
            placeholder=" "
            value={form.fullName}
            onChange={handleChange}
            className="w-full outline-none tracking-wide text-white px-4 font-thin border-none h-full bg-transparent relative z-10 peer"
          />
          <p
            htmlFor="FullName"
            className="absolute peer-placeholder-shown:opacity-60 text-sm peer-focus-within:opacity-100 text-white opacity-100 left-3 bg-darkBlue font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:top-[6px] peer-placeholder-shown:text-base  peer-focus-within:-top-3  peer-focus-within:text-sm  "
          >
            Full Name
          </p>
        </div>

        <div
          className={
            " focus-within:border-opacity-100 border border-neutral-600 focus-within:border-neutral-400 rounded-md focus-within:opacity-100 focus-within:border-2 duration-150 transition-all ease-linear h-9 relative w-full "
          }
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            value={form.email}
            onChange={handleChange}
            className="w-full outline-none tracking-wide  text-white px-4 font-thin border-none h-full bg-transparent relative z-10 peer"
          />

          <p
            htmlFor="email"
            className="absolute peer-placeholder-shown:opacity-60 text-sm peer-focus-within:opacity-100 text-white opacity-100 left-3 bg-darkBlue font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:top-[6px] peer-placeholder-shown:text-base  peer-focus-within:-top-3  peer-focus-within:text-sm"
          >
            E-mail Address
          </p>
        </div>
        <div className="border border-neutral-600 focus-within:border-opacity-100 focus-within:border-neutral-400 rounded-md focus-within:opacity-100 focus-within:border-2 duration-150 transition-all ease-linear h-9 relative w-full">
          <input
            type="password"
            id="pwd1"
            placeholder=""
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full outline-none tracking-wide  text-white px-4 font-thin border-none h-full bg-transparent relative z-10 peer"
          />
          <p
            htmlFor="pwd"
            className="absolute peer-placeholder-shown:opacity-60 text-sm peer-focus-within:opacity-100 text-white opacity-100 left-3 bg-darkBlue font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:top-[6px] peer-placeholder-shown:text-base  peer-focus-within:-top-3  peer-focus-within:text-sm"
          >
            Password
          </p>

          <div
            className="absolute pt-1 pr-1 cursor-pointer scale-75 rounded-full  -top-2 right-0 z-10 h-fit"
            onClick={HandlePasswordVisibility}
          >
            <RippleButton
              color={"#0d417c9e"}
              speed={700}
              width={90}
              radius={999}
            >
              {passwordVisibility ? <EyeVisibility /> : <EyeNotVisibility />}
            </RippleButton>
          </div>
        </div>
        <div
          className={
            "border border-neutral-600 mb-1 focus-within:border-opacity-100 focus-within:border-neutral-400 rounded-md focus-within:opacity-100 focus-within:border-2 duration-150 transition-all ease-linear h-9 relative w-full "
          }
        >
          <input
            type="password"
            id="pwd2"
            placeholder=" "
            required
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={handleChange}
            className="w-full rounded-md tracking-wider outline-none border-none text-white px-4 font-extralight h-full bg-transparent relative z-10 peer"
          />
          <p
            htmlFor="pwd2"
            className="absolute peer-placeholder-shown:opacity-60 text-sm peer-focus-within:opacity-100 text-white opacity-100 left-3 bg-darkBlue font-light duration-100 transition-all -top-3 ease-linear px-2 peer-placeholder-shown:top-[6px] peer-placeholder-shown:text-base  peer-focus-within:-top-3  peer-focus-within:text-sm"
          >
            Password Confirm
          </p>
          <div
            className="absolute pt-1 pr-1 cursor-pointer -top-2 scale-75 rounded-full right-0 z-10 h-fit"
            onClick={HandlePasswordVisibility}
          >
            <RippleButton color={"#0d417c9e"} speed={700} radius={999}>
              {passwordVisibility ? <EyeVisibility /> : <EyeNotVisibility />}
            </RippleButton>
          </div>
        </div>
        <div className="border- flex justify-center">
          <RippleButton speed={600} color={"#bbb7b7bf"} radius={7} width={40}>
            <button
              type="button"
              disabled={Signup.isPending}
              className={
                "bg-white rounded-md border-2 h-12 text-lg w-full " +
                (Signup.isPending
                  ? "pointer-events-none"
                  : "pointer-events-auto")
              }
              onClick={handleSubmit}
            >
              {Signup.isPending ? (
                <div className="mt-2">
                  <ClipLoader size={30} color="#2764eb" speedMultiplier={3} />
                </div>
              ) : (
                "Sign up"
              )}
            </button>
          </RippleButton>
        </div>
      </form>
      <div className="flex justify-end flex-col items-end mt-8 gap-3 text-sm text-stone-200 font-extralight w-full">
        <Link
          to={"/login"}
          className="hover:text-skyBlue duration-150 transition-all ease-linear"
        >
          Already have an account? Logn in
        </Link>
      </div>
    </motion.div>
  );
};

export default SignUp;
