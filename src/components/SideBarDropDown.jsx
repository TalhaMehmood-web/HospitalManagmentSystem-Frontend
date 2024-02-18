import React, { useState } from "react";
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
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [activeIcon, setActiveIcon] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 990);

  const iconsArray = [
    {
      route: "Dashboard",
      icon: "fa-house",
    },
    {
      route: "Doctors",
      icon: "fa-user-doctor",
    },
    {
      route: "Patients",
      icon: "fa-bed-pulse",
    },
    {
      route: "Appointments",
      icon: "fa-pen-to-square",
    },
    {
      route: "Payment",
      icon: "fa-dollar-sign",
    },
    {
      route: "Allotment",
      icon: "fa-key",
    },
  ];

  const handleToolTip = (event) => {
    event.preventDefault();
    const iconPosition = event.target.getBoundingClientRect();
    setTooltipPosition({
      top: iconPosition.bottom,
      left: iconPosition.right,
    });
    setActiveIcon(event.target);
  };

  const hideTooltips = () => {
    setActiveIcon(null);
  };
  const updateSize = () => {
    if (window.innerWidth <= 990) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  window.addEventListener("resize", updateSize);

  return (
    <div
      className={` ${
        clicked && !isSmallScreen
          ? `${height} bg-pink-400 px-2`
          : "h-[44px] px-0"
      } transition-all duration-300 ease-in-out my-2 `}
    >
      <div
        onClick={
          !isSmallScreen && isSmallScreen !== null
            ? handleDropDownClick
            : undefined
        }
        className={`cursor-pointer flex ${
          isSmallScreen && "flex-col"
        } items-center justify-center  990px:justify-between px-3 text-white py-2 unselectable`}
      >
        {iconsArray?.map((item, index) => (
          <i
            key={index}
            onClick={isSmallScreen ? handleToolTip : undefined}
            className={`fa-solid ${Route === item.route && item.icon}   ${
              isSmallScreen ? "w-full text-center " : " "
            } `}
          ></i>
        ))}
        <p className="text-lg hidden 990px:block  flex-1 justify-start ml-3 font-semibold">
          {Route}
        </p>
        <i
          className={`hidden 990px:block  fa-solid ${
            clicked ? "fa-angle-up" : "fa-angle-down"
          }`}
        ></i>
      </div>
      <div
        className={`transition-opacity ${
          (!clicked || isSmallScreen) && "invisible opacity-0 "
        } ${clicked && isSmallScreen && "opacity-100 px-4"}`}
      >
        {!isSmallScreen &&
          subRoutes?.map((subRoute, index) => (
            <SideBarRoute
              key={index}
              routeHandler={routeHandlers[index]}
              subRoute={subRoute}
              active={active[subRoute]}
            />
          ))}
      </div>
      {isSmallScreen && (
        <div
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
          }}
          className={`tooltip absolute transition-all duration-300 ease-in-out bg-white text-slate-700 rounded-md p-2 ${
            activeIcon ? "" : "hidden"
          } left-[100px] top-full`}
        >
          <ul className="list-none m-0 p-0">
            {subRoutes?.map((subRoute, index) => (
              <li
                onClick={(e) => {
                  routeHandlers[index]();
                  e.stopPropagation(); // Stop the event propagation to prevent closing tooltips
                }}
                key={index}
                className="py-2 px-2 font-semibold border-b border-gray-300"
              >
                {subRoute}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBarDropDown;
