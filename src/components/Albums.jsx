import React from "react";
import MusicCard from "./MusicCard";
import { useMusicContext } from "../Context/MusicContext";

const Albums = () => {
  const { Albums } = useMusicContext();
  return (
    <div className="flex gap-6 overflow-scroll h-full">
      {Albums.map((item, index) => {
        return <MusicCard key={index} {...item} />;
      })}
    </div>
  );
};

export default Albums;
