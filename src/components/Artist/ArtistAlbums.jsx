import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import musicApi from "../../Api/Api";
import MusicCard from "../MusicCard";
import ClipLoader from "react-spinners/ClipLoader";

const ArtistAlbums = ({ id }) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["ArtistAlbums", id],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => musicApi.ArtistAlbum({ id, pageParam }),
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return (
      <div>
        <h3 className="text-white text-lg ml-2 mb-4 max-md:font-semibold max-md:text-xl  ">
          Albums
        </h3>
        <p className="text-white text-lg ml-2 mb-4 max-md:font-semibold max-md:text-xl  ">
          No Albums Found
        </p>
      </div>
    );

  return (
    <div className="w-[95%] overflow-hidden pb-5 pl-10">
      <h3 className="text-white text-lg ml-2 mb-4 max-md:font-semibold max-md:text-xl  ">
        Albums
      </h3>
      <div className="flex gap-6 overflow-scroll h-full">
        {data?.pages &&
          data.pages.length > 0 &&
          data?.pages?.flat().map((item, index) => {
            return <MusicCard key={index} {...item} />;
          })}
        <section className="border mb-8 grid place-content-center rounded-md active:scale-75 duration-300 bg-neutral-800 border-neutral-500">
          {isFetchingNextPage ? (
            <div className="px-6 py-3">
              <ClipLoader size={30} color="#2764eb" speedMultiplier={3} />
            </div>
          ) : (
            <button
              onClick={() => fetchNextPage()}
              className="text-neutral-400 text-sm cursor-pointer hover:text-neutral-200 transition-colors duration-150 ease-linear  px-6  py-1"
            >
              Click to Load More
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default ArtistAlbums;
