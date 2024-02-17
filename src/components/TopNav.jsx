import React from "react";
import NavIcons from "./NavIcons";
import { useSideDrawer } from "../context/SideBarContext";
const TopNav = () => {
  const { toggleMenu, isMenuClicked } = useSideDrawer();
  console.log(isMenuClicked);
  return (
    <div className="flex justify-between items-center bg-white px-2 py-1">
      <img
        className=" block mlg:hidden "
        src="https://www.konnectplugins.com/proclinic/Vertical/images/logo-dark.png"
        alt=""
      />
      <div className="flex-1 flex items-center justify-end">
        <NavIcons handleClick={toggleMenu} icon={"fa-bars"} />
        <NavIcons icon={"fa-magnifying-glass"} />
        <NavIcons icon={"fa-bullhorn"} />
        <NavIcons icon={"fa-user"} />
      </div>
    </div>
  );
};

export default TopNav;
