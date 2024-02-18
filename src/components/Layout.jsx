import { useEffect, useState } from "react";
import SideDrawer from "./SideDrawer";
import { useSideDrawer } from "../context/SideBarContext";
import Main from "./Main";
import ChatBox from "../miscellaneous/ChatBox";

const Layout = () => {
  const [isHideSideBar, setIsHideSideBar] = useState(window.innerWidth <= 900);
  const { isMenuClicked } = useSideDrawer();
  const hideSideBar = () => {
    if (window.innerWidth <= 900) {
      setIsHideSideBar((prev) => (prev = true));
    } else {
      setIsHideSideBar((prev) => (prev = false));
    }
  };
  useEffect(() => {
    if (isMenuClicked) {
      setIsHideSideBar((prev) => (prev = false));
    } else {
      setIsHideSideBar((prev) => (prev = true));
    }
  }, [isMenuClicked]);
  window.addEventListener("resize", hideSideBar);
  return (
    <div className="min-h-[100vh]  w-full bg-slate-100 flex flex-row relative  ">
      <div
        className={`slg:w-[17rem]  transition-all duration-300 ease-in 990px:w-[12.5rem] w-[5rem] ${
          isHideSideBar ? "hidden transition-all duration-300 ease-in" : "block"
        } transition-all duration-300 ease-in-out `}
      >
        <SideDrawer />
      </div>
      <div className="flex-1 slg:w-[calc(100vw-17rem)]  900px:w-[calc(100vw-12.5rem)] ">
        <Main />
      </div>
      <ChatBox />
    </div>
  );
};

export default Layout;
