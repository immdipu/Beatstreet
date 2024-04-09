import React from "react";
import { Link } from "react-router-dom";

const SingleTopPlaylists = ({ title, id, image }) => {
  return (
    <div className="w-fit">
      <div className="relative w-36 max-md:w-28 max-md:h-28 h-36 group rounded-md">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover rounded-lg"
        />
        <Link
          to={`/playlists/${id}`}
          className="absolute flex z-20 opacity-0 rounded-lg group-hover:opacity-100 duration-200 transition-all inset-0 w-full items-center justify-center bg-[#4c4c4c68] text-3xl"
        ></Link>
      </div>
      <h4
        className=" text-center w-36 max-md:w-28 text-darkSongname text-sm mt-2 px-1 max-md:text-[12px]"
        title={title}
      >
        {title}
      </h4>
    </div>
  );
};

export default SingleTopPlaylists;
