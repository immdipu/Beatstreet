import React from "react";
import { Link } from "react-router-dom";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const SinglePlaylistCard = ({ name, image, songsLength = 0, playlistId }) => {
  return (
    <Link to={`/userplaylist/${playlistId}`}>
      <div className="flex overflow-hidden cursor-pointer hover:bg-lightBlue rounded-md items-center pr-3">
        <div className="flex  w-full items-center gap-5 ">
          {image ? (
            <img className="rounded-md w-14" src={image} alt="spotify" />
          ) : (
            <div className="grid place-items-center bg-[#343432] rounded-md p-2">
              <MusicNoteIcon className="text-neutral-300" />
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
