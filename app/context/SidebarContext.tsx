"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SideBarContext = createContext<ContextProps>({
  isOpen: true,
  setIsOpen: (): boolean => true,
});

export const SideBarContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const UseSideBarContext = () => useContext(SideBarContext);
