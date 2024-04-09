import React from "react";
import IconButton from "@mui/material/IconButton";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import { useSelector, useDispatch } from "react-redux";
import { PlayNextSong } from "../../../redux/slice/playerSlicer";

const PreviousBtn = () => {
  const { upcomingSongs, playingSongId } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const HandlePreviousSong = () => {
    if (upcomingSongs.length > 0) {
      let IndexOfCurrentSong = upcomingSongs.findIndex(
        (item) => item.id === playingSongId
      );

      if (IndexOfCurrentSong !== -1 && IndexOfCurrentSong !== 0) {
        dispatch(
          PlayNextSong({ id: upcomingSongs[IndexOfCurrentSong - 1].id })
        );
      }
    }
  };
  return (
    <IconButton
      aria-label="previous song"
      onClick={HandlePreviousSong}
      sx={{
        ":hover": {
          bgcolor: "#2a2a2abf",
        },
      }}
    >
      <FastRewindRounded fontSize="2rem" htmlColor="#8e9196" />
    </IconButton>
  );
};

export default PreviousBtn;
