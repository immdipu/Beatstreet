import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import LoginAndSignUp from "./LoginAndSignUp";
import UserAvatar from "./UserAvatar";
import ClipLoader from "react-spinners/ClipLoader";
import { useUserContext } from "../Context/UserContext";
import { usePlayerContext } from "../Context/PlayerContext";

const TopNav = () => {
  const { login_success, User_id, AutoLogin, auto_login_begin } =
    useUserContext();
  const { getFavoritesSongs } = usePlayerContext();

  useEffect(() => {
    AutoLogin().then((result) => {
      if (result._id) {
        console.log({ login_success });
        getFavoritesSongs(result._id);
      }
    });
  }, []);

  return (
    <div className=" border-b-2 border-slate-100 border-opacity-10 h-20">
      <div className="h-20 flex items-center px-9 max-md:px-4 justify-between fixed z-40 backdrop-blur-sm bg-darkBlue bg-opacity-60 right-0 left-0 ml-52 max-md:ml-0 top-0">
        <SearchBar />
        {auto_login_begin ? (
          <h4 className="text-white text-center mb-3 max-md:mb-0 mt-2 max-md:px-2 ">
            <ClipLoader size={35} color="#2764eb" speedMultiplier={1} />
          </h4>
        ) : (
          <div> {login_success ? <UserAvatar /> : <LoginAndSignUp />}</div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
