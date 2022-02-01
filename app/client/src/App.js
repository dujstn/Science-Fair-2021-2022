import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Tracker from "./components/Tracker"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    
  );
}

function About(){
  return <h1>About</h1>
}

export default App;
