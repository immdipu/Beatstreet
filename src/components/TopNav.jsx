import React, { useLayoutEffect } from "react";
import SearchBar from "./SearchBar";
import LoginAndSignUp from "./LoginAndSignUp";
import UserAvatar from "./UserAvatar";
import ClipLoader from "react-spinners/ClipLoader";
import userApis from "../Api/userApi";
import { isLogged } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";

const TopNav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const AutoLogin = useMutation({
    mutationFn: () => userApis.Autologin(),
    onSuccess: (data) => {
      dispatch(isLogged(data.user));
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  useLayoutEffect(() => {
    AutoLogin.mutate();
  }, []);

  return (
    <div className=" border-b-2 border-slate-100 border-opacity-10 h-20">
      <div className="h-20 flex items-center px-9 max-md:px-4 justify-between fixed z-40 backdrop-blur-sm bg-darkBlue bg-opacity-60 right-0 left-0 ml-52 max-md:ml-0 top-0">
        <SearchBar />
        {AutoLogin.isPending ? (
          <h4 className="text-white text-center mb-3 max-md:mb-0 mt-2 max-md:px-2 ">
            <ClipLoader size={35} color="#2764eb" speedMultiplier={1} />
          </h4>
        ) : (
          <div> {user.islogged ? <UserAvatar /> : <LoginAndSignUp />}</div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
