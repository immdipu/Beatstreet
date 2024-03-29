import React, { useEffect } from "react";
import { useMusicContext } from "../Context/MusicContext";
import { usePlayerContext } from "../Context/PlayerContext";
import { ErrorBoundary } from "react-error-boundary";
import userApis from "../Api/userApi.js";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  LoadingSpinner,
  TrendingAlbums,
  Albums,
  TopCharts,
  TopPlaylists,
} from "../components";
import Recommendations from "../components/Recommendations.jsx";

const Mains = () => {
  const { side_menu_show } = usePlayerContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["favoriteSongs"],
    queryFn: () => userApis.getHomepage(),
  });

  if (isLoading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 pr-32 max-md:pr-0 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 pr-32 max-md:pr-0 ">
        <p>Something went wrong</p>

        <button
          onClick={() => {
            window.location.reload();
          }}
          className="bg-primary-400 text-white px-4 py-2 rounded-md"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeInOut" } }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      className={
        "bg-darkBlue pl-10 pr-4 max-md:pl-4 overflow-hidden " +
        (side_menu_show ? "mr-96 transition-all duration-300 ease-in" : "mr-0")
      }
    >
      {data?.data?.suggestions && (
        <section className="w-full my-6 ">
          <h1 className="font-medium text-xl w-fit text-darkTitle my-4">
            Recommendation for you
          </h1>

          <Recommendations data={data?.data?.suggestions} />
        </section>
      )}
      <section className="w-full my-6 ">
        <h1 className="font-medium text-xl w-fit text-darkTitle my-4">
          Trending
        </h1>

        {data?.data?.trending && <TrendingAlbums data={data?.data?.trending} />}
      </section>
      <section className="w-full my-6">
        <h1 className="font-medium text-xl w-fit text-darkTitle my-4">
          Latest Releases
        </h1>

        {data?.data?.newAlbums && <Albums data={data?.data?.newAlbums} />}
      </section>
      <section>
        <h1 className="font-medium text-xl w-fit text-darkTitle my-4">
          Top Charts
        </h1>

        {data?.data?.topCharts && <TopCharts data={data?.data?.topCharts} />}
      </section>
      <section>
        <h1 className="font-medium text-xl w-fit text-darkTitle my-4">
          Top Playlist
        </h1>

        {data?.data?.topPlaylist && (
          <TopPlaylists data={data?.data?.topPlaylist} />
        )}
      </section>
    </motion.div>
  );
};

export default Mains;
