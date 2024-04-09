import React from "react";
import IconButton from "@mui/material/IconButton";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";

const PlayPause = ({ paused, handleAudioPlay }) => {
  return (
    <IconButton
      sx={{
        ":hover": {
          bgcolor: "#2a2a2abf",
        },
      }}
      aria-label={paused ? "play" : "pause"}
      onClick={handleAudioPlay}
    >
      {paused ? (
        <PlayArrowRounded sx={{ fontSize: "3rem" }} htmlColor="#8e9196" />
      ) : (
        <PauseRounded sx={{ fontSize: "3rem" }} htmlColor="#8e9196" />
      )}
    </IconButton>
  );
};

export default PlayPause;
