import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Timing, SliderBar } from "../atoms";
import { AudioLinkSelector } from "../../../Utils/Helper";
import { useSelector } from "react-redux";
import usePlayer from "../../../hooks/usePlayer";

const TimeAndSlider = ({ current_song, setPaused, currentAudio }) => {
  const { repeat, upcomingSongs } = useSelector((state) => state.player);
  const { PlayNext } = usePlayer();
  const [musicTotalLength, setMusicTotalLength] = useState("00:00");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00:00");
  const [audioProgress, setAudioProgress] = useState(0);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleAudioUpdate = () => {
    if (!currentAudio.current) return console.log("No audio");

    if (currentAudio.current.currentTime === currentAudio.current.duration) {
      if (repeat) {
        currentAudio.current?.play();
      } else {
        if (upcomingSongs.length > 0) {
          PlayNext();
        } else {
          setPaused(true);
        }
      }
    }

    if (currentAudio.current?.paused) {
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

  const handleMusicProgressBar = (e) => {
    if (!currentAudio.current) return console.log("No audio");
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  return (
    <div className="w-full">
      <audio
        src={AudioLinkSelector(current_song)}
        ref={currentAudio}
        onTimeUpdate={handleAudioUpdate}
        onLoadedData={() => {
          currentAudio.current.play();
        }}
        id="myAudio"
      ></audio>

      <Timing
        musicCurrentTime={musicCurrentTime}
        musicTotalLength={musicTotalLength}
      />

      <SliderBar value={audioProgress} onchange={handleMusicProgressBar} />

      {domLoaded &&
        createPortal(
          <div>
            <SliderBar
              value={audioProgress}
              position="absolute"
              onchange={handleMusicProgressBar}
            />
          </div>,
          document.getElementById("bottom-audio-player")
        )}
    </div>
  );
};

export default TimeAndSlider;
