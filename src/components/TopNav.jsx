import React from "react";
import SearchBar from "./SearchBar";
import LoginAndSignUp from "./LoginAndSignUp";
import UserAvatar from "./UserAvatar";
import { useUserContext } from "../Context/UserContext";

const TopNav = () => {
  const { login_success } = useUserContext();
  return (
    <div className="h-20 flex items-center px-9 justify-between fixed z-40 backdrop-blur-sm bg-darkBlue bg-opacity-60 right-0 left-0 ml-52 max-md:ml-0 overflow-hidden top-0">
      <SearchBar />
      <div>{login_success ? <UserAvatar /> : <LoginAndSignUp />}</div>
    </div>
  );
};

export default TopNav;
