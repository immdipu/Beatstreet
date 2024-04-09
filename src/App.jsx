import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./AnimateRoutes";
import { SideNav, RightSideMenu, TopNav } from "./components";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { cn } from "./Utils/Helper";

function App() {
  const { showRightSidebar } = useSelector((state) => state.player);
  return (
    <BrowserRouter>
      <Toaster />
      <ToastContainer />
      <TopNav />
      <SideNav />
      <div className="flex ">
        <div
          className={cn(
            "w-[calc(100%-28px)] shrink-0 duration-700 ease-in-out will-change-transform transition-all",
            showRightSidebar && "w-[calc(100%-350px)]"
          )}
        >
          <AnimateRoutes />
        </div>

        <div className="w-7  overflow-hidden"></div>
      </div>

      <RightSideMenu />
    </BrowserRouter>
  );
}

export default App;
