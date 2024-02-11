import React from "react";
import NavIcons from "./NavIcons";

const TopNav = () => {
  return (
    <div className="flex w-full justify-end items-center py-1 bg-white">
      <NavIcons icon={"fa-bars"} />
      <NavIcons icon={"fa-magnifying-glass"} />
      <NavIcons icon={"fa-bullhorn"} />
      <NavIcons icon={"fa-user"} />
    </div>
  );
};

export default TopNav;
