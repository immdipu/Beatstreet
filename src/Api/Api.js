import axios from "axios";

const BASEURL = import.meta.env.VITE_BASE_URL;
const musicApi = {
  SingleArtist: async (id) => {
    try {
      const response = await axios.get(`${BASEURL}/artists?id=${id}`);
      const result = response.data.data || [];
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  ArtistSongs: async ({ id, pageParam }) => {
    try {
      const response = await axios.get(
        `${BASEURL}/artists/${id}/songs?page=${pageParam}`
      );
      const result = response.data.data || [];
      return result?.songs;
    } catch (error) {
      console.log(error);
    }
  },
  ArtistAlbum: async ({ id, pageParam }) => {
    try {
      const response = await axios.get(
        `${BASEURL}/artists/${id}/albums?page=${pageParam}`
      );
      const result = response.data.data || [];
      return result?.albums;
    } catch (error) {
      console.log(error);
    }
  },

  SingleSong: async (id) => {
    try {
      const res = await axios.get(`${BASEURL}/songs/${id}`);
      const result = res.data.data[0];
      return result;
    } catch (error) {
      console.log("error", error);
    }
  },
};

export default musicApi;
