import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { usePlayerContext } from "../Context/PlayerContext";
import { ImageFetch } from "../Utils/Helper";
const SingleSongList = ({
  id,
  name,
  primaryArtists,
  duration,
  index,
  image,
}) => {
  const { singleSong } = usePlayerContext();
  let currentIndex = <p className="text-slate-300">{index}</p>;
  let playButton = <PlayArrowIcon className="text-darkTitle text-xl" />;
  const [PlayBtn, setPlayBtn] = useState(currentIndex);

  return (
    <div
      data-id={id}
      className="grid grid-cols-[max-content,max-content,auto,max-content] gap-3 cursor-pointer bg-lightBlue rounded-lg shadow-xl py-4 items-center px-5"
      onMouseEnter={() => setPlayBtn(playButton)}
      onMouseLeave={() => setPlayBtn(currentIndex)}
      onClick={() => singleSong(id)}
    >
      <div className="w-4">{PlayBtn}</div>
      <img
        src={image[1].link}
        className="w-14 rounded-lg object-cover"
        alt={name}
      />
      <div>
        <h3
          className="text-slate-200"
          dangerouslySetInnerHTML={{
            __html: `${name}`,
          }}
        />

        <p className="text-xs opacity-90 mt-[2px]   text-darkTextColor tracking-wide">
          {primaryArtists}
        </p>
      </div>
      <div>
        <div className="text-slate-200 text-sm opacity-70">
          {Math.floor(duration / 60)}:00
        </div>
      </div>
    </div>
  );
};

export default SingleSongList;
