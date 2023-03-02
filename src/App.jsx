/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventDetailProvider } from "./context/EventDetails";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import "./App.css";
import { ThemeContext } from "./context/Themes";
import makeRequest from "./utils/makeRequest";
import { GET_ALL_THEMES } from "./constants/apiEndPoints";

function App() {
  const { setAllThemeData } = useContext(ThemeContext);
  useEffect(() => {
    makeRequest(GET_ALL_THEMES).then((response) => {
      setAllThemeData(response);
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <EventDetailProvider>
                <Home />
              </EventDetailProvider>
            }
          />
          <Route
            path="/event/:id"
            element={
              <EventDetailProvider>
                <EventDetail />
              </EventDetailProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
