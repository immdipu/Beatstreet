import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { usePlayerContext } from "../Context/PlayerContext";
import { ImageFetch } from "../Utils/Helper";
import ListItemButton from "@mui/material/ListItemButton";
const SingleSongList = ({
  id,
  name,
  primaryArtists,
  duration,
  index,
  image,
  albumName = null,
  showSongCount = false,
  title,
}) => {
  const { singleSong } = usePlayerContext();
  let currentIndex = <p className="text-slate-300">{index}</p>;

  return (
    <ListItemButton
      sx={[
        { borderRadius: 2 },
        (theme) => ({
          "&:hover": {
            backgroundColor: "#1d242ca3",
          },
        }),
      ]}
      data-id={id}
      className="grid relative overflow-hidden grid-cols-[max-content,max-content,auto,max-content] gap-3 cursor-pointer rounded-lg py-4 items-center px-5 max-md:px-3"
      onClick={() => singleSong(id)}
    >
      {showSongCount && <div className="w-4">{currentIndex}</div>}
      <img
        src={image[1].link}
        className="w-14 rounded-lg object-cover"
        alt={name}
      />
      <div>
        <h3
          className="text-slate-200 text-sm"
          dangerouslySetInnerHTML={{
            __html: `${name || title}`,
          }}
        />

        <p className="text-xs max-md:text-[11px]  opacity-90 mt-[2px] max-w-xs overflow-hidden whitespace-nowrap text-ellipsis text-darkTextColor tracking-wide">
          {primaryArtists}
        </p>
      </div>

      <div>
        {duration && (
          <div className="text-slate-200 text-sm opacity-70">
            {Math.floor(duration / 60)}:00
          </div>
        )}
        {albumName && (
          <div className="text-slate-200 text-xs opacity-70 absolute left-1/2 max-sm:left-3/4">
            {albumName}
          </div>
        )}
      </div>
    </ListItemButton>
  );
};

export default SingleSongList;
