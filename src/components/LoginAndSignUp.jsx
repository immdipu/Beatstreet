import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";

const LoginAndSignUp = () => {
  return (
    <div className="flex gap-8 items-center mr-5 max-md:hidden">
      <Link to={"/login"} className="text-white hover:opacity-90">
        Log In
      </Link>

      <ListItemButton
        sx={[
          {
            padding: 0,
          },
        ]}
      >
        <Link
          to={"/signup"}
          className="bg-skyBlue hover:opacity-90 text-white rounded-md px-3 py-1 tracking-wide"
        >
          Sign up
        </Link>
      </ListItemButton>
    </div>
  );
};

export default LoginAndSignUp;
