import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SongsList } from "../components";
import { usePlayerContext } from "../Context/PlayerContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { Logo, LogoText } from "../components";
import ClipLoader from "react-spinners/ClipLoader";

const ViewAllSongList = () => {
  let { keyword } = useParams();
  const { SearchSongs, search_songs, HandleNextPageBtn, has_more } =
    usePlayerContext();
  useEffect(() => {
    SearchSongs(keyword);
  }, [keyword]);

  return (
    <div>
      <section className=" flex justify-center items-center py-20  rounded-b-2xl mb-16 relative h-80">
        <div className=" absolute inset-0 flex justify-end viewall rounded-b-2xl">
          <Logo />
        </div>
        <div className="ml-3 max-lg:ml-11 ">
          <LogoText />
        </div>
      </section>
      <InfiniteScroll
        dataLength={search_songs.length}
        next={() => HandleNextPageBtn(keyword)}
        hasMore={has_more}
        loader={
          <h4 className="text-white text-center mb-3 ">
            <ClipLoader size={30} color="#2764eb" speedMultiplier={3} />
          </h4>
        }
        endMessage={<p className="text-white text-center">End</p>}
        className=" px-14 max-md:px-2"
      >
        {search_songs && <SongsList songs={search_songs} />}
      </InfiniteScroll>
    </div>
  );
};

export default ViewAllSongList;
