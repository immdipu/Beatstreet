import React, { useEffect, useState } from "react";
import axios from "axios";

import ListItemButton from "@mui/material/ListItemButton";
import { SongDurtionFormat } from "../Utils/Helper";
import ClipLoader from "react-spinners/ClipLoader";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useSelector, useDispatch } from "react-redux";
import { PlayNextSong } from "../redux/slice/playerSlicer";

const UpNextSongs = ({}) => {
  const { upcomingSongs } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  // const getUpNextSongs = async (data) => {
  //   let IndexOfCurrentSong = songs.indexOf(current_song.id);
  //   let Ids = data.join();
  //   setLoading(true);
  //   try {
  //     const getSongs = await axios.get(`https://saavn.dev/songs?id=${Ids}`);
  //     const songs = getSongs.data.data;
  //     setSongsarr(songs);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
      {upcomingSongs &&
        upcomingSongs.map((item, index) => {
          return (
            <ListItemButton
              key={index}
              sx={[
                {
                  display: "grid",
                  borderRadius: 2,
                  gridTemplateColumns: "max-content 1fr max-content",
                  overflow: "hidden",
                  padding: 1,
                },
                (theme) => ({
                  "&:hover": {
                    backgroundColor: "#1d242ca3",
                  },
                  [theme.breakpoints.down("sm")]: {
                    paddingLeft: 1,
                    paddingRight: "3px",
                  },
                }),
              ]}
              data-id={item.id}
              onClick={() => dispatch(PlayNextSong({ id: item.id }))}
            >
              <div className="bg-neutral-700 p-1 rounded-md">
                <MusicNoteIcon />
              </div>

              <div className="ml-2 overflow-hidden max-md:w-1/2 max-xxs:w-1/3">
                <h3
                  className="text-slate-200 max-md:font-medium text-sm  whitespace-nowrap text-ellipsis overflow-hidden w-[90%] max-xxs:w-2/4"
                  dangerouslySetInnerHTML={{
                    __html: `${item.name || item.title}`,
                  }}
                />

                <p
                  className="text-xs max-md:text-[10px] ml-2 opacity-90 mt-[2px] max-w-xs  overflow-hidden whitespace-nowrap text-ellipsis text-darkTextColor tracking-wide"
                  dangerouslySetInnerHTML={{
                    __html: `${item.primaryArtists}`,
                  }}
                />
              </div>

              <div className=" max-md:mr-1 max-md:ml-8 max-md:hidden">
                {item.duration && (
                  <div className="text-slate-200 text-xs opacity-70">
                    {SongDurtionFormat(item.duration)}
                  </div>
                )}
              </div>
            </ListItemButton>
          );
        })}
    </div>
  );
};

export default UpNextSongs;
