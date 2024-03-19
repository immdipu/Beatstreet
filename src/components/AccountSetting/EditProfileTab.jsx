import React from "react";
import { useSelector } from "react-redux";

export const EditProfileTab = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <br />
      <div>
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            defaultValue={user?.fullName}
            type="text"
            className="w-1/2 px-2 mt-2 text-neutral-400 focus-within:text-neutral-100 bg-neutral-700 rounded-md h-10"
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="firstName">Email</label>
          <input
            defaultValue={user?.email}
            placeholder="@example.com"
            type="email"
            className="w-1/2 px-2 mt-2 text-neutral-400 focus-within:text-neutral-100 bg-neutral-700 rounded-md h-10"
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="firstName">Password</label>
          <input
            placeholder="*********"
            defaultValue={user?.email}
            type="password"
            className="w-1/2 px-2 mt-2 text-neutral-400 focus-within:text-neutral-100 bg-neutral-700 rounded-md h-10"
          />
        </div>
        <div>
          <button className="bg-green-500 text-white px-3 py-1 rounded-md mt-5">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
