/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const AllEventDataContext = createContext({});

export function EventDetailProvider({ children }) {
  const [allEventData, setAllEventData] = useState(null);
  return (
    <AllEventDataContext.Provider value={{ allEventData, setAllEventData }}>
      {children}
    </AllEventDataContext.Provider>
  );
}
