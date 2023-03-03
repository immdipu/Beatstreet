import React from "react";
import SingleSongList from "./SingleSongList";

const SongsList = ({ songs }) => {
  return (
    <div className="w-full  max-md:px-0 flex flex-col gap-2">
      {songs.map((item, index) => {
        return <SingleSongList {...item} key={index} index={index + 1} />;
      })}
    </div>
  );
};

export default SongsList;
