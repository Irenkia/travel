import React, { useState } from "react";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";
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
    </div>
  );
};

export default Footer;
