import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";
import ListItemButton from "@mui/material/ListItemButton";
import { Logo, LogoText } from "../components";
import ClipLoader from "react-spinners/ClipLoader";

const ViewAllAlbums = () => {
  let { keyword } = useParams();

  useEffect(() => {
    SearchAlbums(keyword);
  }, [keyword]);

  return (
    <div>
      <section className=" flex justify-center items-center py-20  rounded-b-2xl mb-16 relative h-80">
        <div className=" absolute inset-0 flex justify-end viewall rounded-b-2xl">
          <Logo />
        </div>
        <div className="ml-3 max-lg:ml-11">
          <LogoText />
        </div>
      </section>
      <InfiniteScroll
        dataLength={search_albums.length}
        next={() => HandleNextPageBtn_Albums(keyword)}
        hasMore={has_more_albums}
        loader={
          <h4 className="text-white text-center mb-3">
            <ClipLoader size={30} color="#2764eb" speedMultiplier={3} />
          </h4>
        }
        endMessage={<p className="text-white text-center">End</p>}
        className="flex flex-col gap-2 px-20 max-md:px-2"
      >
        {search_albums.map((item, index) => {
          return (
            <ListItemButton
              key={index}
              sx={[
                {
                  display: "block",
                  borderRadius: 2,
                  overflow: "hidden",
                },
                (theme) => ({
                  "&:hover": {
                    backgroundColor: "#1d242ca3",
                  },
                }),
              ]}
            >
              <Link
                to={`/album/${item.id}`}
                className="flex gap-5 items-center"
              >
                <img
                  src={item.image[1].link}
                  className="w-14 rounded-lg object-cover"
                  alt={item.name}
                />
                <div className="overflow-hidden">
                  <h3
                    className="text-slate-200 text-sm whitespace-nowrap text-ellipsis overflow-hidden w-[90%]"
                    dangerouslySetInnerHTML={{
                      __html: `${item.name}`,
                    }}
                  />

                  <div className="flex w-48 max-md:max-w-[70%] gap-2 overflow-hidden ">
                    {item.primaryArtists &&
                      item.primaryArtists.map((it, index) => {
                        return (
                          <p
                            key={index}
                            className="text-xs opacity-90 mt-[2px] text-ellipsis whitespace-nowrap text-darkTextColor tracking-wide"
                          >
                            {it.name}
                          </p>
                        );
                      })}
                  </div>
                </div>
              </Link>
            </ListItemButton>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default ViewAllAlbums;
