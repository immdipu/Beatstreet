import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [homeData, setHomeData] = useState({
    Albums: "null",
    playlists: "null",
    charts: "null",
    trendingAlbums: "null",
    trendingSongs: "null",
  });

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
    <MusicContext.Provider value={{ homeData, loading }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};
