"use client";

import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  // taghir dark and light mode ke baese taghir dar range backgroundHeader
  //  va logo site mishe baese doros shodane in context shod
  const [mode, setMode] = useState("dark");

  function handleChangeMode() {
    document.documentElement.classList.toggle("dark");
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  }

  return (
    <DarkModeContext.Provider value={{ mode, handleChangeMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Context was used outside Provider");
  return context;
}

export { DarkModeProvider, useMode };
