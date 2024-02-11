import React from "react";
import SideDrawer from "./SideDrawer";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="min-h-[100vh] w-full bg-slate-100 flex flex-row  ">
      <div className="w-[17%] ">
        <SideDrawer />
      </div>
      <div className="flex-1 ">
        <Main />
      </div>
    </div>
  );
};

export default Layout;
