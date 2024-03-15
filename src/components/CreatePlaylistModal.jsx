import React, { useRef } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import RippleButton from "ripple-effect-reactjs";
import { motion } from "framer-motion";
import { usePlaylistContext } from "../Context/ImportPlaylistContext";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import userApis from "../Api/userApi";

const CreatePlaylistModal = ({ hidePlaylist }) => {
  const queryClient = useQueryClient();
  const playlistname = useRef(null);
  const createNewPlaylist = useMutation({
    mutationFn: (data) => userApis.addNewPlaylist(data),
    onSuccess: (data) => {
      if (data?.response?.status === 400) {
        return toast.error(
          data?.response?.data?.message || "Something Went Wrong"
        );
      }
      toast.success(data.message || "Playlist Created Successfully", {
        position: "top-center",
      });
      queryClient.invalidateQueries("getAllPlaylist");
      hidePlaylist(false);
    },
    onError: (error) => {
      toast.error(error.message || "Something Went Wrong");
    },
  });

  const HandleCreate = () => {
    if (playlistname.current.value == "") {
      toast.error("Name can't be empty");
    } else {
      let data = {
        name: playlistname.current.value.trim(),
        image: "",
        songsIds: [],
      };
      createNewPlaylist.mutate(data);
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
          Create New Playlist
        </p>
        <input
          type="text"
          ref={playlistname}
          autoFocus
          className="outline-none border-b font-thin tracking-wider text-sm border-neutral-400 py-1 text-neutral-200 bg-transparent"
        />
        <p className="text-red-500 hidden alert">Name can't be empty</p>
        <div className="flex justify-end gap-2 w-full mt-5">
          <ListItemButton
            sx={[{ width: "fit-content", flexGrow: 0 }]}
            onClick={() => hidePlaylist(false)}
          >
            <button className="text-neutral-200 font-extralight tracking-wider text-sm">
              cancel
            </button>
          </ListItemButton>

          <RippleButton width={30} radius={6} color={"#060b1c"} speed={500}>
            <button
              disabled={createNewPlaylist.isPending}
              className="text-neutral-200 font-extralight select-none text-sm  tracking-wider rounded-md bg-darkBlue px-4 py-2"
              onClick={HandleCreate}
            >
              {createNewPlaylist.isPending ? (
                <div className="w-12">
                  <ClipLoader size={17} color="#fff" speedMultiplier={3} />
                </div>
              ) : (
                "Create"
              )}
            </button>
          </RippleButton>
        </div>
      </motion.section>
    </div>
  );
};

export default CreatePlaylistModal;
