import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [audioLoading, setaudioLoading] = useState(true);
  const [currentAlbum, setCurrentAlbum] = useState({
    image: "null",
    name: "null",
    primaryArtists: "null",
    songCount: "null",
    songs: [],
  });
  const [currentSong, setCurrentSong] = useState({
    image: "null",
    name: "null",
    primaryArtists: "null",
    downloadurl: "null",
  });
  const [selectSongId, setSelectedId] = useState(null);
  const [homeData, setHomeData] = useState({
    Albums: "null",
    playlists: "null",
    charts: "null",
    trendingAlbums: "null",
    trendingSongs: "null",
  });

  const singleAlbum = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://saavn.me/albums?id=${id}`);
      const result = response.data.data;
      setCurrentAlbum({
        ...currentAlbum,
        image: result.image[result.image.length - 1].link,
        name: result.name,
        primaryArtists: result.primaryArtists,
        songCount: result.songCount,
        songs: result.songs,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const singleSong = async (id) => {
    setaudioLoading(true);
    try {
      const res = await axios.get(`https://saavn.me/songs?id=${id}`);
      const result = res.data.data[0];

      setCurrentSong({
        ...currentSong,
        image: result.image[result.image.length - 2].link,
        name: result.name,
        primaryArtists: result.primaryArtists,
        downloadurl: result.downloadUrl[result.downloadUrl.length - 1].link,
      });
      setaudioLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectSongId !== null) {
      singleSong(selectSongId);
    }
  }, [selectSongId]);

  useEffect(() => {
    const homePageMusic = async () => {
      const response = await axios.get(
        "https://saavn.me/modules?language=hindi,english"
      );
      let result = response.data.data;
      setHomeData({
        ...homeData,
        Albums: result.albums,
        playlists: result.playlists,
        charts: result.charts,
        trendingAlbums: result.trending.albums,
        trendingSongs: result.trending.songs,
      });

      setLoading(false);
    };

    homePageMusic();
  }, []);

  return (
    <MusicContext.Provider
      value={{
        homeData,
        loading,
        singleAlbum,
        currentAlbum,
        setSelectedId,
        selectSongId,
        currentSong,
        setCurrentSong,
        audioLoading,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};
