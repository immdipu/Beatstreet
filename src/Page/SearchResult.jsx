import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  LoadingSpinner,
  SongsList,
  TopResults,
  SearchAlbum,
  SingleChart,
} from "../components";
import ListItemButton from "@mui/material/ListItemButton";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import musicApi from "../Api/Api";
import toast from "react-hot-toast";
const SearchResult = () => {
  const { SearchTerm } = useSelector((state) => state.player);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [search_results, setSearchResults] = useState(null);

  const searchGlobal = useMutation({
    mutationFn: (searchterm) => musicApi.GlobalSearch(searchterm),
    onSuccess: (data) => {
      setSearchResults(data?.data);
    },
    onError: (error) => {
      toast.error(error.message || "Something Went Wrong");
    },
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(SearchTerm);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [SearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchGlobal.mutate(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  if (searchGlobal.isPending) {
    return (
      <div className={"bg-darkBlue pl-10 max-md:pl-4 pr-4 overflow-hidden "}>
        <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
          <LoadingSpinner size={80} />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeInOut" } }}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
      className={"bg-darkBlue pl-10 max-md:pl-1 pr-4 overflow-hidden "}
    >
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
            <section className=" max-md:ml-3">
              <h3 className="text-white text-lg ml-2 max-md:font-semibold max-md:text-xl  ">
                Top Results
              </h3>
              <TopResults data={search_results?.topQuery?.results} />
            </section>

            <section className=" mt-9">
              <h3 className="text-white tracking-wide text-lg mb-4 ml-5 max-md:font-semibold max-md:text-xl">
                Songs
              </h3>
              {search_results?.songs &&
                search_results?.songs?.results.length > 0 && (
                  <SongsList songs={search_results.songs.results} />
                )}

              <ListItemButton
                sx={[
                  {
                    width: 115,
                    padding: 0,
                    marginTop: 2,
                    borderRadius: 3,
                    marginLeft: 1,
                  },
                  (theme) => ({
                    "&:hover": {
                      backgroundColor: "#1f242a",
                    },
                  }),
                ]}
              >
                {/* <Link
                  to={`songs/${inputValue}`}
                  className="text-white rounded-md flex w-full py-2 items-center gap-2 justify-center"
                >
                  <p className="tracking-wide">View All</p>
                  <ArrowForwardIosIcon
                    sx={{ fontSize: "16px" }}
                    className="mb-[2px]"
                  />
                </Link> */}
              </ListItemButton>
            </section>

            {search_results.albums.results.length > 0 && (
              <section className="mt-12 max-md:ml-4">
                <h3 className="text-white text-lg mb-5 max-md:font-semibold max-md:text-xl">
                  Albums
                </h3>
                <div className="flex gap-8 overflow-scroll h-full">
                  {search_results.albums.results.map((item, index) => {
                    return <SearchAlbum {...item} key={index} />;
                  })}
                  {/* <Link
                    to={`albums/`}
                    className="text-white flex items-center gap-2 self-center mb-11 justify-center ml-6 rounded-md px-2 group h-fit"
                  >
                    <p className="group-hover:opacity-80">View All</p>
                    <div className="bg-slate-500 group-hover:scale-110 transition-all ease-linear duration-200 bg-opacity-10 px-3 py-2 rounded-full">
                      <ArrowForwardIosIcon
                        sx={{ fontSize: "16px" }}
                        className="mb-[2px] "
                      />
                    </div>
                  </Link> */}
                </div>
              </section>
            )}
            {search_results.playlists.results.length > 0 && (
              <section className="mt-10 mb-10 max-md:ml-4">
                <h3 className="text-white text-lg mb-6 ml-1 max-md:font-semibold max-md:text-xl">
                  Playlist
                </h3>

                <div className="flex gap-8 max-md:gap-3 overflow-scroll h-full">
                  {search_results.playlists.results.map((item, index) => {
                    return <SingleChart {...item} key={index} />;
                  })}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SearchResult;
