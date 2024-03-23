const USER_BASE_URL = import.meta.env.VITE_USER_BASE_URL;
import musicApi from "./Api";

import axios from "axios";

const axiosInstance = () => {
  const URL = USER_BASE_URL;
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: URL,
    headers: { Authorization: `Bearer ${token ?? ""}` },
  });
};

const userApis = {
  Login: async (data) => {
    const response = await axiosInstance().post(
      "/beatstreet/api/users/login",
      data
    );
    const result = response.data;
    return result;
  },

  Register: async (data) => {
    const response = await axiosInstance().post(
      USER_BASE_URL + "/beatstreet/api/users/signup",
      data
    );
    const result = response.data;
    return result;
  },
  sendVerification: async (data) => {
    try {
      const response = await axiosInstance().post(
        USER_BASE_URL + "/beatstreet/api/users/verficationtoken",
        data
      );
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  userVerification: async (token) => {
    const response = await axiosInstance().post(
      USER_BASE_URL + "/beatstreet/api/users/verify",
      token
    );
    const result = response.data;
    return result;
  },
  RemovePlaylistSong: async (data) => {
    try {
      const res = await axiosInstance().post(
        `/beatstreet/api/users/removesongsplaylist`,
        data
      );
      const results = res.data;
      return results;
    } catch (error) {
      console.log(error);
    }
  },
  Autologin: async () => {
    try {
      const response = await axiosInstance().get(
        "/beatstreet/api/users/isloggedin"
      );
      const result = response.data.data;
      return result;
    } catch (error) {
      console.log("error", error);
    }
  },
  getRecentSongs: async (id) => {
    try {
      const response = await axiosInstance().get(
        `/beatstreet/api/users/recentsongs`
      );
      const results = response.data.data;
      const ids = results.join(",");
      const getSongs = await musicApi.MulitpleSongs(ids);
      return getSongs;
    } catch (error) {
      console.log(error);
    }
  },
  getFavoritesSongs: async () => {
    const response = await axiosInstance().get(
      `/beatstreet/api/users/favoritesongs`
    );
    const results = response.data.data;
    const ids = results.join(",");

    const getSongs = await musicApi.MulitpleSongs(ids);
    return getSongs;
  },
  getAllPlaylist: async () => {
    try {
      const response = await axiosInstance().get(
        `/beatstreet/api/users/allplaylist`
      );
      const results = response.data.data;
      return results;
    } catch (error) {
      console.log(error);
    }
  },
  getSinglePlaylist: async (id) => {
    try {
      const response = await axiosInstance()
        .get(`/beatstreet/api/users/getsingleplaylist/${id}`)
        .then(async (res) => {
          if (res?.data?.data?.songIds && res?.data?.data?.songIds.length > 0) {
            const ids = res.data.data.songIds.join(",");

            const songs = await musicApi.MulitpleSongs(ids);
            return {
              ...res.data.data,
              songs,
            };
          } else {
            return {
              ...res.data.data,
              songs: [],
            };
          }
        });
      return response;
    } catch (error) {
      return error;
    }
  },
  addRecentSong: async (id) => {
    try {
      await axiosInstance().get(`/beatstreet/api/users/recentsongs/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  addFavoriteSong: async (id) => {
    const result = await axiosInstance().get(
      `/beatstreet/api/users/favoritesongs/${id}`
    );
    return result.data;
  },
  addNewPlaylist: async (data) => {
    try {
      const res = await axiosInstance().post(
        `/beatstreet/api/users/addnewplaylist`,
        data
      );
      const result = res.data;
      return result;
    } catch (error) {
      return error;
    }
  },
  addSongToPlaylist: async (data) => {
    try {
      const res = await axiosInstance().post(
        `/beatstreet/api/users/addsongsplaylist`,
        data
      );
      const result = res.data;
      return result;
    } catch (error) {
      return error;
    }
  },

  DeletePlaylist: async (id) => {
    const res = await axiosInstance().delete(
      `/beatstreet/api/users/removeplaylist/${id}`
    );
    const result = res.data;
    return result;
  },

  RenamePlaylist: async (data) => {
    const res = await axiosInstance().post(
      `/beatstreet/api/users/updateplaylist`,
      data
    );
    const result = res.data;
    return result;
  },

  getHomepage: async () => {
    const res = await axiosInstance().get(`/beatstreet/api/music/homepage`);
    const result = res.data;

    if (result?.data?.suggestions && result?.data?.suggestions.length > 0) {
      const ids = result.data.suggestions.join(",");
      const getSongs = await musicApi.MulitpleSongs(ids);
      return {
        ...result,
        data: {
          ...result.data,
          suggestions: getSongs,
        },
      };
    }

    return result;
  },
};

export default userApis;
