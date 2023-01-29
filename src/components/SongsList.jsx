import React from "react";
import SingleSongList from "./SingleSongList";

const SongsList = ({ songs }) => {
  return (
    <div className="w-full pt-16 pl-14 pr-20 pb-7 flex flex-col gap-2">
      {songs.map((item, index) => {
        return <SingleSongList {...item} key={index} index={index + 1} />;
      })}
    </div>
  );
};

export default SongsList;
