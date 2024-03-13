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
    console.log("pageParam", pageParam);
    console.log("id", id);
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
};

export default musicApi;
