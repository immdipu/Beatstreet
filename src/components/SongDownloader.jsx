import React, { useState, useEffect } from "react";
import DownloadProgressBar from "./DownloadProgressBar";
import DownloadProgress from "./DownloadProgress";
import axios from "axios";
import { AudioLinkSelector } from "../Utils/Helper";
import { LocalLaundryService } from "@mui/icons-material";

const SongDownloader = ({ songId }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadLink, setDownloadLink] = useState(null);
  const [offsetValue, setOffsetValue] = useState(190);

  useEffect(() => {
    axios
      .get(`https://saavn.me/songs?id=${songId}`)
      .then((response) => {
        let result = response.data.data[0];
        let link = AudioLinkSelector(result);
        setDownloadLink(link);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [songId]);

  const handleDownload = () => {
    setDownloading(true);

    axios({
      url: downloadLink,
      method: "GET",
      responseType: "blob",
      onDownloadProgress: (progressEvent) => {
        const progress = Math.floor(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        setDownloadProgress(progress);
        const progressOffset = 190 - (progress / 100) * 190;
        setOffsetValue(progressOffset);
        console.log(progressOffset);
      },
    })
      .then((response) => {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(response.data);
        link.download = `${songId}.mp3`;
        link.click();
        setDownloading(false);
        setDownloadProgress(0);
        setOffsetValue(190);
      })
      .catch((error) => {
        console.error(error);
        setDownloading(false);
        setDownloadProgress(0);
        setOffsetValue(190);
      });
  };

  return (
    <div className=" w-full flex justify-end cursor-pointer">
      <DownloadProgressBar
        progress={offsetValue}
        percentage={downloadProgress}
      />

      <DownloadProgress HandleClick={handleDownload} />
    </div>
  );
};

export default SongDownloader;
