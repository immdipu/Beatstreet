import React, { useState } from "react";
import { useMusicContext } from "../Context/MusicContext";
import MusicCard from "./MusicCard";

const Mains = () => {
  const { homeData, loading } = useMusicContext();
  if (loading) {
    return <div className="text-2xl font-bold ">Its loading...</div>;
  }
  return (
    <div className="bg-darkBlue ml-44 mr-96 pl-10 pr-4 overflow-hidden">
      <section className="w-full my-6 ">
        <h1 className="font-medium text-xl w-fit text-darkTitle my-4">
          Trending
        </h1>
        <div className="flex gap-6 overflow-scroll h-full">
          {homeData.trendingAlbums.map((item, index) => {
            return <MusicCard key={index} {...item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Mains;
