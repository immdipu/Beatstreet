import React from "react";
import { SpotifyImageFetch } from "./../Utils/Helper";
import { usePlaylistContext } from "../Context/ImportPlaylistContext";

const SingleSpotifylist = ({ image, name, songs, id }) => {
  const { token, getSpotifyPlaylistSongs } = usePlaylistContext();

  const HandleClick = () => {
    getSpotifyPlaylistSongs(token, id, name, image);
  };

  return (
    <div className="flex overflow-hidden cursor-pointer hover:bg-lightBlue rounded-md items-center pr-3">
      <div className="flex  w-full items-center gap-5 ">
        {image.length !== 0 ? (
          <img
            className="rounded-md w-14"
            src={SpotifyImageFetch(image)}
            alt="spotify"
          />
        ) : (
          <div className="w-14 rounded-md bg-black text-neutral-300 text-center text-sm h-full">
            No Cover
          </div>
        )}
        <div className="">
          <h3 className="text-neutral-200 tracking-wide text-lg">{name}</h3>
          <p className="text-neutral-400 text-xs mt-1">{songs} songs</p>
        </div>
      </div>
      <button
        onClick={HandleClick}
        className="bg-sky-700 px-3 py-1 rounded-md hover:bg-sky-600 duration-300 transition-all ease-linear  w-fit h-fit float-right"
      >
        Import
      </button>
    </div>
  );
};

export default SingleSpotifylist;
