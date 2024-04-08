import React, { useEffect } from "react";
import { SongsList, LoadingSpinner } from "../components";
import { Logo, LogoText } from "../components";
import { useUserContext } from "../Context/UserContext";

import { useSelector } from "react-redux";
import userApis from "../Api/userApi";
import { useQuery } from "@tanstack/react-query";

const RecentSongs = () => {
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
      <section className=" flex justify-center items-center py-20  rounded-b-2xl mb-16 relative h-48">
        <div className=" absolute inset-0 flex justify-end viewall rounded-b-2xl">
          <Logo />
        </div>
        <div className="ml-3 max-lg:ml-11 ">
          <LogoText />
        </div>
      </section>

      <section className=" px-14 max-md:px-2 overflow-auto">
        <h3 className="text-neutral-50  text-2xl max-md:text-xl px-4 mb-5">
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

        {!user.islogged && (
          <div className="w-full flex justify-center items-center mt-10">
            <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
              Sorry, we couldn't fetch your recent songs at this time.
              <br />
              <br />
              Access to recent songs is only available to logged-in users.
              Please log in to view your recent songs or try again later.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default RecentSongs;
