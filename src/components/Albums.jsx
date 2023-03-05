import React from "react";
import { MusicCard, SinglesongCard, SingleChart } from "../components";
import { useMusicContext } from "../Context/MusicContext";

const Albums = () => {
  const { albums } = useMusicContext();
  return (
    <div className="flex gap-6 overflow-scroll h-full">
      {albums.map((item, index) => {
        if (item.type === "song") {
          return <SinglesongCard key={index} {...item} />;
        }
        if (item.type === "playlist") {
          return <SingleChart key={index} {...item} />;
        }
        if (item.type === "album") {
          return <MusicCard key={index} {...item} />;
        }
      })}
    </div>
  );
};

export default Albums;
