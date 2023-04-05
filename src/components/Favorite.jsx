import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useUserContext } from "../Context/UserContext";

const Favorite = ({ songId }) => {
  const { sendFavoriteSong, User_id, login_success } = useUserContext();
  const [fav, setFav] = useState(false);

  const HandleFavorite = () => {
    let data = {
      songId,
    };
    if (login_success) {
      sendFavoriteSong(User_id);
    }
    console.log("favorite");
    setFav((prev) => !prev);
  };

  return (
    <div onClick={HandleFavorite}>
      {fav ? (
        <FavoriteIcon
          className="text-red-600"
          sx={{ fontSize: 28, fillOpacity: "1" }}
        />
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
