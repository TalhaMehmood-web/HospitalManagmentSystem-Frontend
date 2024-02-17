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
        clicked ? `${height} bg-pink-400 px-4` : "h-[44px] px-0"
      } transition-all duration-300 ease-in-out my-2 `}
    >
      <div
        onClick={handleDropDownClick}
        className={`cursor-pointer flex items-center  mlg:justify-between px-3 text-white py-2 unselectable`}
      >
        <i className="fa-solid fa-house"></i>
        <p className="text-lg hidden mlg:block  flex-1 justify-start ml-3 font-semibold">
          {Route}
        </p>
        <i
          className={`hidden mlg:block fa-solid ${
            clicked ? "fa-angle-up" : "fa-angle-down"
          }`}
        ></i>
      </div>
      <div
        className={`transition-opacity ${!clicked && "invisible opacity-0 "} ${
          clicked && "opacity-100 px-4"
        }`}
      >
        {subRoutes?.map((subRoute, index) => (
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
