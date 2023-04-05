import React, { useState } from "react";
import { usePlayerContext } from "../Context/PlayerContext";
import ListItemButton from "@mui/material/ListItemButton";
import { SongDurtionFormat } from "../Utils/Helper";
import { SongDownloader } from "../components";
import Skeleton from "@mui/material/Skeleton";
import { useUserContext } from "../Context/UserContext";
import DownloadLogo from "../components/downloader/DownloadLogo";
import { LoginAlert, Favorite } from "../components";

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
  const [alert, setAlert] = useState(false);
  const [ImageLoading, SetImageLoading] = useState(true);
  const handleImageLoad = () => {
    SetImageLoading(false);
  };

  let timeoutId;
  const HandleAlert = () => {
    setAlert(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      setAlert(false);
    }, 5000);
  };

  return (
    <>
      {alert && (
        <div className="fixed top-28 left-1/2 max-md:left-0 max-md:scale-75 w-full">
          <LoginAlert message="Login to download songs" alertClass={"failed"} />
        </div>
      )}
      <div className="relative">
        <ListItemButton
          sx={[
            {
              display: "grid",
              borderRadius: 2,
              gridTemplateColumns: "max-content 1fr max-content max-content",
              overflow: "hidden",
            },
            (theme) => ({
              "&:hover": {
                backgroundColor: "#1d242ca3",
              },
              [theme.breakpoints.down("sm")]: {
                paddingLeft: 1,
                paddingRight: "3px",
              },
            }),
          ]}
          data-id={id}
          className="grid relative overflow-hidden gap-3  max-md:gap-2 cursor-pointer  items-center px-5"
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
              className="text-slate-200 max-md:font-medium text-sm  whitespace-nowrap text-ellipsis overflow-hidden w-[90%] max-md:w-8/12 max-xxs:w-2/4"
              dangerouslySetInnerHTML={{
                __html: `${name || title}`,
              }}
            />

            <p
              className="text-xs max-md:text-[10px]  opacity-90 mt-[2px] max-w-xs max-md:max-w-[70%] overflow-hidden whitespace-nowrap text-ellipsis text-darkTextColor tracking-wide"
              dangerouslySetInnerHTML={{
                __html: `${primaryArtists}`,
              }}
            />
          </div>

          <div className="mr-28 max-md:mr-1 max-md:ml-8">
            {duration && (
              <div className="text-slate-200 text-sm opacity-70">
                {SongDurtionFormat(duration)}
              </div>
            )}
          </div>
        </ListItemButton>

        <div
          className={
            "absolute right-4 top-3 z-10 flex items-center gap-3 pt-[15px]  " +
            (duration ? " max-md:right-16" : "max-md:right-3 ")
          }
        >
          {login_success && (
            <div className="-translate-y-[12px]">
              <Favorite songId={id} />
            </div>
          )}
          {login_success ? (
            <SongDownloader songId={id} />
          ) : (
            <div onClick={HandleAlert}>
              <DownloadLogo />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleSongList;
