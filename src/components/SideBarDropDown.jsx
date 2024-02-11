import React from "react";
import SideBarRoute from "./SideBarRoute";

const SideBarDropDown = ({
  height,
  Route,
  handleDropDownClick,
  clicked,
  subRoutes,
  routeHandlers,
  active,
}) => {
  return (
    <div
      className={` ${
        clicked ? `${height} bg-pink-400` : "h-[44px]"
      } transition-all duration-300 ease-in-out my-2`}
    >
      <div
        onClick={handleDropDownClick}
        className={`cursor-pointer flex items-center justify-between px-3 text-white py-2 unselectable`}
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
        {subRoutes.map((subRoute, index) => (
          <SideBarRoute
            key={index}
            routeHandler={routeHandlers[index]}
            subRoute={subRoute}
            active={active[subRoute]}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBarDropDown;
