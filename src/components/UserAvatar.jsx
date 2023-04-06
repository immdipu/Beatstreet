import React, { useRef } from "react";
import { useUserContext } from "../Context/UserContext";
import UserDropDown from "./UserDropDown";
import { AnimatePresence, motion } from "framer-motion";

const UserAvatar = () => {
  const { user_name, User_id, user_drop_down, HandleUserDropDown } =
    useUserContext();
  const imageRef = useRef();

  let Imagelink = `https://api.dicebear.com/5.x/initials/svg?seed=${user_name}`;
  if (User_id === process.env.ID) {
    Imagelink = "https://avatars.githubusercontent.com/u/103568666?v=4";
  }
  return (
    <div
      className="w-12 rounded-full ml-2 select-none cursor-pointer relative h-12 "
      onClick={HandleUserDropDown}
    >
      <motion.img
        whileTap={{ scale: 0.92 }}
        src={Imagelink}
        alt={user_name}
        ref={imageRef}
        className="rounded-full  border-2 border-slate-300 border-opacity-50"
      />
      <AnimatePresence>
        {user_drop_down && <UserDropDown imageRef={imageRef} />}
      </AnimatePresence>
    </div>
  );
};

export default UserAvatar;
