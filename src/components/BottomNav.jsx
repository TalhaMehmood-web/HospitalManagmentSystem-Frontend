import React from "react";

const BottomNav = () => {
  return (
    <div className="bg-slate-800 w-full text-white flex justify-between items-center py-2 px-5">
      <div>
        <p className="font-semibold text-xl unselectable">Add Doctor</p>
      </div>

      <button className=" unselectable bg-gradient-to-r font-semibold from-[#b24591] via-[#CA5B95] to-[#E17097] px-2 py-1 border border-transparent rounded-full">
        Home / Doctors / Add Doctors
      </button>
    </div>
  );
};

export default BottomNav;
