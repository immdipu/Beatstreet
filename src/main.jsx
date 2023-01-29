import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MusicProvider } from "./Context/MusicContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MusicProvider>
      <App />
    </MusicProvider>
  </React.StrictMode>
);
