import React from "react";
import IconButton from "@mui/material/IconButton";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import usePlayer from "../../../hooks/usePlayer";

const NextBtn = () => {
  const { PlayNext } = usePlayer();

  return (
    <IconButton
      sx={{
        ":hover": {
          bgcolor: "#2a2a2abf",
        },
      }}
      aria-label="nextsong"
      onClick={() => PlayNext()}
    >
      <FastForwardRounded fontSize="2rem" htmlColor="#8e9196" />
    </IconButton>
  );
};

export default NextBtn;
