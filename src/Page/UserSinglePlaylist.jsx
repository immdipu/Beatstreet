import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlayerContext } from "../Context/PlayerContext";
import { useUserContext } from "../Context/UserContext";
import { LoadingSpinner, SongsList } from "../components";
import { Logo, LogoText } from "../components";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import RippleButton from "ripple-effect-reactjs";

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

  const HandleDownloadAll = () => {
    const btns = document.querySelectorAll(".btnss");
    btns.forEach((btn) => {
      btn.click();
    });
  };

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
        <section className="flex justify-between items-center pr-6">
          <h3 className="text-neutral-50  text-2xl flex items-center max-md:text-xl px-4 mb-5">
            {user_single_playlist.name} -{" "}
            <span className="text-sm text-neutral-300">
              {user_single_playlist.songs.length} songs
            </span>
          </h3>
          <div
            className="w-[38px] max-md:mt-4"
            title="Download all"
            onClick={HandleDownloadAll}
          >
            <RippleButton height={36} radius={50} color={"#5454548c"}>
              <CloudDownloadIcon
                sx={{ fontSize: 35 }}
                className="text-neutral-300 cursor-pointer"
              />
            </RippleButton>
          </div>
        </section>

        <SongsList
          songs={user_single_playlist.songs}
          current={"Userplaylist"}
        />
      </section>
    </div>
  );
};

export default UserSinglePlaylist;
