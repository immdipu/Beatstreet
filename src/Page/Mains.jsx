import React, { useEffect } from "react";
import { useMusicContext } from "../Context/MusicContext";
import { usePlayerContext } from "../Context/PlayerContext";
import { useUserContext } from "../Context/UserContext";
import { motion } from "framer-motion";
import {
  LoadingSpinner,
  TrendingAlbums,
  Albums,
  TopCharts,
  TopPlaylists,
} from "../components";

const Mains = () => {
  const { homeData_loading: loading } = useMusicContext();
  const { AutoLogin } = useUserContext();
  const { side_menu_show } = usePlayerContext();

  useEffect(() => {
    AutoLogin();
  }, []);

  if (loading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 pr-32 max-md:pr-0 ">
        <LoadingSpinner size={80} />
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
      <section className="w-full my-6 ">
        <h1 className="font-medium text-xl w-fit text-darkTitle my-4">
          Trending
        </h1>
        <TrendingAlbums />
      </section>
      <section className="w-full my-6">
        <h1 className="font-medium text-xl w-fit text-darkTitle my-4">
          Latest Releases
        </h1>
        <Albums />
      </section>
      <section>
        <h1 className="font-medium text-xl w-fit text-darkTitle my-4">
          Top Charts
        </h1>
        <TopCharts />
      </section>
      <section>
        <h1 className="font-medium text-xl w-fit text-darkTitle my-4">
          Top Playlist
        </h1>
        <TopPlaylists />
      </section>
    </motion.div>
  );
};

export default Mains;
