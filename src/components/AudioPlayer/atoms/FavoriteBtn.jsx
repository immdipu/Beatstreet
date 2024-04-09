import React from "react";
import IconButton from "@mui/material/IconButton";
import Favorite from "../../Favorite";
import { useSelector, useDispatch } from "react-redux";

const FavoriteBtn = () => {
  const { playingSongId } = useSelector((state) => state.player);
  return (
    <IconButton
      sx={{
        marginRight: "10px",
      }}
      aria-label="favsong"
    >
      <Favorite songId={playingSongId || ""} />
    </IconButton>
  );
};

export default FavoriteBtn;
