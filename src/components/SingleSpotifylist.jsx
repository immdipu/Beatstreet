import React from "react";
import { SpotifyImageFetch } from "./../Utils/Helper";
import musicApi from "./../Api/Api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
const SingleSpotifylist = ({ image, name, songs, id, token }) => {
  const getAllSongsFromSavan = useMutation({
    mutationFn: ({ token, id, name, image }) =>
      musicApi.getSpotifyPlaylistSongs({ token, id, name, image }),
    onSuccess: (data) => {
      if (data?.response?.status === 400) {
        return toast.error(
          data?.response?.data?.message || "Something Went Wrong"
        );
      }
      toast.success(data.message || "Playlist Imported Successfully", {
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error(error.message || "Something Went Wrong");
    },
  });

  const HandleClick = () => {
    getAllSongsFromSavan.mutate({ token, id, name, image });
  };

  return (
    <div className="flex overflow-hidden cursor-pointer hover:bg-lightBlue rounded-md items-center pr-3">
      <div className="flex  w-full items-center gap-5 ">
        {image.length !== 0 ? (
          <img
            className="rounded-md w-14"
            src={SpotifyImageFetch(image)}
            alt="spotify"
          />
        ) : (
          <div className="w-14 rounded-md bg-black text-neutral-300 text-center text-sm h-full">
            No Cover
          </div>
        )}
        <div className="">
          <h3 className="text-neutral-200 tracking-wide text-base ">{name}</h3>
          <p className="text-neutral-400 text-xs mt-1">{songs} songs</p>
        </div>
      </div>
      <button
        onClick={HandleClick}
        disabled={getAllSongsFromSavan.isPending}
        className="bg-sky-700 text-white px-3 py-1 rounded-md hover:bg-sky-600 duration-300 transition-all ease-linear  w-fit h-fit float-right"
      >
        {getAllSongsFromSavan.isPending ? (
          <div className="w-12">
            <ClipLoader size={17} color="#fff" speedMultiplier={3} />
          </div>
        ) : (
          "Import"
        )}
      </button>
    </div>
  );
};

export default SingleSpotifylist;
