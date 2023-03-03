import { RedoOutlined } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMusicContext } from "../Context/MusicContext";
import { SongsList, LoadingSpinner, SearchBar } from "../components";
import { ImageFetch } from "../Utils/Helper";
import Skeleton from "@mui/material/Skeleton";
import { usePlayerContext } from "../Context/PlayerContext";

const SingleAlbum = () => {
  const { side_menu_show } = usePlayerContext();
  let { id } = useParams();
  const {
    singleAlbums,
    currentAlbum,
    single_album_loading: loading,
  } = useMusicContext();

  useEffect(() => {
    singleAlbums(id);
  }, [id]);

  let poster = ImageFetch(currentAlbum);

  if (loading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  return (
    <div
      className={
        "bg-darkBlue  overflow-hidden " +
        (side_menu_show ? "mr-96 transition-all duration-300 ease-in" : "mr-0")
      }
    >
      <div className="gradient flex flex-col gap-8 relative w-full pt-3 px-16 max-md:px-5 pb-7  Artistbackground">
        <div className="pt-2 w-3/5 max-md:w-11/12">
          <SearchBar />
        </div>
        <div className="grid grid-cols-[max-content,auto] mt-7 max-md:grid-cols-1 max-md:place-items-center gap-5 ">
          {poster ? (
            <img
              src={ImageFetch(currentAlbum)}
              alt={currentAlbum.name}
              className="w-56 shadow-xl max-md:w-34 rounded-xl"
            />
          ) : (
            <Skeleton variant="rectangular" width={160} height={170} />
          )}
          <div className="flex place-content-end max-md:place-items-center flex-col">
            <h2 className="font-bold text-4xl max-md:text-2xl text-white tracking-wider">
              {currentAlbum.name}
            </h2>
            <div className="flex max-md:flex-col items-center gap-3 max-md:my-0 max-md:gap-2 my-2 max-md:mt-4">
              <p className="text-slate-200 text-sm max-md:text-xs max-md:text-center">
                {currentAlbum.primaryArtists}
              </p>
              <div className="bg-darkTextColor rounded-full w-1 h-1 max-md:hidden"></div>
              <p className="text-slate-200 text-sm max-md:text-xs">
                {currentAlbum.year}
              </p>
              <div className="bg-darkTextColor rounded-full max-md:text-xs w-1 h-1 max-md:hidden"></div>
              <p className="text-slate-200 text-sm">
                {currentAlbum.songCount} songs
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="mx-12 mt-6 max-md:mx-2">
        {currentAlbum.songs && <SongsList songs={currentAlbum.songs} />}
      </section>
    </div>
  );
};

export default SingleAlbum;
