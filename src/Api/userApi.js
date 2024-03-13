const USER_BASE_URL = "https://colorful-fly-attire.cyclic.app/beatstreet";

import axios from "axios";

const axiosInstance = axios.create({ withCredentials: true });

const userApis = {
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
};

export default userApis;
