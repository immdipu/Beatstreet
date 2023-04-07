import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MusicProvider } from "./Context/MusicContext";
import { PlayerProvider } from "./Context/PlayerContext";
import { UserProvider } from "./Context/UserContext";
import { PlaylistProvider } from "./Context/ImportPlaylistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MusicProvider>
      <PlayerProvider>
        <UserProvider>
          <PlaylistProvider>
            <App />
          </PlaylistProvider>
        </UserProvider>
      </PlayerProvider>
    </MusicProvider>
  </React.StrictMode>
);
