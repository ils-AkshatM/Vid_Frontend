import React from "react";
import { victory } from "../../assets";

function Logo({ className, inline = false, mobile = false }) {
  return (
    <div
      className={`font-bold border-b-2 border-[#DDD] text-xl flex items-center justify-center w-full ${className} `}
    >
      <div
        className={`flex ${inline ? "flex-row" : " flex-col"} ${
          mobile && "hidden md:block"
        }`}
      >
        <div className="text-2xl text-center">Standout</div>
      </div>
      <img src={victory} alt="logo" className="w-10 h-10 inline-block mr-2" />
    </div>
  );
}

export default Logo;
