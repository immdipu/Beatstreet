import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { db } from "../App";

export const ImageFetch = (item) => {
  let imageLink = null;
  if (item?.image) {
    let arrayLength = item.image.length;
    if (arrayLength > 0) {
      return (imageLink = item.image[arrayLength - 1].url);
    } else {
      return (imageLink = item.image[0].url);
    }
  } else {
    return "https://png.pngtree.com/png-clipart/20210207/ourmid/pngtree-concert-cd-clip-art-png-image_2885284.jpg";
  }
};

export const SpotifyImageFetch = (item) => {
  let imageLink = null;
  if (item) {
    let arrayLength = item.length;
    if (arrayLength > 0) {
      return (imageLink = item[arrayLength - 1].url);
    } else {
      return (imageLink = item[0].url);
    }
  }
};

export const AudioLinkSelector = (item) => {
  if (item === null) return;
  let audioLink = null;
  if (item.downloadUrl) {
    let arrayLength = item.downloadUrl.length;
    if (arrayLength > 0) {
      return (audioLink = item.downloadUrl[arrayLength - 1].url);
    } else {
      return (audioLink = item.downloadUrl[0].url);
    }
  } else if (item?.url) {
    return item.url;
  } else {
    return null;
  }
};

export const FollowersCount = (count) => {
  let followers = null;
  if (count < 1000) {
    followers = count;
    return followers;
  } else {
    let newcount = (count / 1000).toFixed(1);
    followers = newcount + "K";
    return followers;
  }
};

export const SongDurtionFormat = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  const formatMinutes = minutes.toString().padStart(2, 0);
  const formatSeconds = seconds.toString().padStart(2, 0);
  return `${formatMinutes}:${formatSeconds}`;
};

export const saveFavoriteToLocal = (songId) => {
  let favorites = JSON.parse(localStorage.getItem("favoritesSongs"));
  if (favorites === null) {
    favorites = [songId];
  } else {
    favorites = favorites.filter((item) => item !== songId);
    favorites.push(songId);
  }
  localStorage.setItem("favoritesSongs", JSON.stringify(favorites));
};

export const removeFavoriteFromLocal = (songId) => {
  let favorites = JSON.parse(localStorage.getItem("favoritesSongs"));
  if (favorites === null) {
    return;
  } else {
    favorites = favorites.filter((item) => item !== songId);
  }
  localStorage.setItem("favoritesSongs", JSON.stringify(favorites));
};

export const isFavorite = (songId) => {
  let favorites = JSON.parse(localStorage.getItem("favoritesSongs"));
  if (favorites === null) {
    return false;
  } else {
    return favorites.includes(songId);
  }
};

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const AddSongToOffline = async ({
  link,
  image,
  name,
  artists,
  id,
  duration,
}) => {
  const blob = new Blob([link], { type: "audio/mpeg" });
  const imageBlob = new Blob([image], { type: "image/png" });

  await db.songs.add({
    id,
    url: blob,
    name,
    image: imageBlob,
    artists: artists,
    duration,
  });
};
