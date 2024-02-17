import React from "react";

const NavIcons = ({ icon, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="border mx-2 focus:bg-slate-200 focus:border-slate-100 hover:border-slate-100  focus:text-black hover:bg-slate-200 hover:text-black text-white border-slate-700 bg-slate-800/80  px-3 py-2 rounded-full cursor-pointer"
    >
      <i className={` text-xl    fa-solid ${icon}`}></i>
    </button>
  );
};

export default NavIcons;
