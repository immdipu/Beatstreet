export const ImageFetch = (item) => {
  let imageLink = null;
  if (item.image) {
    let arrayLength = item.image.length;
    if (arrayLength > 0) {
      return (imageLink = item.image[arrayLength - 1].link);
    } else {
      return (imageLink = item.image[0].link);
    }
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
  let audioLink = null;
  if (item.downloadUrl) {
    let arrayLength = item.downloadUrl.length;
    if (arrayLength > 0) {
      return (audioLink = item.downloadUrl[arrayLength - 1].link);
    } else {
      return (audioLink = item.downloadUrl[0].link);
    }
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
