import React from "react";
import { SpotifyIcon } from "../components";
import { Link } from "react-router-dom";

const ImportPlaylist = () => {
  return (
    <div className="mt-6 px-6 overflow-auto">
      <Link
        to={"/spotifylogin"}
        className="flex items-center gap-5 py-4 hover:bg-lightBlue rounded-md px-4 text-neutral-300"
      >
        <SpotifyIcon width={4} /> Import from Spotify
      </Link>
    </div>
  );
};

export default ImportPlaylist;
