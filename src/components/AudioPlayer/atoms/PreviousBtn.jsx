import React from "react";
import IconButton from "@mui/material/IconButton";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import usePlayer from "../../../hooks/usePlayer";

const PreviousBtn = () => {
  const { PlayPrevious } = usePlayer();

  return (
    <IconButton
      aria-label="previous song"
      onClick={() => PlayPrevious()}
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
