import React, { useState, useEffect } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import RippleButton from "ripple-effect-reactjs";
import { motion } from "framer-motion";

function LoginAlert({ message, alertClass }) {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(6);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 0.1);
    }, 100);

    if (timeLeft < 0.1) {
      clearInterval(timer);
      setIsVisible(false);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const progressStyle = {
    width: ((timeLeft / 6) * 100).toFixed(0) + "%",
  };

  if (isVisible) {
    return (
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: "0vh", transition: { ease: "easeInOut" } }}
        exit={{ y: "100vh", transition: { ease: "easeInOut" } }}
        transition={{ type: "spring", stiffness: "2", duration: "0.15" }}
        className="slide-in-top p-5 absolute z-[100] -top-10"
      >
        <div
          className={
            "gap-4 font-normal tracking-wide font-Rubik px-2  flex items-center " +
            alertClass
          }
        >
          {message}
          <button type="button" className="h-fit mt-2 btn-close ">
            <RippleButton color={"#0d417c9e"} speed={600} radius={100}>
              <ClearRoundedIcon
                className="scale-90 opacity-60 hover:bg-slate-300 rounded-full "
                onClick={handleDismiss}
              />
            </RippleButton>
          </button>
        </div>
        <div className="progress w-full rounded-b-sm ">
          <div
            className="progress-bar h-[3px] rounded-b-[4px] bg-skyBlue transition-all duration-300 ease-linear"
            style={progressStyle}
          ></div>
        </div>
      </motion.div>
    );
  }
  return null;
}

export default LoginAlert;
