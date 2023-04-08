import React from "react";
import { Link } from "react-router-dom";

const SinglePlaylistCard = ({ name, image, songsLength = 0, playlistId }) => {
  return (
    <Link>
      <div className="flex overflow-hidden cursor-pointer hover:bg-lightBlue rounded-md items-center pr-3">
        <div className="flex  w-full items-center gap-5 ">
          {image ? (
            <img className="rounded-md w-14" src={image} alt="spotify" />
          ) : (
            <div className="w-14 rounded-md bg-black text-neutral-300 text-center text-sm h-full">
              No Cover
            </div>
          )}
          <div className="">
            <h3 className="text-neutral-200 tracking-wide text-lg">{name}</h3>
            <p className="text-neutral-400 text-xs mt-1">{songsLength} songs</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SinglePlaylistCard;
