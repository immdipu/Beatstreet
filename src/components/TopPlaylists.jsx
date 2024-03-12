import React from "react";
import { SingleChart } from "../components";
import { useMusicContext } from "../Context/MusicContext";

const TopPlaylists = () => {
  const { playlists } = useMusicContext();
  return (
    <div className="flex gap-8 max-md:gap-3 overflow-scroll h-full mb-8">
      {playlists &&
        playlists.length > 0 &&
        playlists.map((item, index) => {
          return <SingleChart {...item} key={index} />;
        })}
    </div>
  );
};

export default TopPlaylists;
