import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from "./../button/Button";
import "./Navbar.css";
import "./../button/Button.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <ol className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </ol>
            <ol className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </ol>
            <ol className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </ol>
            <ol className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </ol>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" value="SIGN UP" path="/sign-up">
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
