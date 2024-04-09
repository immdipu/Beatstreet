import React from "react";
import IconButton from "@mui/material/IconButton";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import usePlayer from "../../../hooks/usePlayer";

const PreviousBtn = ({ fill = "#8e9196", hover = "#2a2a2abf" }) => {
  const { PlayPrevious } = usePlayer();

  return (
    <IconButton
      aria-label="previous song"
      onClick={() => PlayPrevious()}
      sx={{
        ":hover": {
          bgcolor: hover,
        },
      }}
    >
      <FastRewindRounded fontSize="2rem" htmlColor={fill} />
    </IconButton>
  );
};

export default PreviousBtn;
