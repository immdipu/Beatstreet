import React from "react";
import MusicCard from "./MusicCard";
import { useMusicContext } from "../Context/MusicContext";

const TrendingAlbums = () => {
  const { trendingAlbums } = useMusicContext();
  return (
    <div className="flex gap-6 overflow-scroll h-full">
      {trendingAlbums &&
        trendingAlbums.length > 0 &&
        trendingAlbums.map((item, index) => {
          return <MusicCard key={index} {...item} />;
        })}
    </div>
  );
};

export default TrendingAlbums;
