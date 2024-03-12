import React, { useEffect, useState } from "react";
import { LoadingSpinner, SongsList, MusicCard } from "../components";
import { useParams } from "react-router-dom";
import { useMusicContext } from "../Context/MusicContext";
import { ImageFetch, FollowersCount } from "../Utils/Helper";
import VerifiedIcon from "@mui/icons-material/Verified";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import RippleButton from "ripple-effect-reactjs";
import ClipLoader from "react-spinners/ClipLoader";

const Artist = () => {
  const { id } = useParams();
  const [currentpage, setCurrentPage] = useState(1);
  const {
    SingleArtist,
    single_artist_details: artist,
    single_artist_loading: loading,
    ArtistSongs,
    single_artist_songs,
    ArtistAlbums,
    single_artist_albums,
    ArtistSongsLoadMore,
    loadMoreSong,
  } = useMusicContext();
  useEffect(() => {
    SingleArtist(id);
    // ArtistSongs(id);
    // ArtistAlbums(id);
  }, [id]);

  if (loading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  const HandleDownloadAll = () => {
    const btns = document.querySelectorAll(".btnss");
    btns.forEach((btn) => {
      btn.click();
    });
  };

  const handleLoadMoreSong = () => {
    setCurrentPage(currentpage + 1);
    ArtistSongsLoadMore(id, currentpage);
  };

  return (
    <div className="overflow-hidden">
      <section>
        <div className="w-full flex gap-6 px-16 pt-7  max-md:flex-col relative overflow-hidden Artistbackground">
          <img
            src={ImageFetch(artist)}
            className="rounded-xl absolute inset-0 -z-20 w-full blur-md h-full object-cover"
            alt=""
          />
          <img
            src={ImageFetch(artist)}
            className="rounded-xl h-72 object-cover"
            alt=""
          />

          <div className="self-end flex flex-col gap-2 mb-9 max-md:items-center">
            <h2 className="text-white font-medium text-3xl my-2 flex items-center">
              {artist?.name}
              {artist?.isVerified && (
                <VerifiedIcon color="primary" className="ml-1" />
              )}
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-slate-300 text-xs capitalize">
                {artist?.dominantType}
              </p>
              <span className="block bg-slate-400 w-1 h-1 rounded-full"></span>

              <p className="text-slate-300 text-xs">
                {FollowersCount(artist?.followerCount)} followers
              </p>
            </div>
            {artist?.availableLanguages && (
              <div className="text-slate-200 text-xs flex flex-wrap max-md:justify-center">
                Languages:
                {artist?.availableLanguages.map((item, index) => {
                  return (
                    <span
                      className="px-1 text-slate-300 text-xs capitalize"
                      key={index}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            )}
            <div className="flex gap-4 mt-3 ">
              {artist?.fb && (
                <a href={artist.fb} target="_blank">
                  <FacebookIcon
                    sx={{ color: "white" }}
                    className="opacity-70 hover:opacity-95 transition-all duration-700 ease-in-out"
                  />
                </a>
              )}
              {artist?.twitter && (
                <a href={artist?.twitter} target="_blank">
                  <TwitterIcon
                    sx={{ color: "white" }}
                    className="opacity-70 hover:opacity-95 transition-all duration-700 ease-in-out"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
        <section className="mt-12 mx-12 max-md:mx-2">
          {single_artist_songs && (
            <div className="flex justify-between pr-5 items-center">
              <h3 className="text-white text-lg ml-5 mb-3 max-md:font-semibold max-md:text-xl  ">
                Songs
              </h3>
              <div
                className="w-[38px] max-md:mt-4"
                title="Download all"
                onClick={HandleDownloadAll}
              >
                <RippleButton height={36} radius={50} color={"#5454548c"}>
                  <CloudDownloadIcon
                    sx={{ fontSize: 35 }}
                    className="text-neutral-300 cursor-pointer"
                  />
                </RippleButton>
              </div>
            </div>
          )}

          {artist?.topSongs && (
            <SongsList songs={artist?.topSongs} current={"Artist"} />
          )}
          <section>
            {loadMoreSong ? (
              <div className="px-6 py-3">
                <ClipLoader size={30} color="#2764eb" speedMultiplier={3} />
              </div>
            ) : (
              <button
                onClick={handleLoadMoreSong}
                className="text-neutral-400 my-4 cursor-pointer hover:text-neutral-200 transition-colors duration-150 ease-linear px-3 py-1"
              >
                Show more
              </button>
            )}
          </section>
        </section>

        <section className="mt-12 mx-14 mb-14 max-md:mx-4">
          {artist?.topAlbums && (
            <h3 className="text-white text-lg ml-2 mb-4 max-md:font-semibold max-md:text-xl  ">
              Albums
            </h3>
          )}
          {artist?.topAlbums && (
            <div className="flex gap-6 overflow-scroll h-full">
              {artist?.topAlbums.map((item, index) => {
                return <MusicCard key={index} {...item} />;
              })}
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default Artist;
