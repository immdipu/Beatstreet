import React from "react";
import { usePlayerContext } from "../Context/PlayerContext";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const SinglesongCard = ({ id, name, image, title }) => {
  const { singleSong } = usePlayerContext();
  return (
    <div>
      <div className="relative w-28 h-36 group rounded-lg">
        <img
          src={image[1].link}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute flex z-20 opacity-0 rounded-lg group-hover:opacity-100 duration-200 transition-all inset-0 w-full items-center justify-center bg-[#4c4c4c68] text-3xl">
          <div onClick={() => singleSong(id)} className="w-fit rounded-full">
            <PlayCircleFilledIcon
              sx={{ fontSize: "60px" }}
              className="text-5xl text-lightBlue"
            />
          </div>
        </div>
      </div>
      <h4
        className="whitespace-nowrap overflow-hidden text-ellipsis w-28 text-darkSongname text-sm mt-2 px-1"
        title={name}
        dangerouslySetInnerHTML={{
          __html: `${name || title}`,
        }}
      />
    </div>
  );
};

export default SinglesongCard;
