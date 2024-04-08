import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SongsList } from "../components";

import InfiniteScroll from "react-infinite-scroll-component";
import { Logo, LogoText } from "../components";
import ClipLoader from "react-spinners/ClipLoader";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import RippleButton from "ripple-effect-reactjs";
import { useUserContext } from "../Context/UserContext";

const ViewAllSongList = () => {
  let { keyword } = useParams();

  const { login_success } = useUserContext();
  useEffect(() => {
    SearchSongs(keyword);
  }, [keyword]);

  const HandleDownloadAll = () => {
    const btns = document.querySelectorAll(".btnss");
    btns.forEach((btn) => {
      btn.click();
    });
  };

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
        // dataLength={search_songs.length}
        // next={() => HandleNextPageBtn(keyword)}
        hasMore={has_more}
        loader={
          <h4 className="text-white text-center mb-3 ">
            <ClipLoader size={30} color="#2764eb" speedMultiplier={3} />
          </h4>
        }
        endMessage={<p className="text-white text-center">End</p>}
        className=" px-14 max-md:px-2"
      >
        <div className="text-neutral-200 mb-2 text-center flex justify-center ">
          {login_success && (
            <div
              className="bg-neutral-500 rounded-md pt-2 hover:bg-opacity-20 duration-300 transition-all ease-linear cursor-pointer bg-opacity-60 w-fit px-3"
              onClick={HandleDownloadAll}
              title="Download all"
            >
              <RippleButton radius={10} color={"#5454548c"}>
                Download All
                <CloudDownloadIcon
                  sx={{ fontSize: 28, paddingLeft: 1, paddingBottom: 1 }}
                  className="text-neutral-300 cursor-pointer"
                />
              </RippleButton>
            </div>
          )}
        </div>
        {search_songs && (
          <SongsList songs={search_songs} current={"ViewAllSong"} />
        )}
      </InfiniteScroll>
    </div>
  );
};

export default ViewAllSongList;
