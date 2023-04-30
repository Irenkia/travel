import React from "react";
import { Link } from "react-router-dom";
import { CARDS } from "../../constants/Cards";
import { useTranslation } from "react-i18next";

import "./Cards.css";

function Cards() {
  const { t } = useTranslation();
  return (
    <div className="cards">
      <h1>
        {" "}
        {t("cards_title")}
        {/* Check out these EPIC Destinations! */}
      </h1>
      <div className="cards-container row container-fluid">
        {CARDS.map((item) => {
          return (
            <div key={item.id} className="cards-item">
              <Link className="cards-item-link" to={item.path}>
                <div className="card-item-img img-fluid col-lg-4 col-md-6 col-sm-12 col-xs-12 w-100">
                  {item.img}
                </div>
                <div className="cards-item-info">
                  <p className="cards-item-text">{item.text}</p>
                  <h2>{item.label}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
