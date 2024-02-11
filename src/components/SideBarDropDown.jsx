import React, { useState } from "react";
import SideBarRoute from "./SideBarRoute";

const SideBarDropDown = ({
  Route,
  handleDropDownClick,
  clicked,
  routeHandler1,
  routeHandler2,
  routeHandler3,
  routeHandler4,
  subRoute1,
  subRoute2,
  subRoute3,
  subRoute4,
}) => {
  return (
    <>
      <div
        className={` ${
          clicked ? "h-[252px] bg-pink-400" : "h-[44px]"
        }  transition-all duration-300 ease-in-out my-2`}
      >
        <div
          onClick={handleDropDownClick}
          className={`cursor-pointer flex items-center justify-between px-3 
            text-white py-2 unselectable`}
        >
          <p className="text-lg font-semibold">{Route}</p>
          <i
            className={`fa-solid ${clicked ? "fa-angle-up" : "fa-angle-down"}`}
          ></i>
        </div>
        <div
          className={`transition-opacity ${!clicked && "invisible opacity-0"} ${
            clicked && "opacity-100"
          }`}
        >
          <SideBarRoute routeHandler={routeHandler1} subRoute={subRoute1} />
          <SideBarRoute routeHandler={routeHandler2} subRoute={subRoute2} />
          <SideBarRoute routeHandler={routeHandler3} subRoute={subRoute3} />
          <SideBarRoute routeHandler={routeHandler4} subRoute={subRoute4} />
        </div>
      </div>
    </>
  );
};

export default SideBarDropDown;
