import React from "react";
import { SingleSpotifylist } from "../components";
import ClipLoader from "react-spinners/ClipLoader";
import musicApi from "../Api/Api";
import { useQuery } from "@tanstack/react-query";

const SpotifyPlaylist = () => {
  const url = window.location.hash;
  const token = url.substring(1).split("&")[0].split("=")[1] || null;

  const { data, isLoading, isError } = useQuery({
    queryKey: [token, "getSpotifyPlaylists"],
    queryFn: () => musicApi.getSpotifyPlaylists(token),
  });

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
