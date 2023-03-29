import React, { useState } from "react";
import { usePlayerContext } from "../Context/PlayerContext";
import ListItemButton from "@mui/material/ListItemButton";
import { SongDurtionFormat } from "../Utils/Helper";
import { SongDownloader } from "../components";
import Skeleton from "@mui/material/Skeleton";
import Tooltip from "@mui/material/Tooltip";
import { useUserContext } from "../Context/UserContext";
import DownloadLogo from "../components/downloader/DownloadLogo";

const SingleSongList = ({
  id,
  name,
  primaryArtists,
  duration,
  index,
  image,
  title,
  CURRENT = null,
}) => {
  const { HandlePlaySong } = usePlayerContext();
  const { login_success } = useUserContext();
  const [ImageLoading, SetImageLoading] = useState(true);
  const handleImageLoad = () => {
    SetImageLoading(false);
  };

  return (
    <div className="relative">
      <ListItemButton
        sx={[
          {
            display: "grid",
            borderRadius: 2,
            gridTemplateColumns: "max-content 1fr max-content",
            overflow: "hidden",
          },
          (theme) => ({
            "&:hover": {
              backgroundColor: "#1d242ca3",
            },
          }),
        ]}
        data-id={id}
        className="grid relative overflow-hidden gap-3 cursor-pointer  items-center px-5 max-md:px-3"
        onClick={() => HandlePlaySong(id, CURRENT)}
      >
        {ImageLoading && (
          <Skeleton
            width={50}
            height={50}
            sx={{ bgcolor: "#545454" }}
            variant="rounded"
          />
        )}
        <img
          src={image[1].link}
          className={
            "w-14 rounded-lg object-cover " +
            (ImageLoading ? "hidden" : "block")
          }
          onLoad={handleImageLoad}
          alt={name}
        />
        <div className="ml-4 overflow-hidden ">
          <h3
            className="text-slate-200 text-sm whitespace-nowrap text-ellipsis overflow-hidden w-[90%]"
            dangerouslySetInnerHTML={{
              __html: `${name || title}`,
            }}
          />

          <p
            className="text-xs max-md:text-[11px]  opacity-90 mt-[2px] max-w-xs max-md:max-w-[70%] overflow-hidden whitespace-nowrap text-ellipsis text-darkTextColor tracking-wide"
            dangerouslySetInnerHTML={{
              __html: `${primaryArtists}`,
            }}
          />
        </div>

        <div className="mr-20 max-md:mr-2 max-md:ml-5">
          {duration && (
            <div className="text-slate-200 text-sm opacity-70">
              {SongDurtionFormat(duration)}
            </div>
          )}
        </div>
      </ListItemButton>

      <Tooltip
        title={login_success ? "" : "Login to Download"}
        className="text-red-700"
        arrow
      >
        <div
          className={
            "absolute right-4 top-3 z-10 pt-[15px]  " +
            (duration ? " max-md:right-20" : "max-md:right-3 ")
          }
        >
          {login_success ? <SongDownloader songId={id} /> : <DownloadLogo />}
        </div>
      </Tooltip>
    </div>
  );
};

export default SingleSongList;
