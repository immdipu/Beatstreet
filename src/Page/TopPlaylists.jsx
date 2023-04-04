import React, { useEffect } from "react";
import axios from "axios";

const url =
  "https://www.jiosaavn.com/api.php?__call=content.getFeaturedPlaylists&fetch_from_serialized_files=true&p=1&n=50&api_version=4&_format=json&_marker=0&ctx=wap6dot0&languages=hindi";

const TopPlaylists = () => {
  useEffect(() => {
    const data = makeRequest(url);
    console.log(data);
  });

  async function makeRequest(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return <div>TopPlaylists</div>;
};

export default TopPlaylists;
