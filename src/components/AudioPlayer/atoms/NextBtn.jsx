import React from "react";
import IconButton from "@mui/material/IconButton";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import { useSelector, useDispatch } from "react-redux";
import { PlayNextSong } from "../../../redux/slice/playerSlicer";

const NextBtn = () => {
  const { upcomingSongs, playingSongId } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const HandleNextSong = () => {
    if (upcomingSongs.length > 0) {
      let IndexOfCurrentSong = upcomingSongs.findIndex(
        (item) => item.id === playingSongId
      );

      if (
        IndexOfCurrentSong !== -1 &&
        IndexOfCurrentSong !== upcomingSongs.length - 1
      ) {
        dispatch(
          PlayNextSong({ id: upcomingSongs[IndexOfCurrentSong + 1].id })
        );
      }
    }
  };
  return (
    <IconButton
      sx={{
        ":hover": {
          bgcolor: "#2a2a2abf",
        },
      }}
      aria-label="nextsong"
      onClick={HandleNextSong}
    >
      <FastForwardRounded fontSize="2rem" htmlColor="#8e9196" />
    </IconButton>
  );
};

export default NextBtn;
