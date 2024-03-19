import React from "react";
import { Link } from "react-router-dom";

const MusicCard = ({ image, id, name, type = "album" }) => {
  return (
    <div>
      <div className="relative w-28 h-36 group rounded-lg">
        <img
          src={image[1]?.url || image[0]?.url || image[2]?.url || image[3]?.url}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover rounded-lg"
        />
        <Link
          to={`/${type}/${id}`}
          className="absolute flex z-20 opacity-0 rounded-lg group-hover:opacity-100 duration-200 transition-all inset-0 w-full items-center justify-center bg-[#4c4c4c68] text-3xl cursor-pointer"
        ></Link>
      </div>
      <h4
        className="whitespace-nowrap overflow-hidden text-ellipsis w-28 text-darkSongname text-sm mt-2 px-1"
        title={name}
        dangerouslySetInnerHTML={{
          __html: `${name}`,
        }}
      />
    </div>
  );
};

export default MusicCard;
