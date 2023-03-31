import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import { usePlayerContext } from "../Context/PlayerContext";
import { AudioLinkSelector, ImageFetch } from "../Utils/Helper";
import SongDownloader from "./downloader/SongDownloader";
import { useUserContext } from "../Context/UserContext";

const AudioPlayer = () => {
  const { current_song, audio_playing, current_playing_lists, singleSong } =
    usePlayerContext();
  const { sendRecentPlayedSong, User_id, login_success } = useUserContext();

  useEffect(() => {
    if (current_song.id && login_success) {
      let data = {
        songId: current_song.id,
      };
      sendRecentPlayedSong(User_id, data);
    }
  }, [current_song]);

  const [audioProgress, setAudioProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [musicTotalLength, setMusicTotalLength] = useState("00:00");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00:00");

  const theme = useTheme();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  // if (login_success && User_id) {
  //   data = {
  //     songId: id,
  //   };
  //   sendRecentPlayedSong(User_id, data);
  // }

  const currentAudio = useRef();

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setPaused(false);
    } else {
      currentAudio.current.pause();
      setPaused(true);
    }
  };

  const handleAudioUpdate = () => {
    if (currentAudio.current.currentTime === currentAudio.current.duration) {
      if (current_playing_lists.length > 0) {
        let IndexOfCurrentSong = current_playing_lists.indexOf(current_song.id);
        if (IndexOfCurrentSong !== current_playing_lists.length - 1) {
          singleSong(current_playing_lists[IndexOfCurrentSong + 1]);
        } else {
          setPaused(true);
        }
      } else {
        setPaused(true);
      }
    }

    if (currentAudio.current.paused) {
      setPaused(true);
    } else {
      setPaused(false);
    }

    //input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0:${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength);

    //input current time of the audio
    let min = Math.floor(currentAudio.current.currentTime / 60);
    let sec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrent = `${min < 10 ? `0${min}` : min}:${
      sec < 10 ? `0${sec}` : sec
    }`;
    setMusicCurrentTime(musicCurrent);

    //progress bar increase as music play
    const progress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const HandleNextSong = () => {
    if (current_playing_lists.length > 0) {
      let IndexOfCurrentSong = current_playing_lists.indexOf(current_song.id);
      if (IndexOfCurrentSong !== current_playing_lists.length - 1) {
        singleSong(current_playing_lists[IndexOfCurrentSong + 1]);
      }
    }
  };

  const HandlePreviousSong = () => {
    if (current_playing_lists.length > 0) {
      let IndexOfCurrentSong = current_playing_lists.indexOf(current_song.id);
      if (IndexOfCurrentSong !== 0) {
        singleSong(current_playing_lists[IndexOfCurrentSong - 1]);
      }
    }
  };

  if (!audio_playing) {
    return null;
  }
  return (
    <div className=" px-7 py-5 mt-10 relative boss ">
      <img
        src={ImageFetch(current_song)}
        alt="background"
        className="absolute inset-0 -z-40 h-full object-cover opacity-20 blur-md rounded-lg
    "
      />
      <h3 className="text-xl opacity-30">player</h3>
      <section className="flex flex-col items-center gap-1 ">
        <audio
          src={AudioLinkSelector(current_song)}
          ref={currentAudio}
          autoPlay
          onTimeUpdate={handleAudioUpdate}
        ></audio>

        <h3
          className="text-lg text-darkTitle mt-4 text-center"
          dangerouslySetInnerHTML={{
            __html: `${current_song.name}`,
          }}
        />
        <marquee
          className="text-xs opacity-90 whitespace-nowrap"
          direction="right"
        >
          {current_song.primaryArtists}
        </marquee>
        <img
          src={ImageFetch(current_song)}
          alt="song Avatar"
          className="h-32 w-32 rounded-full object-cover mt-4"
        />
        <div className="flex justify-between w-full mb-2 ">
          <p className="text-xs tracking-normal">{musicCurrentTime}</p>
          <p className="text-xs tracking-normal">{musicTotalLength}</p>
        </div>

        <Slider
          aria-label="time-indicator"
          size="small"
          value={audioProgress}
          onChange={handleMusicProgressBar}
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#007aff",
            height: 4,
            padding: 0,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === "dark"
                    ? "rgb(255 255 255 / 16%)"
                    : "rgb(0 0 0 / 16%)"
                }`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />

        <div className="mt-1">
          <IconButton aria-label="previous song" onClick={HandlePreviousSong}>
            <FastRewindRounded fontSize="large" htmlColor="#8e9196" />
          </IconButton>
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={handleAudioPlay}
          >
            {paused ? (
              <PlayArrowRounded sx={{ fontSize: "3rem" }} htmlColor="#8e9196" />
            ) : (
              <PauseRounded sx={{ fontSize: "3rem" }} htmlColor="#8e9196" />
            )}
          </IconButton>
          <IconButton aria-label="nextsong" onClick={HandleNextSong}>
            <FastForwardRounded fontSize="large" htmlColor="#8e9196" />
          </IconButton>
        </div>

        <div className=" w-full flex justify-end cursor-pointer">
          <SongDownloader songId={current_song.id} />
        </div>
      </section>
    </div>
  );
};

export default AudioPlayer;
