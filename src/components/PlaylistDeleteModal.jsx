import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import RippleButton from "ripple-effect-reactjs";
import { motion } from "framer-motion";
import userApis from "../Api/userApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ClipLoader from "react-spinners/ClipLoader";

const PlaylistDeleteModal = ({ handleClose, setShowDelete, playlistId }) => {
  const queryClient = useQueryClient();
  const deletePlaylist = useMutation({
    mutationFn: (playlistId) => userApis.DeletePlaylist(playlistId),
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries("getAllPlaylist");
      setShowDelete(false);
    },
  });

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
          Delete Playlist
        </p>

        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-center text-neutral-100 text-2xl">
            Are you sure ?
          </h3>
          <p className="text-center text-neutral-400 text-xs">
            You will not be able to recover this playlist!
          </p>
        </div>

        <div className="flex justify-end gap-2 w-full mt-5">
          <ListItemButton
            sx={[{ width: "fit-content", flexGrow: 0 }]}
            onClick={() => setShowDelete(false)}
          >
            <button className="text-neutral-200 font-extralight tracking-wider text-sm">
              cancel
            </button>
          </ListItemButton>

          <RippleButton width={30} radius={6} color={"#060b1c"} speed={500}>
            <button
              disabled={deletePlaylist.isPending}
              className="text-[#ff9a9a] font-extralight text-sm  tracking-wider rounded-md bg-[#f74b4b38] px-4 py-2"
              onClick={() => {
                deletePlaylist.mutate(playlistId);
              }}
            >
              {deletePlaylist.isPending ? (
                <ClipLoader color={"#ff9a9a"} loading={true} size={20} />
              ) : (
                "Delete"
              )}
            </button>
          </RippleButton>
        </div>
      </motion.section>
    </div>
  );
};

export default PlaylistDeleteModal;
