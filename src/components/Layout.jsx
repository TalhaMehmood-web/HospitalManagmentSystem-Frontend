import React from "react";
import SideDrawer from "./SideDrawer";

import Main from "./Main";
import ChatBox from "../miscellaneous/ChatBox";

const Layout = () => {
  return (
    <div className="min-h-[100vh] unselectable w-full bg-slate-100 flex flex-row relative  ">
      <div className="w-[17%] ">
        <SideDrawer />
      </div>
      <div className="flex-1 ">
        <Main />
      </div>
      <ChatBox />
    </div>
  );
};

export default Layout;
