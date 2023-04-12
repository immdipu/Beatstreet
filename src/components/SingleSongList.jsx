import React, { useEffect, useState } from "react";
import { usePlayerContext } from "../Context/PlayerContext";
import ListItemButton from "@mui/material/ListItemButton";
import { SongDurtionFormat } from "../Utils/Helper";
import { SongDownloader } from "../components";
import Popover from "@mui/material/Popover";
import Skeleton from "@mui/material/Skeleton";
import { useUserContext } from "../Context/UserContext";
import DownloadLogo from "../components/downloader/DownloadLogo";
import { LoginAlert, Favorite, CreatePlaylistModal } from "../components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { motion, AnimatePresence } from "framer-motion";
import PopoverPlaylist from "./PopoverPlaylist";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
  const { login_success, User_id } = useUserContext();
  const [alert, setAlert] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showCreatePlaylist, setshowCreatePlaylist] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const HandleAddtoPlaylist = () => {
    setShowPlaylist((prev) => !prev);
  };

  const handleClose = () => {
    if (showPlaylist) {
      setShowPlaylist(false);
    }
    setTimeout(() => {
      setAnchorEl(null);
    }, 210);
  };

  const open = Boolean(anchorEl);
  const idd = open ? "simple-popover" : undefined;

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
          className="grid relative overflow-hidden gap-3  max-md:gap-2 cursor-pointer   items-center px-5"
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
          <div className="ml-4 overflow-hidden max-md:w-1/2 max-xxs:w-1/3">
            <h3
              className="text-slate-200 max-md:font-medium text-sm  whitespace-nowrap text-ellipsis overflow-hidden w-[90%] max-xxs:w-2/4"
              dangerouslySetInnerHTML={{
                __html: `${name || title}`,
              }}
            />

            <p
              className="text-xs max-md:text-[10px]  opacity-90 mt-[2px] max-w-xs  overflow-hidden whitespace-nowrap text-ellipsis text-darkTextColor tracking-wide"
              dangerouslySetInnerHTML={{
                __html: `${primaryArtists}`,
              }}
            />
          </div>

          <div className="mr-36 max-md:mr-1 max-md:ml-8 max-md:hidden">
            {duration && (
              <div className="text-slate-200 text-sm opacity-70">
                {SongDurtionFormat(duration)}
              </div>
            )}
          </div>
        </ListItemButton>

        <div className="absolute right-4 max-md:right-0 top-3 z-10 flex items-center gap-3 ">
          {login_success && (
            <div>
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
          <IconButton size="large" onClick={handleClick}>
            <MoreVertIcon className="text-slate-200 opacity-60" />
          </IconButton>

          <Popover
            id={idd}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                backgroundColor: "#282a2e",
                paddingY: 1,
                overflow: "visible",
                width: "fit-content",
              },
            }}
          >
            <ListItemButton onClick={HandleAddtoPlaylist}>
              <li className="flex gap-2 text-neutral-200 font-light text-sm">
                <PlaylistAddIcon /> <p>Add to Playlist</p>
              </li>
            </ListItemButton>
            <ListItemButton>
              <li className="flex gap-2 text-neutral-200 font-light text-sm">
                <PlaylistAddIcon /> <p>Remove from playlist</p>
              </li>
            </ListItemButton>
            <AnimatePresence>
              {showPlaylist && (
                <motion.div
                  initial={{ y: "90%" }}
                  animate={{ y: "0%" }}
                  exit={{
                    opacity: 0,
                    y: "90%",
                  }}
                  className="fixed rounded-t-2xl left-0 right-0 flex bg-opacity-80 backdrop-blur-sm items-center justify-center bottom-0 bg-[#282a2e]   text-neutral-200 text-sm px-2 py-2 rounded-md"
                >
                  <div>
                    <div className="w-full flex justify-center">
                      <div
                        className=" bg-neutral-400 rounded-full w-7 mt-1 h-1 mb-3 cursor-pointer"
                        onClick={handleClose}
                      ></div>
                    </div>

                    <ListItemButton
                      className="flex gap-3 items-center"
                      onClick={() => setshowCreatePlaylist(true)}
                    >
                      <div className="grid place-items-center bg-[#34343246] rounded-md p-2 scale-90">
                        <AddIcon />
                      </div>
                      Create new playlist
                    </ListItemButton>
                    <PopoverPlaylist songId={id} handleclose={handleClose} />
                  </div>
                </motion.div>
              )}
              {showCreatePlaylist && (
                <CreatePlaylistModal hidePlaylist={setshowCreatePlaylist} />
              )}
            </AnimatePresence>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default SingleSongList;
