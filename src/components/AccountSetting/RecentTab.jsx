import React from "react";
import { SongsList, LoadingSpinner } from "../";
import { useSelector } from "react-redux";
import userApis from "../../Api/userApi";
import { useQuery } from "@tanstack/react-query";

const RecentSongsTab = () => {
  const user = useSelector((state) => state.user);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recentSongs"],
    queryFn: () => userApis.getRecentSongs(),
  });

  if (isLoading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex justify-center items-center mt-10">
        <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
          Sorry, we couldn't fetch your recent songs at this time.
          <br />
          <br />
          Access to recent songs is only available to logged-in users. Please
          log in to view your recent songs or try again later.
        </p>
      </div>
    );
  }

  return (
    <div>
      <section className="  mt-5 max-md:px-2 overflow-auto pr-5 pb-10">
        <h3 className="text-neutral-50  text-2xl max-md:text-xl  mb-5">
          Recent songs
        </h3>
        {user.islogged && data && data.length > 0 && (
          <SongsList songs={data} current={"RecentSongs"} />
        )}

        {user.islogged && data && data.length === 0 && (
          <div className="w-full flex justify-center items-center mt-10">
            <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
              You haven't played any songs yet.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default RecentSongsTab;
