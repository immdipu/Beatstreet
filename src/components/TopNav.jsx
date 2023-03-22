import React from "react";
import SearchBar from "./SearchBar";
import LoginAndSignUp from "./LoginAndSignUp";

const TopNav = () => {
  return (
    <div className="h-20 flex items-center px-9 justify-between fixed z-50 backdrop-blur-sm bg-black bg-opacity-60 right-0 left-0 ml-52 overflow-hidden top-0">
      <SearchBar />
      <LoginAndSignUp />
    </div>
  );
};

export default TopNav;
