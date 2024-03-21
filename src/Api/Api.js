import axios from "axios";
import userApis from "./userApi";
import toast from "react-hot-toast";

const BASEURL = import.meta.env.VITE_BASE_URL;
const musicApi = {
  SingleArtist: async (id) => {
    const response = await axios.get(`${BASEURL}/artists?id=${id}`);
    const result = response.data.data || [];
    return result;
  },
  SingleAlbum: async (id) => {
    const response = await axios.get(`${BASEURL}/albums?id=${id}`);
    const result = response.data.data || [];
    return result;
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
  SinglePlaylist: async ({ id, pageParam = 1 }) => {
    const response = await axios.get(
      `${BASEURL}/playlists?id=${id}&page=${pageParam}`
    );
    const result = response.data.data || [];
    return result;
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
  MulitpleSongs: async (id) => {
    try {
      const res = await axios.get(`${BASEURL}/songs/${id}`);
      const result = res.data.data;
      return result;
    } catch (error) {
      console.log("error", error);
    }
  },
  GlobalSearch: async (query) => {
    const res = await axios.get(`${BASEURL}/search?query=${query}`);
    const result = res.data;
    return result;
  },

  getSongFromSaavn: async (query) => {
    let formattedTerm = query
      .replace(/[^\w\s]/gi, " ")
      .replace(/\s+/g, " ")
      .split(" ")
      .join("+");
    try {
      const response = await axios.get(
        `${BASEURL}/search/songs?query=${formattedTerm}&page=1&limit=10`
      );
      const result = response.data.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  getSpotifyPlaylists: async (token) => {
    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "apllication/json",
          },
        }
      );
      const result = response.data.items;
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getSpotifyPlaylistSongs: async ({ token, id, name, image }) => {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "apllication/json",
            },
          })
          .then((response) => {
            const result = response.data.items;
            let newplayList = [];
            let promises = result.map((item) => {
              let track = item.track;
              if (track.track && track.name !== "") {
                let formattedTerm = track.name.replace(/\([^)]*\)/g, "").trim();
                let data = {
                  name: formattedTerm,
                  artistName: track.artists[0].name,
                };
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    musicApi
                      .getSongFromSaavn(data.name)
                      .then((res) => {
                        let newTrack = res?.results.find((item) => {
                          if (item.name === data.name) {
                            return item;
                          }
                        });
                        if (newTrack) {
                          resolve(newTrack.id);
                          toast.success(
                            ` ${data.name} by ${data.artistName} imported successfully`,
                            {
                              position: "top-left",
                            }
                          );
                        } else {
                          toast.error(
                            `${data.name} by ${data.artistName} not found`,
                            {
                              position: "top-right",
                            }
                          );
                          resolve(null);
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                        resolve(null);
                      });
                  }, 3000);
                });
              }
            });
            Promise.all(promises).then(async (data) => {
              newplayList = data.filter((item) => item !== null);
              let playlist = {
                name: name ?? Math.random().toString(36).substring(7),
                image: image,
                songsIds: newplayList,
              };
              if (newplayList.length === 0) {
                toast.error("No songs found in the playlist");
              } else {
                const res = await userApis.addNewPlaylist(playlist);

                resolve(res);
              }
            });
          });
      } catch (error) {
        reject(error);
      }
    });
  },
};
export default musicApi;
