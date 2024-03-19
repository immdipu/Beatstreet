import React, { useState } from "react";
import Avatar from "../components/AccountSetting/Avatar";
import { useSelector } from "react-redux";
import FavoritesSongsTab from "./../components/AccountSetting/FavoriteSongTab";
import RecentSongsTab from "../components/AccountSetting/RecentTab";
import PlaylistTab from "../components/AccountSetting/PlaylistTab";
import { EditProfileTab } from "../components/AccountSetting/EditProfileTab";

const UserAccountSetting = () => {
  const user = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState("edit");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!user.islogged) {
    return (
      <div className="text-neutral-50  h-[80vh] grid place-content-center overflow-hidden">
        <h1 className="text-lg text-center text-neutral-300">
          You need to login to see this page.
          <br /> Please login first. Thank you!
        </h1>
      </div>
    );
  }

  return (
    <div className="text-neutral-50">
      <div className="flex flex-col pl-10 gap-4">
        <Avatar />
        <div>
          <h3 className="text-xl font-bold">
            {user?.fullName}{" "}
            {user?.isVerified && (
              <span className="bg-green-500 px-1 rounded-2xl text-white">
                verified
              </span>
            )}
          </h3>
        </div>
        <div className="flex gap-4">
          <TabButton tab="edit" activeTab={activeTab} onClick={handleTabClick}>
            Edit Profile
          </TabButton>
          <TabButton
            tab="favorite"
            activeTab={activeTab}
            onClick={handleTabClick}
          >
            Favorite
          </TabButton>
          <TabButton
            tab="recent"
            activeTab={activeTab}
            onClick={handleTabClick}
          >
            Recent
          </TabButton>
          <TabButton
            tab="playlist"
            activeTab={activeTab}
            onClick={handleTabClick}
          >
            Playlist
          </TabButton>
        </div>
        <section className="pl-0">
          {activeTab === "edit" && <EditProfileTab />}
          {activeTab === "favorite" && <FavoritesSongsTab />}
          {activeTab === "recent" && <RecentSongsTab />}
          {activeTab === "playlist" && <PlaylistTab />}
        </section>
      </div>
    </div>
  );
};

export default UserAccountSetting;

const TabButton = ({ tab, activeTab, onClick, children }) => {
  const isActive = tab === activeTab;

  return (
    <button
      className={`${
        isActive ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-200"
      } px-4 py-2 rounded-md`}
      onClick={() => onClick(tab)}
    >
      {children}
    </button>
  );
};
