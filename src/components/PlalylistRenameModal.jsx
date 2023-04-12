import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import RippleButton from "ripple-effect-reactjs";
import { motion } from "framer-motion";
import { usePlaylistContext } from "../Context/ImportPlaylistContext";
import { useUserContext } from "../Context/UserContext";

const PlalylistRenameModal = ({
  playlistId,
  handleClose,
  setShowRename,
  name,
}) => {
  const { RenamePlaylist } = usePlaylistContext();
  const { login_success, User_id } = useUserContext();
  const [rename, setRename] = useState(name);

  const HandleCreate = () => {
    if (rename === "") {
      document.querySelector(".alert").style.display = "block";
    } else {
      document.querySelector(".alert").style.display = "none";
      if (login_success) {
        let data = {
          name: rename.trim(),
          playlistId,
        };
        RenamePlaylist(User_id, data).then(() => {
          handleClose();
        });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black bg-opacity-30">
      <motion.section
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        exit={{
          scale: 0.3,
          opacity: 0,
        }}
        className="bg-lightBlue max-w-xs w-full  flex flex-col px-5  py-4 gap-3 rounded-md"
      >
        <p className="text-neutral-200 text-base font-thin tracking-wider">
          Rename Playlist
        </p>
        <input
          type="text"
          value={rename}
          onChange={(e) => setRename(e.target.value)}
          autoFocus
          className="outline-none border-b font-thin tracking-wider text-sm border-neutral-400 py-1 text-neutral-200 bg-transparent"
        />
        <p className="text-red-500 hidden alert">Name can't be empty</p>
        <div className="flex justify-end gap-2 w-full mt-5">
          <ListItemButton
            sx={[{ width: "fit-content", flexGrow: 0 }]}
            onClick={() => setShowRename(false)}
          >
            <button className="text-neutral-200 font-extralight tracking-wider text-sm">
              cancel
            </button>
          </ListItemButton>

          <RippleButton width={30} radius={6} color={"#060b1c"} speed={500}>
            <button
              className="text-neutral-200 font-extralight text-sm  tracking-wider rounded-md bg-darkBlue px-4 py-2"
              onClick={HandleCreate}
            >
              Create
            </button>
          </RippleButton>
        </div>
      </motion.section>
    </div>
  );
};

export default PlalylistRenameModal;
