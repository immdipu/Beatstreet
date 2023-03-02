import React from "react";
import { SingleChart } from "../components";
import { useMusicContext } from "../Context/MusicContext";

const TopPlaylists = () => {
  const { playlists } = useMusicContext();
  return (
    <div className="flex gap-10 overflow-scroll h-full">
      {playlists.map((item, index) => {
        return <SingleChart {...item} key={index} />;
      })}
    </div>
  );
};

export default TopPlaylists;
