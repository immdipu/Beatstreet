import React, { useState, memo } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import userApis from "../Api/userApi";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  isFavorite,
  saveFavoriteToLocal,
  removeFavoriteFromLocal,
} from "../Utils/Helper";

const Favorite = memo(({ songId }) => {
  const [fav, setFav] = useState(isFavorite(songId));
  const user = useSelector((state) => state.user);

  const addFavoriteSong = useMutation({
    mutationFn: (data) => userApis.addFavoriteSong(data),
    onSuccess: () => {
      if (fav) {
        removeFavoriteFromLocal(songId);
      } else {
        saveFavoriteToLocal(songId);
      }
      setFav(!fav);
    },
    onerror: () => {
      toast.error("Something went wrong");
    },
  });

  const HandleFavorite = () => {
    if (user.islogged) {
      addFavoriteSong.mutate(songId);
    } else {
      toast.error("Please login to add song to favorite");
    }
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
});

export default Favorite;
