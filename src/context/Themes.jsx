/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [themeData, setAllThemeData] = useState({
    themes: [
      {
        id: 1,
        colorHexCode: "#000000",
      },
      {
        id: 2,
        colorHexCode: "#800080",
      },
      {
        id: 3,
        colorHexCode: "#0000FF",
      },
      {
        id: 4,
        colorHexCode: "#9B9999",
      },
    ],
    preferredThemeId: 1,
  });
  return (
    <ThemeContext.Provider value={{ themeData, setAllThemeData }}>
      {children}
    </ThemeContext.Provider>
  );
}
