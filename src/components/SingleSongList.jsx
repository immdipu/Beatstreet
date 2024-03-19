import React, { useCallback, useState, lazy, Suspense } from "react";
import { usePlayerContext } from "../Context/PlayerContext";
import ListItemButton from "@mui/material/ListItemButton";
import { SongDurtionFormat } from "../Utils/Helper";
import { SongDownloader } from "../components";
import Popover from "@mui/material/Popover";
import Skeleton from "@mui/material/Skeleton";
import DownloadLogo from "../components/downloader/DownloadLogo";
import { Favorite, CreatePlaylistModal } from "../components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import SongHeader from "./song/SongHeader";
const PopOverData = lazy(() => import("./song/popover/PopOverData"));
const UserPlaylistPopOver = lazy(() =>
  import("./song/popover/UserPlaylistPopOver")
);

const SingleSongList = ({
  id,
  name,
  duration,
  image,
  album,
  artists,
  primaryArtists,
  title,
  CURRENT = null,
  playlistId = null,
}) => {
  const user = useSelector((state) => state.user);
  const { HandlePlaySong } = usePlayerContext();
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

  function ArtistFormatter(artistss) {
    let arr = artistss.map((item) => item.name);
    return arr;
  }

  let primaryArtistsArr;
  if (artists && artists?.primary) {
    primaryArtistsArr = ArtistFormatter(artists?.primary);
  }

  const allArtist =
    artists &&
    Object.keys(artists).map((item) => {
      return artists[item];
    });

  const open = Boolean(anchorEl);
  const idd = open ? "simple-popover" : undefined;

  return (
    <>
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
            artist={
              primaryArtistsArr?.join(", ") || primaryArtists || "unknown"
            }
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
          {user.islogged && <Favorite songId={id} />}
          {user.islogged && <SongDownloader songId={id} />}
          {!user.islogged && <DownloadLogo />}

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
                artist={allArtist?.flat() ?? []}
              />
            </Suspense>

            <AnimatePresence>
              {showPlaylist && (
                <Suspense
                  fallback={<div className="text-neutral-200">Loading</div>}
                >
                  <UserPlaylistPopOver
                    handleClose={handleClose}
                    id={id}
                    setshowCreatePlaylist={setshowCreatePlaylist}
                  />
                </Suspense>
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
