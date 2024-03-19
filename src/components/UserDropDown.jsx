import React, { useEffect, useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import InfoIcon from "@mui/icons-material/Info";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useUserContext } from "../Context/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../redux/slice/userSlice";

const UserDropDown = ({
  imageRef,
  showDropDown,
  setShowDropDown,
  fullName = "",
}) => {
  const menuRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const HangleClickOutside = (e) => {
      if (
        showDropDown &&
        e.target !== menuRef.current &&
        e.target !== imageRef.current
      ) {
        setShowDropDown(false);
      }
    };
    window.addEventListener("click", HangleClickOutside);
    return () => {
      window.removeEventListener("click", HangleClickOutside);
    };
  }, [showDropDown]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "30%", y: "-55%", scale: 0.2 }}
      animate={{ opacity: 1, x: "0%", y: "0%", scale: 1 }}
      exit={{
        opacity: 0,
        x: "30%",
        y: "-55%",
        scale: 0,
        transition: { duration: "0.35" },
      }}
      transition={{ type: "spring", stiffness: "130", duration: "0.15" }}
      ref={menuRef}
      className="absolute bg-lightBlue shadow-xl rounded-md -left-44 w-48 h-fit
      z-[55] text-slate-300 py-5"
    >
      <div className="mb-2">
        <h2 className="bg-neutral-700 text-center hover:text-white hover:text-lg transition-all duration-500  ease-linear text-neutral-50 py-1 bg-opacity-25  font-Poppins tracking-wider ">
          Hello, {fullName.split(" ")[0]}
        </h2>
      </div>

      <ul className="flex flex-col">
        <Link
          to={"/account"}
          className="flex hover:bg-darkBlue duration-300 transition-colors ease-linear py-2 gap-3 items-center px-3"
        >
          <PersonIcon />
          Account
        </Link>
        <Link
          to={"/userplaylists"}
          className="flex hover:bg-darkBlue duration-300 transition-colors ease-linear py-2 gap-3 items-center px-3"
        >
          <LibraryMusicIcon />
          My Library
        </Link>
        <Link
          to={"/about"}
          className="flex  hover:bg-darkBlue duration-300 transition-colors ease-linear py-2 gap-3 items-center px-3"
        >
          <InfoIcon /> Help & Support
        </Link>
        <li
          onClick={() => {
            dispatch(Logout());
          }}
          className="flex gap-3 hover:bg-darkBlue duration-300 transition-colors ease-linear py-2 items-center px-3"
        >
          <ExitToAppIcon /> Sign Out
        </li>
      </ul>
    </motion.div>
  );
};

export default UserDropDown;
