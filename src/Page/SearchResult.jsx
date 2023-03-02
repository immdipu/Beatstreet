import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  SearchBar,
  LoadingSpinner,
  SongsList,
  TopResults,
  SearchAlbum,
  SingleChart,
} from "../components";

import { usePlayerContext } from "../Context/PlayerContext";

const SearchResult = () => {
  const {
    side_menu_show,
    search_loading,
    search_results,
    inputRef,
    inputValue,
  } = usePlayerContext();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
      {!search_results && (
        <div>
          <p className="mt-20 text-center mx-auto w-fit text-darkTextColor">
            Type to start searching...
          </p>
        </div>
      )}
      <div>
        {search_results && (
          <div className="mt-12">
            <section>
              <h3 className="text-white text-lg">Top Results</h3>
              <TopResults />
            </section>
            <section className="my-4">
              <h3 className="text-white text-lg">Songs</h3>
              <SongsList songs={search_results.songs.results} />
              <Link
                to={`songs/${inputValue}`}
                className="text-white flex items-center gap-2 justify-center"
              >
                <p>View All</p>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "16px" }}
                  className="mb-[2px]"
                />
              </Link>
            </section>
            <section>
              <h3 className="text-white text-lg">Albums</h3>
              <div className="flex gap-6 overflow-scroll h-full">
                {search_results.albums.results.map((item, index) => {
                  return <SearchAlbum {...item} key={index} />;
                })}
                <Link
                  to={`albums/${inputValue}`}
                  className="text-white flex items-center gap-2  self-center mb-11 justify-center ml-8 rounded-md px-2 group h-fit"
                >
                  <p className="group-hover:opacity-80">View All</p>
                  <div className="bg-slate-500 group-hover:scale-110 transition-all ease-linear duration-200 bg-opacity-10 px-3 py-2 rounded-full">
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "16px" }}
                      className="mb-[2px] "
                    />
                  </div>
                </Link>
              </div>
            </section>
            <section>
              <h3 className="text-white text-lg">Playlist</h3>
              <div className="flex gap-8 overflow-scroll h-full">
                {search_results.playlists.results.map((item, index) => {
                  return <SingleChart {...item} key={index} />;
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
