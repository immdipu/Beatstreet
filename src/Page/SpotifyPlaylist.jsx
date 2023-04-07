import React, { useEffect } from "react";
import { usePlaylistContext } from "../Context/ImportPlaylistContext";
import { SingleSpotifylist } from "../components";
import ClipLoader from "react-spinners/ClipLoader";
import { LoginAlert } from "../components";
import { useUserContext } from "../Context/UserContext";

const SpotifyPlaylist = () => {
  const {
    getSpotifyPlaylists,
    all_Playlists,
    add_songs_loading,
    new_playlist,
    all_playlists_loading: loading,
  } = usePlaylistContext();
  const { playlistSendSuccess, playlistSendFailed } = useUserContext();
  useEffect(() => {
    const url = window.location.hash;
    if (url) {
      let token = url.substring(1).split("&")[0].split("=")[1];
      getSpotifyPlaylists(token);
    }
  }, []);

  if (loading) {
    return (
      <h4 className="text-white text-center mb-3 absolute bg-black inset-0 bg-opacity-30 flex items-center justify-center">
        <ClipLoader size={60} color="#2764eb" speedMultiplier={2} />
      </h4>
    );
  }

  let loader = null;
  let alert = null;
  if (playlistSendSuccess) {
    alert = (
      <div className="fixed top-32 w-full left-1/2 max-md:left-0">
        <LoginAlert
          message={new_playlist.songsIds.length + "has been added"}
          alertClass={"success"}
        />
      </div>
    );
  }

  if (playlistSendFailed) {
    alert = (
      <div className="fixed top-32 w-full left-1/2 max-md:left-0">
        <LoginAlert message={"Something Went Wrong"} alertClass={"failed"} />
      </div>
    );
  }

  if (add_songs_loading) {
    loader = (
      <h4 className="text-white text-center mb-3 fixed  bottom-0 bg-black inset-0 bg-opacity-30 flex items-center justify-center">
        <ClipLoader size={60} color="#2764eb" speedMultiplier={2} />
      </h4>
    );
  }

  return (
    <div className="flex flex-col px-10 mt-5 gap-5 mb-10">
      {loader}
      {alert}
      <h3 className="text-neutral-200 font-medium tracking-wide text-lg">
        Your Spotify Playlist
      </h3>
      {all_Playlists.map((item, index) => {
        if (item.tracks.total > 0) {
          return (
            <SingleSpotifylist
              key={index}
              image={item.images}
              name={item.name}
              songs={item.tracks.total}
              id={item.id}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default SpotifyPlaylist;
