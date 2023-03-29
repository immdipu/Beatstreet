import React, { useState, useEffect } from "react";
import DownloadProgressBar from "./DownloadProgressBar";
import DownloadProgress from "./DownloadProgress";
import axios from "axios";
import { AudioLinkSelector } from "../../Utils/Helper";

const SongDownloader = ({ songId }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadLink, setDownloadLink] = useState({
    songLink: null,
    songName: null,
    artistName: null,
  });
  const [offsetValue, setOffsetValue] = useState(132);

  useEffect(() => {
    axios
      .get(`https://saavn.me/songs?id=${songId}`)
      .then((response) => {
        let result = response.data.data[0];
        setDownloadLink({
          songLink: AudioLinkSelector(result),
          songName: result.name,
          artistName: result.primaryArtists,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [songId]);

  const handleDownload = () => {
    setDownloading(true);
    axios({
      url: downloadLink.songLink,
      method: "GET",
      responseType: "blob",
      onDownloadProgress: (progressEvent) => {
        const progress = Math.floor(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        setDownloadProgress(progress);
        const progressOffset = 132 - (progress / 100) * 132;
        setOffsetValue(progressOffset);
      },
    })
      .then((response) => {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(response.data);
        link.download = `${downloadLink.songName}-${downloadLink.artistName}`;
        link.click();
        setDownloading(false);
        setDownloadProgress(0);
        setOffsetValue(132);
      })
      .catch((error) => {
        console.error(error);
        setDownloading(false);
        setDownloadProgress(0);
        setOffsetValue(132);
      });
  };

  const HandleCancel = () => {
    console.log("download cancel pressed");
  };

  return (
    <div className=" w-full flex downloadBtns justify-end cursor-pointer h-10">
      {downloading ? (
        <div>
          <DownloadProgressBar
            progress={offsetValue}
            percentage={downloadProgress}
            HandleCancell={HandleCancel}
          />
        </div>
      ) : (
        <DownloadProgress HandleClick={handleDownload} />
      )}
    </div>
  );
};

export default SongDownloader;
