import React from "react";
import { Link } from "react-router-dom";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const SingleChart = ({ title, id, image }) => {
  return (
    <div>
      <div className="relative w-36 max-md:w-32 max-md:h-32 h-36 group rounded-md">
        <img
          src={image[1].link}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute flex z-20 opacity-0 rounded-lg group-hover:opacity-100 duration-200 transition-all inset-0 w-full items-center justify-center bg-[#4c4c4c68] text-3xl">
          <Link to={`playlists/${id}`} className="w-fit rounded-full">
            <PlayCircleFilledIcon
              sx={{ fontSize: "60px" }}
              className="text-xl text-lightBlue"
            />
          </Link>
        </div>
      </div>
      <h4
        className=" text-center w-36 text-darkSongname text-sm mt-2 px-1 max-md:text-[12px]"
        title={title}
      >
        {title}
      </h4>
    </div>
  );
};

export default SingleChart;
