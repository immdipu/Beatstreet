import React from "react";
import MusicCard from "./MusicCard";
import { useMusicContext } from "../Context/MusicContext";

const Albums = () => {
  const { albums } = useMusicContext();
  return (
    <div className="flex gap-6 overflow-scroll h-full">
      {albums.map((item, index) => {
        return <MusicCard key={index} {...item} />;
      })}
    </div>
  );
};

export default Albums;
