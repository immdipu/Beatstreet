import React from "react";
import { TopArtists } from "../Utils/topplaylist";
import { SingleArtist } from "../components";

const TopArtist = () => {
  return (
    <div className="overflow-auto py-6  px-9 max-md:px-1">
      <h3 className="font-medium text-neutral-300 text-xl ml-9  max-md:ml-5 mb-5">
        Top Artists
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(7rem,0fr))] max-md:gap-x-2 max-md:justify-center max-md:px-3 gap-y-6 px-7">
        {TopArtists.map((artist, index) => (
          <SingleArtist {...artist} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopArtist;
