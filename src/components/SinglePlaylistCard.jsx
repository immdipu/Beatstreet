import React, { useState } from "react";
import { Link } from "react-router-dom";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import Popover from "@mui/material/Popover";
import { AnimatePresence } from "framer-motion";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { PlalylistRenameModal, PlaylistDeleteModal } from "../components";

const SinglePlaylistCard = ({ name, image, songsLength = 0, playlistId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ShowRename, setShowRename] = useState(false);
  const [ShowDelete, setShowDelete] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const idd = open ? "simple-popover" : undefined;

  const HandleRename = () => {
    setShowRename((prev) => !prev);
  };
  const HandleDeleteModal = () => {
    setShowDelete((prev) => !prev);
  };

  const handleClose = () => {
    if (ShowRename) {
      setShowRename(false);
    }
    if (ShowDelete) {
      setShowDelete(false);
    }
    setTimeout(() => {
      setAnchorEl(null);
    }, 210);
  };

  return (
    <div className="relative w-full">
      <Link
        to={`/userplaylist/${playlistId}`}
        className="hover:bg-lightBlue block  hover:bg-opacity-60 mr-3 transition-all duration-300 ease-linear py-[10px] rounded-md px-4"
      >
        <div className="flex overflow-hidden cursor-pointer   rounded-md items-center">
          <div className="flex  w-full items-center gap-5 ">
            {image ? (
              <img className="rounded-md w-10" src={image} alt="spotify" />
            ) : (
              <div className="grid place-items-center bg-[#343432] rounded-md p-2">
                <MusicNoteIcon className="text-neutral-300" />
              </div>
            )}
            <div className="">
              <h3 className="text-neutral-200 tracking-wide text-base">
                {name}
              </h3>
              <p className="text-neutral-400 text-xs mt-1">
                {songsLength} songs
              </p>
            </div>
          </div>
        </div>
      </Link>
      <section
        className="absolute right-2 top-0 bottom-0 grid place-items-center   z-10"
        onClick={handleClick}
      >
        <IconButton size="large">
          <MoreVertIcon className="text-neutral-400" />
        </IconButton>
      </section>
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
            width: "10rem",
          },
        }}
      >
        <ListItemButton onClick={HandleRename}>
          <li className="flex gap-3 items-center text-neutral-200 py-1 font-normal text-sm">
            <EditIcon />
            <p className="tracking-wider">Rename</p>
          </li>
        </ListItemButton>
        <ListItemButton onClick={HandleDeleteModal}>
          <li className="flex gap-3 text-neutral-200 py-1 font-normal text-sm">
            <DeleteIcon />
            <p className="tracking-wider">Delete</p>
          </li>
        </ListItemButton>
        <AnimatePresence>
          {ShowRename && (
            <PlalylistRenameModal
              handleClose={handleClose}
              setShowRename={setShowRename}
              playlistId={playlistId}
              name={name}
            />
          )}
          {ShowDelete && (
            <PlaylistDeleteModal
              handleClose={handleClose}
              setShowDelete={setShowDelete}
              playlistId={playlistId}
            />
          )}
        </AnimatePresence>
      </Popover>
    </div>
  );
};

export default SinglePlaylistCard;
