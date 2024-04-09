import React from "react";
import IconButton from "@mui/material/IconButton";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import usePlayer from "../../../hooks/usePlayer";

const NextBtn = ({ fill = "#8e9196", hover = "#2a2a2abf" }) => {
  const { PlayNext } = usePlayer();

  return (
    <IconButton
      sx={{
        ":hover": {
          bgcolor: hover,
        },
      }}
      aria-label="nextsong"
      onClick={() => PlayNext()}
    >
      <FastForwardRounded fontSize="2rem" htmlColor={fill} />
    </IconButton>
  );
};

export default NextBtn;
