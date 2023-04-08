import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlayerContext } from "../Context/PlayerContext";
import { useUserContext } from "../Context/UserContext";
import { LoadingSpinner } from "../components";

const UserSinglePlaylist = () => {
  let { id } = useParams();
  const {
    getSinglePlaylist,
    user_single_playlist_loading: loading,
    user_single_playlist,
  } = usePlayerContext();
  const { User_id, login_success } = useUserContext();
  useEffect(() => {
    let data = {
      playlistId: id,
    };
    if (login_success) {
      getSinglePlaylist(User_id, data);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  return <div>UserSinglePlaylist</div>;
};

export default UserSinglePlaylist;
