import React, { useState } from "react";
import { Link } from "react-router-dom";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import {
  SinglePlaylistCard,
  LoadingSpinner,
  CreatePlaylistModal,
} from "../components";
import AddIcon from "@mui/icons-material/Add";
import ListItemButton from "@mui/material/ListItemButton";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import userApis from "../Api/userApi";

const UserPlaylists = () => {
  const [showCreatePlaylistModal, setShowCreatePlaylistModal] = useState(false);
  const user = useSelector((state) => state.user);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllPlaylist"],
    queryFn: () => userApis.getAllPlaylist(),
  });

  if (!user.islogged) {
    return (
      <div className="flex justify-center h-fit overflow-auto items-center mt-24">
        <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
          Sorry, we couldn't fetch your playlist at this time.
          <br />
          <br />
          Plalylist is only available to logged-in users. Please log in to view
          your Playlists.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-auto pl-7 mr-8 max-md:pl-2 mt-8 ">
      <div>
        <Link
          to={"/importplaylists"}
          className="flex items-center text-base hover:bg-lightBlue hover:bg-opacity-60 transition-all duration-300 rounded-md py-4 px-4  gap-3 text-neutral-300 f"
        >
          <div className="grid place-items-center bg-[#34343275] rounded-md p-2 scale-90">
            <LibraryMusicIcon className="text-neutral-200" />
          </div>
          Import Playlist
        </Link>
        <ListItemButton
          className="flex gap-3 items-center"
          sx={[{ borderRadius: 2 }]}
          onClick={() => setShowCreatePlaylistModal(true)}
        >
          <div className="grid place-items-center bg-[#34343275] rounded-md p-2 scale-90">
            <AddIcon className="text-neutral-200" />
          </div>
          <p className="text-neutral-300"> Create new playlist</p>
        </ListItemButton>
      </div>
      <section className="mt-4 flex flex-col mb-12">
        <h3 className="text-xl text-neutral-200 mb-2 pl-4 mt-4">
          Your Playlists
        </h3>
        {isLoading && (
          <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
            <LoadingSpinner size={30} />
          </div>
        )}

        {isError && (
          <div className="w-full flex justify-center items-center mt-10">
            <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
              Sorry, we couldn't fetch your playlist at this time.
              <br />
              <br />
              Please try again later.
            </p>
          </div>
        )}

        {data && data.length === 0 && (
          <div className="w-full flex justify-center items-center mt-10">
            <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
              You haven't created any playlist yet.
            </p>
          </div>
        )}

        <>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <SinglePlaylistCard key={index} {...item} />
            ))}
        </>
      </section>
      <AnimatePresence>
        {showCreatePlaylistModal && (
          <CreatePlaylistModal hidePlaylist={setShowCreatePlaylistModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserPlaylists;
