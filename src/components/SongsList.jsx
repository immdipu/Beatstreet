import React from "react";
import SingleSongList from "./SingleSongList";

const SongsList = ({ songs, playlistId = null, offline = false }) => {
  return (
    <div className="w-full overflow-hidden max-md:px-0 flex flex-col gap-2">
      {songs &&
        songs.map((item, index) => {
          return (
            <SingleSongList
              {...item}
              key={index}
              index={index + 1}
              upcomingSongs={songs}
              playlistId={playlistId}
              offline={offline}
            />
          );
        })}
    </div>
  );
};

export default SongsList;
