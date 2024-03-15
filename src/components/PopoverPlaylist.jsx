import React, { useEffect } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { useUserContext } from "../Context/UserContext";
import { usePlayerContext } from "../Context/PlayerContext";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { usePlaylistContext } from "../Context/ImportPlaylistContext";
import { useQuery, useMutation } from "@tanstack/react-query";
import userApis from "../Api/userApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const PopoverPlaylist = React.memo(({ songId, handleclose }) => {
  const user = useSelector((state) => state.user);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllPlaylist"],
    queryFn: () => userApis.getAllPlaylist(),
  });

  const addSongToPlaylist = useMutation({
    mutationFn: (data) => userApis.addSongToPlaylist(data),
    onSuccess: () => {
      toast.success("Song added to playlist");
      handleclose();
    },
    onerror: () => {
      toast.error("Something went wrong");
    },
  });

  if (isLoading) {
    return (
      <div className="text-neutral-100 w-full text-center">Loading...</div>
    );
  }

  const HandleSongAdd = (e) => {
    let data = {
      playlistId: e.target.dataset.playlistid,
      songId,
    };

    if (user.islogged) {
      addSongToPlaylist.mutate(data);
    }
  };

  if (data.length === 0) {
    return (
      <div className="text-neutral-100 text-center mb-3 mt-2">No playlist</div>
    );
  }

  return (
    <>
      {data &&
        data.map((item, index) => (
          <ListItemButton
            key={index}
            data-playlistid={item.playlistId}
            className="gap-3 flex"
            onClick={HandleSongAdd}
          >
            {item.image ? (
              <img src={item.image} alt="image" className="w-10 rounded-md" />
            ) : (
              <div className="grid place-items-center bg-[#343432] rounded-md p-2 scale-90">
                <MusicNoteIcon className="text-neutral-300" />
              </div>
            )}
            {item.name}
          </ListItemButton>
        ))}
    </>
  );
});

export default PopoverPlaylist;
