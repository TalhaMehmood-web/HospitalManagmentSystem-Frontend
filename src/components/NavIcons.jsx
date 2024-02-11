import React from "react";

const NavIcons = ({ icon }) => {
  return (
    <div className="border mx-2 hover:bg-slate-200 border-slate-300 bg-slate-300 text-black px-3 py-2 rounded-full cursor-pointer">
      <i className={` text-xl    fa-solid ${icon}`}></i>
    </div>
  );
};

export default NavIcons;
