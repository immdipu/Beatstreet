import React from "react";
import { useUserContext } from "../Context/UserContext";

const UserAvatar = () => {
  const { user_name } = useUserContext();

  let Imagelink = `https://api.dicebear.com/5.x/initials/svg?seed=${user_name}`;
  return (
    <div className="w-12 border-2 rounded-full border-slate-50 border-opacity-60 h-12 overflow-hidden">
      <img src={Imagelink} alt={user_name} className="rounded-full" />
    </div>
  );
};

export default UserAvatar;
