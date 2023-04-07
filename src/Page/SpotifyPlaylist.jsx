import React, { useEffect } from "react";
import { usePlaylistContext } from "../Context/ImportPlaylistContext";
import { SingleSpotifylist } from "../components";

const SpotifyPlaylist = () => {
  const {
    getSpotifyPlaylists,
    all_Playlists,
    all_playlists_loading: loading,
  } = usePlaylistContext();
  useEffect(() => {
    const url = window.location.hash;
    if (url) {
      let token = url.substring(1).split("&")[0].split("=")[1];
      getSpotifyPlaylists(token);
    }
  }, []);

  if (loading) {
    return (
      <div className="text-neutral-100 w-full text-center mt-16">Loading</div>
    );
  }

  return (
    <div className="flex flex-col px-10 mt-5 gap-5 mb-10">
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
