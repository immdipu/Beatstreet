import React from "react";
import IconButton from "@mui/material/IconButton";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import { useSelector, useDispatch } from "react-redux";
import { RepeatSong } from "../../../redux/slice/playerSlicer";
const RepeatBtn = () => {
  const { repeat } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  return (
    <IconButton
      sx={{
        ":hover": {
          bgcolor: "#2a2a2abf",
        },
        marginLeft: "10px",
      }}
      onClick={() => dispatch(RepeatSong())}
    >
      {repeat ? (
        <RepeatOneIcon fontSize="2rem" htmlColor="#8e9196" />
      ) : (
        <RepeatIcon fontSize="2rem" htmlColor="#8e9196" />
      )}
    </IconButton>
  );
};

export default RepeatBtn;
