import React from "react";
import LandingScreen from "./features/LandingPage/LandingScreen";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <LandingScreen />
    </Router>
  );
}

export default App;
