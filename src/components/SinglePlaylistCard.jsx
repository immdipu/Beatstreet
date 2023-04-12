import React from "react";
import { Link } from "react-router-dom";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const SinglePlaylistCard = ({ name, image, songsLength = 0, playlistId }) => {
  return (
    <Link
      to={`/userplaylist/${playlistId}`}
      className="hover:bg-lightBlue hover:bg-opacity-60 transition-all duration-300 ease-linear py-3 px-4"
    >
      <div className="flex overflow-hidden cursor-pointer  rounded-md items-center">
        <div className="flex  w-full items-center gap-5 ">
          {image ? (
            <img className="rounded-md w-10" src={image} alt="spotify" />
          ) : (
            <div className="grid place-items-center bg-[#343432] rounded-md p-2">
              <MusicNoteIcon className="text-neutral-300" />
            </div>
          )}
          <div className="">
            <h3 className="text-neutral-200 tracking-wide text-base">{name}</h3>
            <p className="text-neutral-400 text-xs mt-1">{songsLength} songs</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SinglePlaylistCard;
