import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <Link to='/' className='navbar-logo'>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
          <ul className="nav-menu">
            <ol className="nav-item">
              <Link to="/" className="nav-links">Home</Link>
            </ol>
            <ol className="nav-item">
              <Link to="/about" className="nav-links">About</Link>
            </ol>
            <ol className="nav-item">
              <Link to="/dashboard" className="nav-links">Dashboard</Link>
            </ol>
            <ol className="nav-item">
              <Link to="/sign-up" className="nav-links">Sign Up</Link>
            </ol>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
