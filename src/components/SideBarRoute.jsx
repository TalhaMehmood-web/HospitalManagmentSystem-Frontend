import React from "react";

const SideBarRoute = ({ subRoute, routeHandler }) => {
  return (
    <p
      onClick={routeHandler}
      className={`px-3 my-2 cursor-pointer py-2 hover:bg-slate-400 font-semibold text-white`}
    >
      {subRoute}
    </p>
  );
};

export default SideBarRoute;
