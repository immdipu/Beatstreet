import React, { useState, useRef, useEffect } from "react";
import { ImageFetch } from "../../Utils/Helper";
import SongDownloader from "../downloader/SongDownloader";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import userApis from "../../Api/userApi";
import musicApi from "../../Api/Api";
import { db } from "../../App";
import { KeyboardDoubleArrowDownSharp } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";
import { ToggleRightSidebar } from "../../redux/slice/playerSlicer";
import { useLiveQuery } from "dexie-react-hooks";
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
import { createPortal } from "react-dom";
import Disk from "../assets/Disk";

const AudioPlayer = () => {
  const { playingSongId } = useSelector((state) => state.player);
  const offlineSongs = useLiveQuery(() => db.songs.toArray(), []);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showUpNext, setShowUpNext] = useState(false);
  const [paused, setPaused] = useState(true);
  const [coverRadius, setCoverRadius] = useState(false);
  const currentAudio = useRef();
  const [current_song, Setcurrent_song] = useState(null);

  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    onSwipedUp: (eventData) => {
      setShowUpNext((prev) => !prev);
    },
  });

  const addRecentSong = useMutation({
    mutationFn: (songId) => userApis.addRecentSong(songId),
  });
  const getSongDetails = useMutation({
    mutationFn: (songId) => musicApi.SingleSong(songId),
    onSuccess: (data) => {
      Setcurrent_song(data);
    },
  });

  useEffect(() => {
    if (navigator.onLine) {
      getSongDetails.mutate(playingSongId);
    } else {
      if (!offlineSongs) return;
      const getSong = offlineSongs.filter((item) => item.id === playingSongId);
      const updatedsong = getSong.map((item) => {
        return {
          ...item,
          url: URL.createObjectURL(item.url),
          image: [
            {
              url: URL.createObjectURL(item.image),
            },
          ],
        };
      });
      Setcurrent_song(updatedsong[0]);
    }
  }, [playingSongId, offlineSongs]);

  useEffect(() => {
    if (current_song?.id && user.islogged) {
      addRecentSong.mutate(current_song.id);
    }
  }, [current_song]);

  const handleAudioPlay = () => {
    if (!current_song) return console.log("No audio");
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setPaused(false);
    } else {
      currentAudio.current.pause();
      setPaused(true);
    }
  };

  return (
    <div
      className={
        " px-7 py-2  max-md:rounded-none mt-5 max-md:mt-0 relative boss max-md:h-full "
      }
    >
      <img
        src={ImageFetch(current_song)}
        alt="background"
        className="absolute inset-0 -z-40 h-full  object-cover opacity-20 blur-md rounded-lg
    "
      />

      <section className="flex flex-col items-center gap-1 max-md:mt-10 ">
        <div className="flex">
          <button
            onClick={() => {
              dispatch(ToggleRightSidebar());
            }}
            className="w-fit -translate-x-4"
          >
            <KeyboardDoubleArrowDownSharp />
          </button>
          <Header
            name={current_song?.name || ""}
            artist={current_song?.artists || []}
          />
        </div>

        {current_song ? (
          <img
            src={ImageFetch(current_song || "")}
            alt="song Avatar"
            onClick={() => setCoverRadius((prev) => !prev)}
            className={
              "h-32 w-32  max-md:h-full max-md:w-72  transition-all ease-linear duration-500 cursor-pointer object-cover mt-4 " +
              (coverRadius ? "rounded-[15%]" : " rounded-[100%]")
            }
          />
        ) : (
          <Disk />
        )}
        {currentAudio.current &&
          createPortal(
            <>
              {current_song ? (
                <img
                  src={ImageFetch(current_song)}
                  alt="song Avatar"
                  onClick={() => setCoverRadius((prev) => !prev)}
                  className={
                    "size-14 max-md:h-full max-md:w-72  transition-all ease-linear duration-500 cursor-pointer object-cover mt-4 " +
                    (coverRadius ? "rounded-[15%]" : " rounded-[100%]")
                  }
                />
              ) : (
                <div className=" p-2 bg-neutral-700 rounded-md my-2 max-md:w-[67px]">
                  <Disk width={50} height={50} />
                </div>
              )}
            </>,
            document.getElementById("song-image")
          )}

        {currentAudio.current &&
          createPortal(
            <>
              <Header
                name={current_song?.name || ""}
                artist={current_song?.artists || []}
                bottom={true}
              />
            </>,
            document.getElementById("song-header")
          )}
        {currentAudio.current &&
          createPortal(
            <>
              <SongDownloader songId={current_song?.id || ""} />
            </>,
            document.getElementById("song-downloader")
          )}

        <TimeAndSlider
          current_song={current_song || ""}
          setPaused={setPaused}
          currentAudio={currentAudio}
        />
        <div className="mt-1 max-md:scale-125 max-md:mt-10   max-md:space-x-2">
          <FavoriteBtn />
          <PreviousBtn />
          <PlayPause paused={paused} handleAudioPlay={handleAudioPlay} />
          {currentAudio.current &&
            createPortal(
              <>
                <PlayPause
                  paused={paused}
                  handleAudioPlay={handleAudioPlay}
                  fill="#dadada"
                  bg="#121010"
                  font="2rem"
                />
              </>,
              document.getElementById("play-pause")
            )}
          <NextBtn />
          <RepeatBtn />
        </div>

        <div className=" w-full flex justify-end max-md:mr-10">
          <SongDownloader songId={current_song?.id || ""} />
        </div>

        <button
          {...handlers}
          onClick={() => setShowUpNext((prev) => !prev)}
          className="mt-0  w-full min-h-24  max-md:mt-16 max-md:text-xl"
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
