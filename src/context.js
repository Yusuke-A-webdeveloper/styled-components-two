import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, toggleMenu, menu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
