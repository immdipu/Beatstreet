import React, { useEffect, useState } from "react";
import userApis from "../Api/userApi.js";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  LoadingSpinner,
  TrendingAlbums,
  Albums,
  TopCharts,
  TopPlaylists,
} from "../components";

const Mains = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["homepage"],
    queryFn: () => userApis.getHomepage(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  useEffect(() => {
    if (!navigator.onLine) {
      navigate("/Downloads");
    }
  }, []);

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
      className={"bg-darkBlue pl-10 pr-4 max-md:pl-4 overflow-hidden "}
    >
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
