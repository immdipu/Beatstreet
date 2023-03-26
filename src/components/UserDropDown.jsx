import React, { useEffect, useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useUserContext } from "../Context/UserContext";

const UserDropDown = ({ imageRef }) => {
  const { user_name, user_drop_down, HandleUserDropDown, logoutUser } =
    useUserContext();
  const menuRef = useRef();

  useEffect(() => {
    const HangleClickOutside = (e) => {
      if (
        user_drop_down &&
        e.target !== menuRef.current &&
        e.target !== imageRef.current
      ) {
        HandleUserDropDown();
      }
    };
    window.addEventListener("click", HangleClickOutside);
    return () => {
      window.removeEventListener("click", HangleClickOutside);
    };
  }, [user_drop_down]);

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
      <ul className="flex flex-col">
        <Link
          to={"/useraccount"}
          className="flex hover:bg-darkBlue duration-300 transition-colors ease-linear py-3 gap-3 items-center px-3"
        >
          <PersonIcon className="scale-110" />
          Account
        </Link>
        <Link
          to={"/library"}
          className="flex hover:bg-darkBlue duration-300 transition-colors ease-linear py-3 gap-3 items-center px-3"
        >
          <LibraryMusicIcon className="scale-110" />
          My Library
        </Link>
        <Link
          to={"helpcenter"}
          className="flex  hover:bg-darkBlue duration-300 transition-colors ease-linear py-3 gap-3 items-center px-3"
        >
          <HelpCenterIcon className="scale-110" /> Help or Support
        </Link>
        <li
          onClick={logoutUser}
          className="flex gap-3 hover:bg-darkBlue duration-300 transition-colors ease-linear py-3 items-center px-3"
        >
          <ExitToAppIcon className="scale-110" /> Sign Out
        </li>
      </ul>
    </motion.div>
  );
};

export default UserDropDown;
