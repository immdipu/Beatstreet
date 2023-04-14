import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useUserContext } from "../Context/UserContext";
import { usePlayerContext } from "../Context/PlayerContext";

const Favorite = ({ songId }) => {
  const { sendFavoriteSong, User_id, login_success } = useUserContext();
  const { favorites_songs, getFavoritesSongs } = usePlayerContext();
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (login_success && favorites_songs && favorites_songs.length > 0) {
      const isFavExist = () => {
        for (let i = 0; i < favorites_songs.length; i++) {
          if (favorites_songs[i].id === songId) {
            return setFav(true);
          }
        }
        return setFav(false);
      };
      isFavExist();
    }
  }, [songId]);

  const HandleFavorite = () => {
    let data = {
      songId,
    };
    if (login_success) {
      sendFavoriteSong(User_id, data).then(() => {
        getFavoritesSongs(User_id);
      });
    }
    setFav((prev) => !prev);
  };

  return (
    <div onClick={HandleFavorite}>
      {fav ? (
        <FavoriteIcon className="text-red-600" sx={{ fontSize: 25 }} />
      ) : (
        <FavoriteBorderIcon
          className="text-neutral-400"
          sx={{ fontSize: 25 }}
        />
      )}
    </div>
  );
};

export default Favorite;
