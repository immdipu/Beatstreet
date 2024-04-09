import React from "react";
import { NextBtn, PreviousBtn } from "./atoms";

const BottomAudioPlayer = () => {
  return (
    <div className="h-20 right-0 bg-lightBlue  left-0  fixed bottom-0  ml-52 mr-5 px-3">
      <div
        id="bottom-audio-player"
        className="top-0 absolute right-0 left-0 px-0 mr-px  "
      ></div>

      <div className="flex border w-full h-full">
        <section className="flex">
          <div id="song-image" className="w-full"></div>
        </section>
        <section className="flex items-center border">
          <div>
            <PreviousBtn />
          </div>
          <div id="play-pause"></div>
          <div>
            <NextBtn />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BottomAudioPlayer;
