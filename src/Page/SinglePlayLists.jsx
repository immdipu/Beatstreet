import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SongsList, LoadingSpinner, SearchBar } from "../components";
import { useMusicContext } from "../Context/MusicContext";
import { ImageFetch, FollowersCount } from "../Utils/Helper";
import Skeleton from "@mui/material/Skeleton";
import { usePlayerContext } from "../Context/PlayerContext";

const SinglePlayLists = () => {
  const { side_menu_show } = usePlayerContext();
  const [ImageLoading, SetImageLoading] = useState(true);
  const {
    SinglePlaylist,
    currentPlaylists,
    single_album_loading: loading,
  } = useMusicContext();
  let { id } = useParams();
  useEffect(() => {
    SinglePlaylist(id);
  }, [id]);

  if (loading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  const handleImageLoad = () => {
    SetImageLoading(false);
  };

  return (
    <div
      className={
        "bg-darkBlue  overflow-hidden " +
        (side_menu_show ? "mr-96 transition-all duration-300 ease-in" : "mr-0")
      }
    >
      <div className="gradient flex flex-col gap-8 w-full pt-3 px-16 max-md:px-5 pb-7 Artistbackground ">
        <div className="mt-7 w-1/3 ml-16 max-md:ml-0 max-md:w-full max-md:px-5">
          <SearchBar />
        </div>
        <div className="grid grid-cols-[max-content,auto] mt-7 max-md:grid-cols-1  max-md:place-items-center gap-5">
          {ImageLoading && (
            <Skeleton
              width={160}
              height={170}
              sx={{ bgcolor: "#545454" }}
              variant="rounded"
            />
          )}
          <img
            src={ImageFetch(currentPlaylists)}
            alt={currentPlaylists.name}
            onLoad={handleImageLoad}
            className={
              "w-56 shadow-xl max-md:w-34 rounded-md " +
              (ImageLoading ? "hidden" : "block")
            }
          />

          <div className="flex place-content-end max-md:place-items-center flex-col">
            <h2 className="font-bold text-4xl max-md:text-2xl max-md:text-center text-white tracking-wider">
              {currentPlaylists.name}
            </h2>
            <div className="flex max-md:flex-col items-center gap-3 my-2 max-md:mt-4">
              <p className="text-slate-200 text-sm max-md:text-xs">
                {FollowersCount(currentPlaylists.followerCount)} followers
              </p>
              <div className="bg-darkTextColor rounded-full max-md:text-xs w-1 h-1 max-md:hidden"></div>
              <p className="text-slate-200 text-sm">
                {currentPlaylists.songCount} songs
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="mx-12 mt-6 max-md:mx-2 mb-14">
        {currentPlaylists.songs && <SongsList songs={currentPlaylists.songs} />}
      </section>
    </div>
  );
};

export default SinglePlayLists;
