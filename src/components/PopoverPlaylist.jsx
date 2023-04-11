import React, { useEffect } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { useUserContext } from "../Context/UserContext";
import { usePlayerContext } from "../Context/PlayerContext";

const PopoverPlaylist = () => {
  const { login_success, User_id } = useUserContext();
  const { getAllPlaylist, all_playlists, all_playlists_loading } =
    usePlayerContext();
  useEffect(() => {
    if (login_success && all_playlists.length === 0) {
      getAllPlaylist(User_id);
    }
  }, []);

  if (all_playlists_loading) {
    return (
      <div className="text-neutral-100 w-full text-center">Loading...</div>
    );
  }

  if (all_playlists.length === 0) {
    return (
      <div className="text-neutral-100 w-full text-center">No playlist</div>
    );
  }

  return (
    <>
      {all_playlists.map((item) => (
        <ListItemButton>{item.name}</ListItemButton>
      ))}
    </>
  );
};

export default PopoverPlaylist;
