import React from "react";
import RippleButton from "ripple-effect-reactjs";

const ResetPwd = () => {
  return (
    <div className="max-w-sm w-full mx-auto bg-[#1e1f22] py-5 px-6 mt-28 rounded-md">
      <h3 className="text-slate-300 text-center text-xl">Change password</h3>
      <div className="flex flex-col gap-5 mt-5">
        <input
          type="password"
          placeholder="New password"
          className="h-9 bg-transparent text-white placeholder:font-thin placeholder:font-Rubik px-2 border border-slate-200 border-opacity-50  rounded-sm focus:border-opacity-100 outline-none"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="h-9 bg-transparent text-white placeholder:font-thin placeholder:font-Rubik px-2 border border-slate-200 border-opacity-50  rounded-sm focus:border-opacity-100 outline-none"
        />
      </div>
      <div className="w-44 mt-8">
        <RippleButton color={"#519aff2e"} speed={500}>
          <button className="text-skyBlue select-none bg-[#519aff2e] w-full px-3 py-2 rounded-md">
            Change password
          </button>
        </RippleButton>
      </div>
    </div>
  );
};

export default ResetPwd;
