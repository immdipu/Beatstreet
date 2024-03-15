import React, { useRef, useState } from "react";
import { useUserContext } from "../Context/UserContext";
import UserDropDown from "./UserDropDown";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const UserAvatar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const imageRef = useRef();
  const user = useSelector((state) => state.user);

  let Imagelink = `https://api.dicebear.com/5.x/initials/svg?seed=${user.fullName}`;

  if (user._id === import.meta.env.VITE_ID) {
    Imagelink = "https://avatars.githubusercontent.com/u/103568666?v=4";
  }
  return (
    <div
      className="w-12 rounded-full ml-2 select-none cursor-pointer relative h-12 "
      onClick={() => setShowDropDown((prev) => !prev)}
    >
      <motion.img
        whileTap={{ scale: 0.92 }}
        src={Imagelink}
        alt={user?.fullName}
        ref={imageRef}
        className="rounded-full  border-2 border-slate-300 border-opacity-50"
      />
      <AnimatePresence>
        {showDropDown && (
          <UserDropDown
            imageRef={imageRef}
            setShowDropDown={setShowDropDown}
            showDropDown={showDropDown}
            fullName={user?.fullName}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserAvatar;
