/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventDetailProvider } from "./context/EventDetails";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import "./App.css";

function App() {
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
