import React, { useState } from "react";
import { SearchBar, LoadingSpinner, SongsList } from "../components";
import { usePlayerContext } from "../Context/PlayerContext";

const SearchResult = () => {
  const {
    side_menu_show,
    search_loading,
    search_results,
    HandlePreviousPageBtn,
    HandleNextPageBtn,
  } = usePlayerContext();

  if (search_loading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
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
      <div>{search_results && <SongsList songs={search_results} />}</div>
      {search_results.length > 0 && (
        <div className="flex justify-evenly mt-4 pb-12">
          <p
            className="bg-lightBlue w-fit cursor-pointer shadow-md rounded-md px-4 py-1 text-lg text-darkTextColor"
            onClick={HandlePreviousPageBtn}
          >
            Previous
          </p>
          <p
            className="bg-lightBlue cursor-pointer w-fit shadow-md rounded-md px-4 py-1 text-lg text-darkTextColor"
            onClick={HandleNextPageBtn}
          >
            Next
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
