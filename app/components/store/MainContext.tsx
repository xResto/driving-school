'use client';

import React, { createContext, useContext, useState } from 'react';

interface MainContextType {
  children: React.ReactNode;
};

type MainContext = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainContext = createContext<MainContext | null>(null);

const MainContextProvider = ({ children }: MainContextType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MainContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

export function useMainContext() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMainContext must be used within a MainContextProvider');
  }
  return context;
}
