import React from "react";
import { SinglePlaylistCard, LoadingSpinner } from "../";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import userApis from "../../Api/userApi";

const PlaylistTab = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllPlaylist"],
    queryFn: () => userApis.getAllPlaylist(),
  });

  return (
    <div className="overflow-auto  max-md:pl-2 mt-8 pr-5 ">
      <section className="mt-4  flex flex-col mb-12">
        <h3 className="text-xl text-neutral-200 mb-2 mt-4">Your Playlists</h3>
        {isLoading && (
          <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
            <LoadingSpinner size={30} />
          </div>
        )}

        {isError && (
          <div className="w-full flex justify-center items-center mt-10">
            <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
              Sorry, we couldn't fetch your playlist at this time.
              <br />
              <br />
              Please try again later.
            </p>
          </div>
        )}

        {data && data.length === 0 && (
          <div className="w-full flex justify-center items-center mt-10">
            <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
              You haven't created any playlist yet.
            </p>
          </div>
        )}

        <>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <SinglePlaylistCard key={index} {...item} />
            ))}
        </>
      </section>
    </div>
  );
};

export default PlaylistTab;
