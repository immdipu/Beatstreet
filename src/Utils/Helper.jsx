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
