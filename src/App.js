import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";

import "./styles/App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/services" element={<About />} />
            <Route path="/products" element={<Dashboard />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
