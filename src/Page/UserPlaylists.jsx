import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { SinglePlaylistCard, LoadingSpinner } from "../components";
import { usePlayerContext } from "../Context/PlayerContext";
import { useUserContext } from "../Context/UserContext";

const UserPlaylists = () => {
  const { User_id, login_success } = useUserContext();
  const {
    getAllPlaylist,
    all_playlists_loading: loading,
    all_playlists,
  } = usePlayerContext();

  useEffect(() => {
    if (login_success) {
      getAllPlaylist(User_id);
    }
  }, []);

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
      <section>
        {loading ? (
          <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
            <LoadingSpinner size={80} />
          </div>
        ) : (
          <>
            {all_playlists.length !== 0
              ? all_playlists.map((item) => <SinglePlaylistCard {...item} />)
              : null}
          </>
        )}
      </section>
    </div>
  );
};

export default UserPlaylists;
