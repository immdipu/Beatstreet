import { RedoOutlined } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMusicContext } from "../Context/MusicContext";
import SongsList from "./SongsList";

const SingleAlbum = () => {
  let { id } = useParams();
  const { singleAlbum, currentAlbum, loading } = useMusicContext();

  useEffect(() => {
    singleAlbum(id);
  }, [id]);

  if (loading) {
    return (
      <div className="text-black text-xl ml-44 mr-96 pl-10 pr-4 overflow-hidden">
        Loading....
      </div>
    );
  }

  return (
    <div className="bg-darkBlue ml-44 mr-80 pr-4 overflow-hidden">
      <div className="gradient w-full pt-16 px-16 pb-7 grid grid-cols-[max-content,auto] gap-5">
        <img src={currentAlbum.image} alt="" className="w-56 shadow-xl" />
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
      <SongsList songs={currentAlbum.songs} />
      <div></div>
    </div>
  );
};

export default SingleAlbum;
