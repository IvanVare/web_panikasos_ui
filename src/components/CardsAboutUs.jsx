import React from "react";
import CardAboutUs from "./CardAboutUs.jsx";
import dataUsersAboutUs from "../data/CardsAboutUs.json";
import "./styles/styleAboutUs.css";

function Cards() {
  return (
    <>
      <div>
        <div className="row">
          {dataUsersAboutUs.map((userCard) => (
            <div className="col cards-container" key={userCard.id}>
              <CardAboutUs
                title={userCard.title}
                imageUrl={userCard.image}
                descriprion={userCard.descriprion}
                urlLinkedin={userCard.urlLinkedin}
              ></CardAboutUs>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Cards;
