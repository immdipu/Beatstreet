import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./AnimateRoutes";
import { SideNav, RightSideMenu, Alert, TopNav } from "./components";
import { useMusicContext } from "./Context/MusicContext";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
function App() {
  const { alert_show } = useMusicContext();
  let alert = null;
  if (alert_show) {
    alert = <Alert />;
  }
  return (
    <BrowserRouter>
      <Toaster />
      <ToastContainer />
      {/* <div className="grid grid-cols-[max-content,auto,max-content]"> */}
      <TopNav />
      <SideNav />
      <div className="flex ">
        <div className="w-[calc(100%-28px)]">
          <AnimateRoutes />
        </div>

        <div className="w-7  overflow-hidden"></div>
      </div>

      <RightSideMenu />
    </BrowserRouter>
  );
}

export default App;
