import React from "react";
import { Link } from "react-router-dom";

const SearchAlbum = ({ image, id, title }) => {
  return (
    <div>
      <div className="relative w-28 h-36 group rounded-lg">
        <img
          src={image[1]?.url}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover rounded-lg"
        />
        <Link
          to={`album/${id}`}
          className="absolute flex z-20 opacity-0 rounded-lg group-hover:opacity-100 duration-200 transition-all inset-0 w-full items-center justify-center bg-[#4c4c4c68] text-3xl"
        ></Link>
      </div>
      <h4
        className=" w-28 max-md:text-[13px] max-md:leading-5 text-center text-darkSongname text-sm mt-2 px-1"
        title={title}
        dangerouslySetInnerHTML={{
          __html: `${title}`,
        }}
      />
    </div>
  );
};

export default SearchAlbum;
