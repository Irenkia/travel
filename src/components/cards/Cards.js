import React from "react";
import { Link } from "react-router-dom";
import { CARDS } from "../../constants/Cards";

import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards-container">
        {CARDS.map((item) => {
          return (
            <div key={item.id} className="cards-item">
              <Link className="cards-item-link" to={item.path}>
                <div className="card-item-img">{item.img}</div>
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
