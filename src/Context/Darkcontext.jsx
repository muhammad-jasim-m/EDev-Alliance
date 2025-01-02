import React, { createContext, useState, useContext,useEffect } from "react";

// Create the context
const DarkModeContext = createContext();

// Create a provider component
const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [toogle,setToogle] = useState(false);



  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  // Toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode,toogle,setToogle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook for accessing the context
const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export { DarkModeProvider, useDarkMode };
