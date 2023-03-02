import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { usePlayerContext } from "../Context/PlayerContext";
import InfiniteScroll from "react-infinite-scroll-component";

const ViewAllAlbums = () => {
  let { keyword } = useParams();
  const {
    SearchAlbums,
    HandleNextPageBtn_Albums,
    has_more_albums,
    search_albums,
  } = usePlayerContext();

  useEffect(() => {
    SearchAlbums(keyword);
  }, [keyword]);

  return (
    <div>
      <InfiniteScroll
        dataLength={search_albums.length}
        next={() => HandleNextPageBtn_Albums(keyword)}
        hasMore={has_more_albums}
        loader={<h4 className="text-white text-center mb-3">Loading...</h4>}
        endMessage={<p className="text-white text-center">End</p>}
        className="flex flex-col gap-3 px-20"
      >
        {search_albums.map((item, index) => {
          return (
            <Link
              to={`/album/${item.id}`}
              key={index}
              className="flex gap-5 bg-slate-800 items-center"
            >
              <img
                src={item.image[1].link}
                className="w-14 rounded-lg object-cover"
                alt={item.name}
              />
              <div>
                <h3
                  className="text-slate-200"
                  dangerouslySetInnerHTML={{
                    __html: `${item.name}`,
                  }}
                />

                <div className="flex w-48 gap-2 overflow-hidden text-ellipsis">
                  {item.primaryArtists &&
                    item.primaryArtists.map((it, index) => {
                      return (
                        <p
                          key={index}
                          className="text-xs opacity-90 mt-[2px] whitespace-nowrap text-darkTextColor tracking-wide"
                        >
                          {it.name}
                        </p>
                      );
                    })}
                </div>
              </div>
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default ViewAllAlbums;
