import React, { useState } from "react";
import { SearchBar, LoadingSpinner, SongsList } from "../components";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePlayerContext } from "../Context/PlayerContext";

const SearchResult = () => {
  const {
    side_menu_show,
    search_loading,
    search_results,
    HandleNextPageBtn,
    has_more,
  } = usePlayerContext();

  if (search_loading) {
    return (
      <div
        className={
          "bg-darkBlue pl-10 max-md:pl-4 pr-4 overflow-hidden " +
          (side_menu_show
            ? "mr-96 transition-all duration-300 ease-in"
            : "mr-0")
        }
      >
        <div className="w-3/5 max-md:pl-3 max-md:w-4/5 pt-9">
          <SearchBar />
        </div>
        <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
          <LoadingSpinner size={80} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        "bg-darkBlue pl-10 max-md:pl-4 pr-4 overflow-hidden " +
        (side_menu_show ? "mr-96 transition-all duration-300 ease-in" : "mr-0")
      }
    >
      <div className="w-3/5 max-md:pl-3 max-md:w-4/5 pt-9">
        <SearchBar />
      </div>
      {search_results.length === 0 && (
        <div>
          <p className="mt-20 text-center mx-auto w-fit text-darkTextColor">
            Type to start searching...
          </p>
        </div>
      )}
      <div>
        {search_results.length > 0 && (
          <InfiniteScroll
            dataLength={search_results.length}
            next={HandleNextPageBtn}
            hasMore={has_more}
            loader={<h4 className="text-white text-center mb-3">Loading...</h4>}
            endMessage={<p className="text-white text-center">End</p>}
          >
            {search_results && <SongsList songs={search_results} />}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
