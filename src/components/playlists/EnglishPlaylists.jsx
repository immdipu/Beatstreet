import React from "react";
import { topEnglishPlaylist } from "../../Utils/topplaylist";
import { SingleTopPlaylists } from "..";
import PlaylistNavButtons from "./PlaylistNavButtons";

const EnglishPlaylists = () => {
  return (
    <>
      <PlaylistNavButtons />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(163px,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(122px,0fr))] max-md:px-2 max-md:justify-center my-8  gap-x-1 gap-y-4 overflow-auto px-10">
        {topEnglishPlaylist.map((item, index) => {
          return <SingleTopPlaylists {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default EnglishPlaylists;
