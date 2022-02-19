import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./src/components/Home"
import Tracker from "./src/components/Tracker"
import Changelog from "./src/components/Changelog"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/about" element={<About />} />
        <Route path="/changelog" element={<Changelog />} />
      </Routes>
    </Router>
    
  );
}

function About(){
  return <h1>About</h1>
}

export default App;
