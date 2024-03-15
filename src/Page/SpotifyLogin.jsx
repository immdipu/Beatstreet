import React from "react";

const SpotifyLogin = () => {
  // const redirectUrl = "http://localhost:5173/spotifyplaylist";
  // const redirectUrl = "https://beatstreet.netlify.app/spotifyplaylist";
  const redirectUrl = import.meta.env.VITE_SPOTIFY_REDIRECT_URL;
  const apiUrl = "https://accounts.spotify.com/authorize";
  const scope = [
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
  ];

  const HandleClick = () => {
    window.location.href = `${apiUrl}?client_id=${
      import.meta.env.VITE_SPOTIFY_CLIENT_ID
    }&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_daialog=true`;
  };

  return (
    <div
      className="overflow-auto flex flex-col gap-10 pt-16 items-center bg-[#1db954] h-screen
    "
    >
      <div className=" w-3/4">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
          alt="spotify"
        />
      </div>
      <div>
        <button
          onClick={HandleClick}
          className=" text-[#1db954] bg-neutral-900 hover:bg-black duration-300 transition-all ease-linear px-6 py-3 text-xl rounded-full"
        >
          Connect Spotify
        </button>
      </div>
    </div>
  );
};

export default SpotifyLogin;
