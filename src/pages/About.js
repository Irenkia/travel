import React from "react";
import Footer from "../components/footer/Footer";
import { useTranslation } from "react-i18next";
import "./../styles/App.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="about">
        <h1>
          {t("about_title")}
          {/* About Us */}
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default About;
