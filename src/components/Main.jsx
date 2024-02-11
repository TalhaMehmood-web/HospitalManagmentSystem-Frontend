import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
// import FormInput from "./FormInput";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div>
        <div>
          <TopNav />
        </div>
        <div>
          <BottomNav />
        </div>
      </div>
      <div className="bg-white m-5 px-3 py-2 text-black ">{<Outlet />}</div>
    </div>
  );
};

export default Main;
