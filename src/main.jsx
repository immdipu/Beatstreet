import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MusicProvider } from "./Context/MusicContext";
import { PlayerProvider } from "./Context/PlayerContext";
import { UserProvider } from "./Context/UserContext";
import { PlaylistProvider } from "./Context/ImportPlaylistContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./redux/store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MusicProvider>
          <PlayerProvider>
            <UserProvider>
              <PlaylistProvider>
                <App />
              </PlaylistProvider>
            </UserProvider>
          </PlayerProvider>
        </MusicProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
