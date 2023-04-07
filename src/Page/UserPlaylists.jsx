import React from "react";
import { Link } from "react-router-dom";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const UserPlaylists = () => {
  return (
    <div className="overflow-auto pl-7 mt-8 ">
      <div>
        <Link
          to={"/importplaylists"}
          className="flex items-center text-xl hover:bg-lightBlue hover:bg-opacity-60 transition-all duration-300 rounded-md py-4 px-5 gap-3 text-neutral-300 f"
        >
          <LibraryMusicIcon /> Import Playlist
        </Link>
      </div>
    </div>
  );
};

export default UserPlaylists;
