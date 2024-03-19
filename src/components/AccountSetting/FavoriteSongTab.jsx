import React from "react";
import { SongsList, LoadingSpinner } from "../";
import { useSelector } from "react-redux";
import userApis from "../../Api/userApi";
import { useQuery } from "@tanstack/react-query";

const FavoritesSongsTab = () => {
  const user = useSelector((state) => state.user);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["favoriteSongs"],
    queryFn: () => userApis.getFavoritesSongs(),
  });

  if (isLoading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  return (
    <div>
      <section className="  max-md:px-2 overflow-auto mt-10 pr-5">
        <h3 className="text-neutral-50  text-2xl max-md:text-xl  mb-5">
          Favorites songs
        </h3>
        {user.islogged && data && data.length > 0 && (
          <SongsList songs={data} current={"FavoritesSongs"} />
        )}
        {user.islogged && data && data.length === 0 && (
          <div className="w-full flex justify-center items-center mt-10">
            <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
              You have no favorite songs yet.
              <br />
              <br />
              Start adding songs to your favorites by clicking the heart icon
              next to the song.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default FavoritesSongsTab;
