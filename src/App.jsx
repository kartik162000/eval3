import React from "react";
import { EventDetailProvider } from "./context/EventDetails";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <EventDetailProvider>
      <div className="App">
        <Home />
      </div>
    </EventDetailProvider>
  );
}

export default App;
