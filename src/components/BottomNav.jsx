import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const BottomNav = () => {
  const location = useLocation();
  const locationPath = location.pathname;
  const page =
    locationPath.split("/")[2]?.split("-")[0]?.toUpperCase() +
    " " +
    locationPath.split("/")[2]?.split("-")[1]?.toUpperCase();

  return (
    <div className="bg-slate-800 w-full text-white flex justify-between items-center py-2 px-5">
      <div>
        <p className="font-semibold text-xl unselectable">
          {page.includes("undefined") ? "Dashboard" : page}
        </p>
      </div>

      <button className=" unselectable bg-gradient-to-r font-semibold from-[#b24591] via-[#CA5B95] to-[#E17097] px-2 py-1 border border-transparent rounded-full">
        Home / Dashboard / {page.toLowerCase()}
      </button>
    </div>
  );
};

export default BottomNav;
