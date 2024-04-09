import React, { useRef, useState } from "react";
import { Timing, SliderBar } from "../atoms";
import { AudioLinkSelector } from "../../../Utils/Helper";

const TimeAndSlider = ({ current_song, setPaused, currentAudio }) => {
  const [musicTotalLength, setMusicTotalLength] = useState("00:00");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00:00");
  const [audioProgress, setAudioProgress] = useState(0);

  const handleAudioUpdate = () => {
    if (currentAudio.current.currentTime === currentAudio.current.duration) {
      if (repeatOne) {
        // singleSong(current_song?.id);
        currentAudio.current.play();
      } else {
        if (current_playing_lists.length > 0) {
          let IndexOfCurrentSong = current_playing_lists.indexOf(
            current_song.id
          );
          if (IndexOfCurrentSong !== current_playing_lists.length - 1) {
            singleSong(current_playing_lists[IndexOfCurrentSong + 1]);
          } else {
            setPaused(true);
          }
        } else {
          setPaused(true);
        }
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

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  return (
    <div className="w-full">
      <audio
        src={AudioLinkSelector(current_song) || ""}
        ref={currentAudio}
        autoPlay
        onTimeUpdate={handleAudioUpdate}
        id="myAudio"
      ></audio>

      <Timing
        musicCurrentTime={musicCurrentTime}
        musicTotalLength={musicTotalLength}
      />
      <SliderBar value={audioProgress} onchange={handleMusicProgressBar} />
    </div>
  );
};

export default TimeAndSlider;
