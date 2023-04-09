import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlayerContext } from "../Context/PlayerContext";
import { useUserContext } from "../Context/UserContext";
import { LoadingSpinner, SongsList } from "../components";
import { Logo, LogoText } from "../components";

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

  return (
    <div>
      <section className=" flex justify-center items-center py-20  rounded-b-2xl mb-8 relative h-40">
        <div className=" absolute inset-0 flex justify-end viewall rounded-b-2xl">
          <Logo />
        </div>
        <div className="ml-3 max-lg:ml-11 ">
          <LogoText />
        </div>
      </section>
      <section className=" px-14 max-md:px-2 overflow-auto pb-8">
        <h3 className="text-neutral-50  text-2xl max-md:text-xl px-4 mb-5">
          {user_single_playlist.name} -
          <span className="text-base">{user_single_playlist.songs.length}</span>
        </h3>
        <SongsList
          songs={user_single_playlist.songs}
          current={"Userplaylist"}
        />
      </section>
    </div>
  );
};

export default UserSinglePlaylist;
