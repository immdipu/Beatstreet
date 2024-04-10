import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./AnimateRoutes";
import { SideNav, RightSideMenu, TopNav } from "./components";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { cn } from "./Utils/Helper";
import BottomAudioPlayer from "./components/AudioPlayer/BottomAudioPlayer";
import { Dexie } from "dexie";

export const db = new Dexie("SongsDatabase");
db.version(1).stores({
  songs: "id, url, name, image, artist, duration",
});

function App() {
  const { showRightSidebar } = useSelector((state) => state.player);

  useEffect(() => {
    window.addEventListener("beforeunload", function (e) {
      e.preventDefault();
    });
    return () => {
      window.removeEventListener("beforeunload", function (e) {
        e.preventDefault();
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <Toaster />
      <ToastContainer />
      <TopNav />
      <SideNav />
      <div className="flex ">
        <div
          className={cn(
            "w-[calc(100%-28px)] max-md:w-full bottomPlayerGap shrink-0 duration-700 ease-in-out will-change-transform transition-all",
            showRightSidebar && "w-[calc(100%-380px)]"
          )}
        >
          <AnimateRoutes />
        </div>

        <div className="w-7 max-md:w-0   overflow-hidden"></div>
      </div>

      <RightSideMenu />
      <BottomAudioPlayer />
    </BrowserRouter>
  );
}

export default App;
