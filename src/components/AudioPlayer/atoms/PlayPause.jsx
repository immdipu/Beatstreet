import React from "react";
import IconButton from "@mui/material/IconButton";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";

const PlayPause = ({
  paused,
  handleAudioPlay,
  fill = "#8e9196",
  bg = "",
  font = "3rem",
}) => {
  return (
    <IconButton
      sx={{
        ":hover": {
          bgcolor: "#2a2a2abf",
        },
        bgcolor: bg,
      }}
      aria-label={paused ? "play" : "pause"}
      onClick={handleAudioPlay}
    >
      {paused ? (
        <PlayArrowRounded sx={{ fontSize: font }} htmlColor={fill} />
      ) : (
        <PauseRounded sx={{ fontSize: font }} htmlColor={fill} />
      )}
    </IconButton>
  );
};

export default PlayPause;
