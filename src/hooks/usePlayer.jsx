import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlayNextSong } from "../redux/slice/playerSlicer";

const usePlayer = () => {
  const dispatch = useDispatch();
  const { repeat, upcomingSongs, playingSongId } = useSelector(
    (state) => state.player
  );

  const PlayNext = () => {
    if (upcomingSongs.length > 0) {
      let IndexOfCurrentSong = upcomingSongs.findIndex(
        (item) => item.id === playingSongId
      );

      if (
        IndexOfCurrentSong !== -1 &&
        IndexOfCurrentSong !== upcomingSongs.length - 1
      ) {
        dispatch(
          PlayNextSong({ id: upcomingSongs[IndexOfCurrentSong + 1].id })
        );
      }
    }
  };

  const PlayPrevious = () => {
    if (upcomingSongs.length > 0) {
      let IndexOfCurrentSong = upcomingSongs.findIndex(
        (item) => item.id === playingSongId
      );

      if (IndexOfCurrentSong !== -1 && IndexOfCurrentSong !== 0) {
        dispatch(
          PlayNextSong({ id: upcomingSongs[IndexOfCurrentSong - 1].id })
        );
      }
    }
  };

  return { PlayNext, PlayPrevious };
};

export default usePlayer;
