import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MusicProvider } from "./Context/MusicContext";
import { PlayerProvider } from "./Context/PlayerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MusicProvider>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </MusicProvider>
  </React.StrictMode>
);
