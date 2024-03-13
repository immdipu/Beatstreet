import React from "react";
import DownloadAllButton from "../DownloadAllButton";
import SongsList from "../SongsList";
import { useInfiniteQuery } from "@tanstack/react-query";
import musicApi from "../../Api/Api";

import ClipLoader from "react-spinners/ClipLoader";

const ArtistSongs = ({ id }) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["ArtistSongs", id],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => musicApi.ArtistSongs({ id, pageParam }),
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });

  if (isLoading)
    return <ClipLoader size={30} color="#2764eb" speedMultiplier={3} />;

  if (isError)
    return (
      <div>
        <h3 className="text-white text-lg ml-5 mb-3 max-md:font-semibold max-md:text-xl  ">
          Songs
        </h3>
        <p className="text-white text-lg ml-5 mb-3 max-md:font-semibold max-md:text-xl  ">
          No Songs Found
        </p>
      </div>
    );

  return (
    <div>
      <div className="flex justify-between pr-5 items-center">
        <h3 className="text-white text-lg ml-5 mb-3 max-md:font-semibold max-md:text-xl  ">
          Songs
        </h3>
        <DownloadAllButton />
      </div>
      <div>
        {data?.pages && data.pages.length > 0 && (
          <SongsList songs={data.pages.flat()} current={"Artist"} />
        )}
      </div>
      <section>
        {isFetchingNextPage ? (
          <div className="px-6 py-3">
            <ClipLoader size={30} color="#2764eb" speedMultiplier={3} />
          </div>
        ) : (
          <button
            onClick={() => fetchNextPage()}
            className="text-neutral-400 my-4 cursor-pointer hover:text-neutral-200 transition-colors duration-150 ease-linear px-3 py-1"
          >
            Show more
          </button>
        )}
      </section>
    </div>
  );
};

export default ArtistSongs;
