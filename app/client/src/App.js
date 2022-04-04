import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Tracker from "./components/Tracker"
import TrackerBrk from "./components/TrackerBrk"
import Changelog from "./components/Changelog"
import About from "./components/About"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/tracker-brk" element={<TrackerBrk />} />
        <Route path="/about" element={<About />} />
        <Route path="/changelog" element={<Changelog />} />
      </Routes>
    </Router>
    
  );
}

export default App;
