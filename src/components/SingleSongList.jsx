import React, { useCallback, useState, lazy, Suspense } from "react";
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
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import { motion, AnimatePresence } from "framer-motion";
import PopoverPlaylist from "./PopoverPlaylist";
import AddIcon from "@mui/icons-material/Add";
import { usePlaylistContext } from "../Context/ImportPlaylistContext";
import { Link } from "react-router-dom";
import SongHeader from "./song/SongHeader";
const PopOverData = lazy(() => import("./song/popover/PopOverData"));
const musicApi = import("../Api/Api");

const SingleSongList = ({
  id,
  name,
  primaryArtists,
  primaryArtistsId = null,
  duration,
  index,
  image,
  album,
  artists,
  title,
  CURRENT = null,
  playlistId = null,
}) => {
  const { HandlePlaySong, getSinglePlaylist } = usePlayerContext();
  const { login_success, User_id } = useUserContext();
  const { RemovePlaylistSong } = usePlaylistContext();
  const [alert, setAlert] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showCreatePlaylist, setshowCreatePlaylist] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [ImageLoading, SetImageLoading] = useState(true);
  const handleImageLoad = useCallback(() => {
    SetImageLoading(false);
  }, []);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setShowPlaylist(false);
    setTimeout(() => {
      setAnchorEl(null);
    }, 210);
  }, []);

  const HandleRemoveSongPlaylist = useCallback(() => {
    if (login_success) {
      let data = {
        playlistId,
        songId: id,
      };
      RemovePlaylistSong(User_id, data).then((res) => {
        let data2 = {
          playlistId,
        };
        getSinglePlaylist(User_id, data2);
      });
    }
  }, []);
  function ArtistFormatter(artistss) {
    let arr = artistss.map((item) => item.name);
    return arr;
  }

  function ArtistFormatterId(artistss) {
    let arr = artistss.map((item) => item.id);
    return arr;
  }

  let primaryArtistsArr;
  let primaryArtistsIdArr;
  if (artists && artists?.primary) {
    primaryArtistsArr = ArtistFormatter(artists?.primary);
    primaryArtistsIdArr = ArtistFormatterId(artists?.primary);
  }

  const allArtist = Object.keys(artists).map((item) => {
    return artists[item];
  });

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
            src={image[1].url}
            className={
              "w-14 rounded-lg object-cover " +
              (ImageLoading ? "hidden" : "block")
            }
            onLoad={handleImageLoad}
            alt={name}
          />
          <SongHeader
            title={name || title}
            artist={primaryArtistsArr?.join(", ")}
          />

          <div className="mr-36 max-md:mr-1 max-md:ml-8 max-md:hidden">
            {duration && (
              <div className="text-slate-200 text-sm opacity-70">
                {SongDurtionFormat(duration)}
              </div>
            )}
          </div>
        </ListItemButton>

        <div className="absolute right-4 max-md:right-0 top-3 z-10 flex items-center gap-3 ">
          {login_success && <Favorite songId={id} />}
          {login_success ? <SongDownloader songId={id} /> : <DownloadLogo />}
          <IconButton size="large" onClick={handleClick}>
            <MoreVertIcon className="text-slate-200 opacity-60" />
          </IconButton>

          <Popover
            id={idd}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                backgroundColor: "#282a2e",
                paddingY: 1,
                borderRadius: 3,
                overflow: "visible",
                width: "fit-content",
              },
            }}
          >
            <Suspense
              fallback={<div className="text-neutral-200">Loading</div>}
            >
              <PopOverData
                playlistId={playlistId}
                setShowPlaylist={setShowPlaylist}
                showPlaylist={showPlaylist}
                songId={id}
                albumId={album?.id}
                artist={allArtist?.flat()}
              />
            </Suspense>

            {primaryArtistsArr &&
              primaryArtistsId &&
              primaryArtistsArr.map((item, index) => {
                return (
                  <Link
                    to={`/artist/${primaryArtistsIdArr[index].trim()}`}
                    key={index}
                  >
                    <ListItemButton
                      sx={{
                        paddingRight: 5,
                        ":hover": {
                          bgcolor: "#444",
                        },
                      }}
                    >
                      <li className="flex gap-3 text-neutral-200 items-center font-light text-sm ">
                        <div className="p-1  bg-lightBlue rounded-md">
                          <PersonIcon sx={{ fontSize: 20 }} />
                        </div>
                        <p>{item}</p>
                      </li>
                    </ListItemButton>
                  </Link>
                );
              })}
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
