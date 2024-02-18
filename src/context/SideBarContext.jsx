import { createContext, useContext, useState } from "react";

const SideDrawerContext = createContext();

export const useSideDrawer = () => {
  return useContext(SideDrawerContext);
};

export const SideDrawerProvider = ({ children }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <SideDrawerContext.Provider value={{ toggleMenu, isMenuClicked }}>
      {children}
    </SideDrawerContext.Provider>
  );
};
