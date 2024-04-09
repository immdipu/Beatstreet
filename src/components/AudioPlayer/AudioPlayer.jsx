import React, { useState, useRef, useEffect } from "react";
import { ImageFetch } from "../../Utils/Helper";
import SongDownloader from "../downloader/SongDownloader";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import userApis from "../../Api/userApi";
import musicApi from "../../Api/Api";
import {
  Header,
  FavoriteBtn,
  NextBtn,
  PlayPause,
  PreviousBtn,
  RepeatBtn,
  UpcomingSongsList,
} from "./atoms";
import TimeAndSlider from "./organism/TimeAndSlider";

const AudioPlayer = () => {
  const { playingSongId } = useSelector((state) => state.player);
  const user = useSelector((state) => state.user);
  const [showUpNext, setShowUpNext] = useState(false);
  const [paused, setPaused] = useState(false);
  const [coverRadius, setCoverRadius] = useState(false);

  const [current_song, Setcurrent_song] = useState(null);
  const addRecentSong = useMutation({
    mutationFn: (songId) => userApis.addRecentSong(songId),
  });
  const getSongDetails = useMutation({
    mutationFn: (songId) => musicApi.SingleSong(songId),
    onSuccess: (data) => {
      Setcurrent_song(data);
      console.log("data", data);
    },
  });

  useEffect(() => {
    getSongDetails.mutate(playingSongId);
  }, [playingSongId]);

  useEffect(() => {
    if (current_song?.id && user.islogged) {
      addRecentSong.mutate(current_song.id);
    }
  }, [current_song]);

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

  if (!current_song) {
    return null;
  }

  console.log("rendering");

  return (
    <div className={" px-7 py-2 mt-5 relative boss max-md:h-full "}>
      <img
        src={ImageFetch(current_song) || ""}
        alt="background"
        className="absolute inset-0 -z-40 h-full  object-cover opacity-20 blur-md rounded-lg
    "
      />
      <section className="flex flex-col items-center gap-1 ">
        <Header name={current_song?.name} artist={current_song?.artists} />
        <img
          src={ImageFetch(current_song || "")}
          alt="song Avatar"
          onClick={() => setCoverRadius((prev) => !prev)}
          className={
            "h-32 w-32  max-md:h-full max-md:w-72  transition-all ease-linear duration-500 cursor-pointer object-cover mt-4 " +
            (coverRadius ? "rounded-[15%]" : " rounded-[100%]")
          }
        />
        <TimeAndSlider
          current_song={current_song}
          setPaused={setPaused}
          currentAudio={currentAudio}
        />
        <div className="mt-1 max-md:scale-125 max-md:mt-5">
          <FavoriteBtn />
          <PreviousBtn />
          <PlayPause paused={paused} handleAudioPlay={handleAudioPlay} />
          <NextBtn />
          <RepeatBtn />
        </div>

        <div className=" w-full flex justify-end max-md:mr-10">
          <SongDownloader songId={current_song?.id || ""} />
        </div>

        <button
          onClick={() => setShowUpNext((prev) => !prev)}
          className="mt-0 max-md:mt-16 max-md:text-xl"
        >
          up Next
        </button>
        {showUpNext && (
          <div
            className=" fixed  max bg-black inset-0 bg-opacity-20"
            onClick={() => setShowUpNext(false)}
          ></div>
        )}
        <AnimatePresence>
          {showUpNext && <UpcomingSongsList setShowUpNext={setShowUpNext} />}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default AudioPlayer;
