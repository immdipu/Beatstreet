import React, { useCallback, lazy, Suspense } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { SongDurtionFormat } from "../Utils/Helper";
import SongHeader from "./song/SongHeader";
import { PlaySong } from "../redux/slice/playerSlicer";
import { useDispatch } from "react-redux";
import Image from "./ui/Image";
const Actions = lazy(() => import("./song/orgranism/Actions"));

const SingleSongList = ({
  id,
  name,
  duration,
  image,
  album,
  artists,
  primaryArtists,
  title,
  upcomingSongs = [],
  playlistId = null,
  offline = false,
}) => {
  const dispatch = useDispatch();
  function ArtistFormatter(artistss) {
    let arr = artistss.map((item) => item.name);
    return arr;
  }

  let primaryArtistsArr;

  if (artists && artists?.primary) {
    primaryArtistsArr = ArtistFormatter(artists?.primary);
  }

  const handleContextMenu = useCallback((e) => {
    e.preventDefault();
    const button = document.querySelector(`[data-sid="${id}"]`);
    console.log("button", button);
    button.click();
  }, []);

  return (
    <>
      <div className="relative" onContextMenu={handleContextMenu}>
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
          onClick={() => dispatch(PlaySong({ id, upcomingSongs }))}
        >
          <Image
            src={offline ? URL.createObjectURL(image) : image[1]?.url}
            alt={name}
            className="w-14 h-14 rounded-lg"
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
          <Suspense
            fallback={<div className="text-neutral-200">Loading...</div>}
          >
            <Actions
              artists={artists}
              id={id}
              playlistId={playlistId}
              album={album}
              offline={offline}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SingleSongList;
