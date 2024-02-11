import React from "react";

const SideBarRoute = ({ subRoute, routeHandler, active }) => {
  return (
    <p
      onClick={routeHandler}
      className={`px-3 my-2 cursor-pointer py-2 ${
        active ? "bg-pink-500" : "hover:bg-pink-500"
      } font-semibold text-white`}
    >
      {subRoute}
    </p>
  );
};

export default SideBarRoute;
