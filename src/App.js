import React from "react";
import LandingScreen from "./features/LandingPage/LandingScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./features/LoginPage/Login";

function App() {
  return (
    <Router>
        <div>
        <Route path="/" component={LandingScreen} exact />
        <Route path="/login/" component={Login} exact />
        </div>
    </Router>
  );
}

export default App;
