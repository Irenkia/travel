import React from "react";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";
import "../button/Button.css";
import "./Basic.css";

const Basic = () => {
  const { t } = useTranslation();
  return (
    <div className="basic-container">
      <h1>
        {t("basic_title")}
        {/* ADVENTURE AWAITS */}
      </h1>
      <p>
        {t("basic_text")}
        {/* What are you waiting for? */}
      </p>
      <div className="basic-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          value="GET STARTED"
          path="/about"
        >
          {t("basic_btn_get")}
          {/* GET STARTED */}
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("Hello")}
          value="SEE OFERS"
          path="/dashboard"
        >
          {t("basic_btn_see")}
          {/* SEE OFFERS */}
        </Button>
      </div>
    </div>
  );
};

export default Basic;
