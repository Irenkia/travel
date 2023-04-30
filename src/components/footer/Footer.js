import React, { useState } from "react";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = () => {
    console.log(email);
  };
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          {t("footer_title")}
          {/* Join the Adventure newsletter to receive our best vacation deals */}
        </p>
        <p className="footer-subscription-text">
          {t("footer_text")}
          {/* You can unsubscribe at any time */}
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              type="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
              name="email"
              placeholder={t("footer_email")}
              // placeholder="Your Email"
            />
            <Button
              onClick={() => handleSubmit()}
              buttonStyle="btn--outline"
              path="./about"
            >
              {t("footer_subscribe")}
              {/* Subscribe */}
            </Button>
          </form>
        </div>
      </section>

      <section class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>
              {t("footer_links_title1")}
              {/* About Us */}
            </h2>
            <Link to="/about">{t("footer_link_about1")}</Link>
            <Link to="/">{t("footer_link_about2")}</Link>
            <Link to="/">{t("footer_link_about3")}</Link>
            <Link to="/">{t("footer_link_about4")}</Link>
            <Link to="/">{t("footer_link_about5")}</Link>
          </div>
          <div class="footer-link-items">
            <h2>
              {t("footer_links_title2")}
              {/* Contact Us */}
            </h2>
            <Link to="/sign-up">{t("footer-link-sign-up1")}</Link>
            <Link to="/">{t("footer-link-sign-up2")}</Link>
            <Link to="/">{t("footer-link-sign-up3")}</Link>
            <Link to="/">{t("footer-link-sign-up4")}</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>
              {t("footer_links_title3")}
              {/* Videos */}
            </h2>
            <Link to="/">{t("footer_link_video1")}</Link>
            <Link to="/">{t("footer_link_video2")}</Link>
            <Link to="/">{t("footer_link_video3")}</Link>
            <Link to="/">{t("footer_link_video4")}</Link>
          </div>
          <div class="footer-link-items">
            <h2>
              {t("footer_links_title4")}
              {/* Social Media */}
            </h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              {t("footer_social_media_logo")}
              {/* TRVL */}
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">
            {t("footer_social_media_logo_small")}
            {/* TRVL © 2023 */}
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
