import { RedoOutlined } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMusicContext } from "../Context/MusicContext";
import { SongsList, LoadingSpinner } from "../components";
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
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  return (
    <div
      className={
        "bg-darkBlue ml-44  overflow-hidden " +
        (side_menu_show ? "mr-80 transition-all duration-400 ease-in" : "mr-0")
      }
    >
      <div className="gradient w-full pt-16 px-16 pb-7 grid grid-cols-[max-content,auto] gap-5">
        {poster ? (
          <img
            src={ImageFetch(currentAlbum)}
            alt={currentAlbum.name}
            className="w-56 shadow-xl"
          />
        ) : (
          <Skeleton variant="rectangular" width={160} height={170} />
        )}
        <div className="flex place-content-end flex-col">
          <h2 className="font-bold text-4xl text-white tracking-wider">
            {currentAlbum.name}
          </h2>
          <div className="flex items-center gap-3 my-2">
            <p className="text-slate-200 text-sm">
              {currentAlbum.primaryArtists}
            </p>
            <div className="bg-darkTextColor rounded-full w-1 h-1"></div>
            <p className="text-slate-200 text-sm">{currentAlbum.year}</p>
            <div className="bg-darkTextColor rounded-full w-1 h-1"></div>
            <p className="text-slate-200 text-sm">
              {currentAlbum.songCount} songs
            </p>
          </div>
        </div>
      </div>
      {currentAlbum.songs && <SongsList songs={currentAlbum.songs} />}
      <div></div>
    </div>
  );
};

export default SingleAlbum;
