import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Landing from "./components/Landing"; // Import Landing component
import Booking from "./components/Booking"; // Import Booking component
import "./components/landing.css"; // Import CSS for Landing

function App() {
  return (
    <Router>
      {/* Navbar (Visible on all pages) */}
      <Navbar />

      {/* Main Routes */}
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Booking Page */}
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
