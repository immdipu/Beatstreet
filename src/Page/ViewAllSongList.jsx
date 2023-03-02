import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SongsList } from "../components";
import { usePlayerContext } from "../Context/PlayerContext";
import InfiniteScroll from "react-infinite-scroll-component";

const ViewAllSongList = () => {
  let { keyword } = useParams();
  const { SearchSongs, search_songs, HandleNextPageBtn, has_more } =
    usePlayerContext();
  useEffect(() => {
    SearchSongs(keyword);
  }, [keyword]);

  return (
    <div>
      <InfiniteScroll
        dataLength={search_songs.length}
        next={() => HandleNextPageBtn(keyword)}
        hasMore={has_more}
        loader={<h4 className="text-white text-center mb-3">Loading...</h4>}
        endMessage={<p className="text-white text-center">End</p>}
      >
        {search_songs && <SongsList songs={search_songs} />}
      </InfiniteScroll>
    </div>
  );
};

export default ViewAllSongList;
