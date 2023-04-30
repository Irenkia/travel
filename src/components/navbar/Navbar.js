import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from "./../button/Button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import "./Navbar.css";
import "./../button/Button.css";
import "./../language-switcher/LanguageSwitcher.css";

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

  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {" "}
            <strong>{t("app_name")}</strong>
            {/* TRVL */}
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <ol className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {t("nav_link1")}
                {/* Home */}
              </Link>
            </ol>
            <ol className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                {t("nav_link2")}
                {/* About */}
              </Link>
            </ol>
            <ol className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("nav_link3")}
                {/* Dashboard */}
              </Link>
            </ol>
            <ol className="nav-item">
              <LanguageSwitcher className="nav-links" />
            </ol>
            <ol className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <strong>{t("nav_link4")}</strong>
                {/* Sign Up */}
              </Link>
            </ol>
          </ul>
          {button && (
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
              value="SIGN UP"
              path="/sign-up"
            >
              <strong>{t("nav_link4")}</strong>
              {/* SIGN UP */}
            </Button>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
