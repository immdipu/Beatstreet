import React from "react";
import { LoadingSpinner } from "../components";
import { useParams } from "react-router-dom";

import { ImageFetch, FollowersCount } from "../Utils/Helper";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useQuery } from "@tanstack/react-query";
import musicApi from "../Api/Api";
import ArtistSongs from "../components/Artist/ArtistSongs";
import ArtistAlbums from "../components/Artist/ArtistAlbums";
import LanguagesList from "../components/Artist/LanguagesList";

const Artist = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: [id, "singleArtist"],
    queryFn: () => musicApi.SingleArtist(id),
  });

  if (isLoading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <section>
        <div className="w-full flex gap-6 px-16 pt-7  max-md:flex-col relative overflow-hidden Artistbackground">
          <img
            src={ImageFetch(data)}
            className="rounded-xl absolute inset-0 -z-20 w-full blur-md h-full object-cover"
            alt=""
          />
          <img
            src={ImageFetch(data)}
            className="rounded-xl h-72 object-cover"
            alt=""
          />

          <div className="self-end flex flex-col gap-2 mb-9 max-md:items-center">
            <h2 className="text-white font-medium text-3xl my-2 flex items-center">
              {data?.name}
              {data?.isVerified && (
                <VerifiedIcon color="primary" className="ml-1" />
              )}
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-slate-300 text-xs capitalize">
                {data?.dominantType}
              </p>
              <span className="block bg-slate-400 w-1 h-1 rounded-full"></span>

              <p className="text-slate-300 text-xs">
                {FollowersCount(data?.followerCount)} followers
              </p>
            </div>
            {data?.availableLanguages && data.availableLanguages.length > 0 && (
              <LanguagesList data={data.availableLanguages} />
            )}
          </div>
        </div>
        <section className="mt-12 mx-12 max-md:mx-2">
          <ArtistSongs id={id} />
        </section>
        <section>
          <ArtistAlbums id={id} />
        </section>

        {/* <section className="mt-12 mx-14 mb-14 max-md:mx-4">
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
        </section> */}
      </section>
    </div>
  );
};

export default Artist;
