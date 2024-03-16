import React, { useRef } from "react";
import { Logo } from ".";
import RippleButton from "ripple-effect-reactjs";
import ClipLoader from "react-spinners/ClipLoader";
import { useUserContext } from "../Context/UserContext";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import userApis from "../Api/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const UserVerify = ({ setShowVerfiyModal }) => {
  const navigate = useNavigate();
  const verifyUser = useMutation({
    mutationFn: (token) => userApis.userVerification(token),
    onSuccess: (data) => {
      if (data.status === "success") {
        toast.success("User verified successfully");
        navigate("/login");
      }
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  const ResendVerfication = useMutation({
    mutationFn: (data) => userApis.sendVerification(data),
    onSuccess: (data) => {
      if (data.status === "success") {
        toast.success("Verfication code has been sent to your email");
      }
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const HandleInput = (first, second) => {
    if (first.current.value.length === 1) {
      second.current.focus();
    }
  };

  const HandleSubmit = () => {
    if (
      input1Ref.current.value.trim() !== "" &&
      input2Ref.current.value.trim() !== "" &&
      input3Ref.current.value.trim() !== "" &&
      input4Ref.current.value.trim() !== ""
    ) {
      let token =
        input1Ref.current.value +
        "" +
        input2Ref.current.value +
        "" +
        input3Ref.current.value +
        "" +
        input4Ref.current.value;
      let data = { token };
      verifyUser.mutate(data);
    }
  };

  const resendVerificationHandle = () => {
    const Email = {
      email: localStorage.getItem("userEmail"),
    };
    ResendVerfication.mutate(Email);
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { ease: "easeInOut" } }}
      exit={{ scale: 0, transition: { ease: "easeInOut" } }}
      className="absolute w-fit flex flex-col items-center shadow-md px-7  py-5 bg-lightBlue z-50 rounded-md top-0 "
    >
      <div className="opacity-40 absolute right-10">
        <Logo width={90} />
      </div>
      <h3 className="text-slate-100 text-2xl font-sans mt-16 whitespace-pre ">
        Please check your email
      </h3>
      <p className="text-slate-400 mt-1 font-Rubik text-sm">
        We've sent a code to the email you provided.
      </p>
      <div className="flex gap-4 mt-5">
        <input
          type="number"
          maxLength="1"
          ref={input1Ref}
          id="input1"
          onKeyUp={(e) => HandleInput(input1Ref, input2Ref)}
          className="w-14 h-14 btns text-center outline-none focus-within:border-2 border-skyBlue text-3xl rounded-md"
        />
        <input
          type="number"
          maxLength="1"
          ref={input2Ref}
          id="input2"
          onKeyUp={() => HandleInput(input2Ref, input3Ref)}
          className="w-14 h-14 btns text-center outline-none focus-within:border-2 border-skyBlue text-3xl rounded-md"
        />
        <input
          type="number"
          maxLength="1"
          ref={input3Ref}
          id="input3"
          onKeyUp={() => HandleInput(input3Ref, input4Ref)}
          className="w-14 h-14 btns text-center outline-none focus-within:border-2 border-skyBlue text-3xl rounded-md"
        />
        <input
          type="number"
          maxLength="1"
          ref={input4Ref}
          id="input4"
          className="w-14 h-14 btns text-center outline-none focus-within:border-2 border-skyBlue text-3xl rounded-md"
        />
      </div>
      <div className="justify-center flex mt-4 text-sm gap-2 mr-2 font-sans text-neutral-300">
        <p>Didn't get a code?</p>
        <button
          disabled={ResendVerfication.isPending}
          onClick={resendVerificationHandle}
          className="underline text-skyBlue cursor-pointer opacity-70 duration-300 ease-linear transition-opacity hover:opacity-100"
        >
          {ResendVerfication.isPending ? "Resending..." : "Resend"}
        </button>
      </div>
      <div className="mt-5 flex mr-4 items-center gap-3 justify-center min-w-[10rem]  ">
        <RippleButton radius={8} width={100} color={"#064d81"} speed={500}>
          <p
            onClick={() => {
              setShowVerfiyModal(false);
            }}
            className="select-none bg-opacity-50 bg-darkBlue w-fit text-sm cursor-pointer rounded-md block text-neutral-300 py-2 px-4"
          >
            Cancel
          </p>
        </RippleButton>

        <RippleButton radius={8} width={100} color={"#16191e59"} speed={500}>
          <button
            disabled={verifyUser.isPending}
            onClick={HandleSubmit}
            className="select-none scale-110 bg-skyBlue w-fit rounded-md text-base cursor-pointer text-neutral-100 py-2 pr-10 px-7"
          >
            Verify
          </button>
        </RippleButton>
      </div>
      <p className="text-sm  font-Rubik mt-5 px-8 text-center opacity-60 font-thin text-neutral-300">
        <span className="text-red-500 font-medium opacity-100">Note: </span> If
        you can't find the verification code in your inbox, please check your
        spam folder as it may have been filtered there.
      </p>
      {verifyUser.isPending && (
        <h4 className="text-white text-center mb-3 absolute bg-black inset-0 bg-opacity-30 flex items-center justify-center">
          <ClipLoader size={60} color="#2764eb" speedMultiplier={2} />
        </h4>
      )}
    </motion.div>
  );
};

export default UserVerify;
