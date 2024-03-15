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
    try {
      const response = await axiosInstance().post(
        "/beatstreet/api/users/login",
        data
      );
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  Register: async (data) => {
    try {
      const response = await axiosInstance.post(
        USER_BASE_URL + "/beatstreet/api/users/signup",
        data
      );
      const result = response.data.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  sendVerification: async (data) => {
    try {
      const response = await axiosInstance.post(
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
    try {
      const response = await axiosInstance.post(
        USER_BASE_URL + "/beatstreet/api/users/verify",
        token
      );
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  RemovePlaylistSong: async (id, data) => {
    try {
      const res = await axiosInstance.post(
        `${USER_BASE_URL}/api/users/removesongsplaylist/${id}`,
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
  getFavoritesSongs: async (id) => {
    try {
      const response = await axiosInstance().get(
        `/beatstreet/api/users/favoritesongs`
      );
      const results = response.data.data;
      console.log("results", results);
      const ids = results.join();
      const getSongs = await axios.get(`${BASEURL}/songs?id=${ids}`);
      const songs = getSongs.data.data;
      return songs;
    } catch (error) {
      console.log(error);
    }
  },
  getAllPlaylist: async (id) => {
    try {
      const response = await axiosInstance().get(
        `/beatstreet/api/users/allplaylist/${id}`
      );
      const results = response.data.data;
      return results;
    } catch (error) {
      console.log(error);
    }
  },
  getSinglePlaylist: async (id, data) => {
    try {
      const response = await axiosInstance().post(
        `/beatstreet/api/users/getsingleplaylist/${id}`,
        data
      );
      const results = response.data.data;
      return results;
    } catch (error) {
      console.log(error);
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
    try {
      await axiosInstance().get(`/beatstreet/api/users/favoritesongs/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  addNewPlaylist: async (id, data) => {
    try {
      await axiosInstance().post(
        `/beatstreet/api/users/createplaylist/${id}`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  },
};

export default userApis;
