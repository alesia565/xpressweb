import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";
import WhatWeDo from "./components/WhatWeDo";
import logo from "./assets/logo.png";
import './i18next';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="logo1-container">
        <a href="/">
        <img src={logo} alt="XpressWeb" className="logo1" />
        </a>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;