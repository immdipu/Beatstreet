import React from "react";
import { motion } from "framer-motion";
import ListItemButton from "@mui/material/ListItemButton";
import AddIcon from "@mui/icons-material/Add";
import PopoverPlaylist from "../../PopoverPlaylist";

const UserPlaylistPopOver = ({ setshowCreatePlaylist, handleClose, id }) => {
  return (
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
  );
};

export default UserPlaylistPopOver;
