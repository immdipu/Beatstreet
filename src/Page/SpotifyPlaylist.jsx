import React, { useEffect } from "react";
import { usePlaylistContext } from "../Context/ImportPlaylistContext";
import { SingleSpotifylist } from "../components";
import ClipLoader from "react-spinners/ClipLoader";
import { LoginAlert } from "../components";
import { useUserContext } from "../Context/UserContext";
import musicApi from "../Api/Api";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

const SpotifyPlaylist = () => {
  const url = window.location.hash;
  const token = url.substring(1).split("&")[0].split("=")[1] || null;

  const { data, isLoading, isError } = useQuery({
    queryKey: [token, "getSpotifyPlaylists"],
    queryFn: () => musicApi.getSpotifyPlaylists(token),
  });

  const {
    getSpotifyPlaylists,
    all_Playlists,
    add_songs_loading,
    new_playlist,
    all_playlists_loading: loading,
  } = usePlaylistContext();
  const { playlistSendSuccess, playlistSendFailed } = useUserContext();

  if (playlistSendSuccess && new_playlist.length !== 0) {
    alert = (
      <div className="fixed top-32 w-full left-1/2 max-md:left-0">
        <LoginAlert
          message={new_playlist.songsIds.length + " songs has been added"}
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

  console.log("all_Playlists", data);

  return (
    <div className="flex flex-col px-10 mt-5 gap-5 mb-10">
      <h3 className="text-neutral-200 font-medium tracking-wide text-lg">
        Your Spotify Playlist
      </h3>
      {isLoading && (
        <div>
          <ClipLoader size={60} color="#2764eb" speedMultiplier={2} />
        </div>
      )}
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          if (item.tracks.total > 0) {
            return (
              <SingleSpotifylist
                key={index}
                image={item.images}
                name={item.name}
                songs={item.tracks.total}
                id={item.id}
                token={token}
              />
            );
          }
        })}
      {data && data.length === 0 && (
        <p className="text-neutral-300 text-center">
          You don't have any playlist
        </p>
      )}
    </div>
  );
};

export default SpotifyPlaylist;
