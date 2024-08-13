import React from "react";
import CardFunctions from "../components/CardFunctions";
import "../components/styles/styleCardFunctions.css";
import styled from "styled-components";
import dataFunctions from "../data/CardFunctions.json";

const ImageSchool = styled.img`
  width: 50%;
  max-width: 60%;
`;

export default function Functions() {
  return (
    <>
      <div className="functions-content">
        <div className="functions-content-section">
          <div className="image-container">
            <ImageSchool
              src="src/assets/images/icon_panikasos_night.png"
              alt="uatx"
            />
          </div>
          <div className="text-container">
            <h2>Our leadership</h2>
            <p>somos alumnos de la uatx etc etc.</p>
          </div>
        </div>

        <div className="container-cards-group row row-cols-2 row-cols-md-3 g-5">
          {dataFunctions.map((psfunctions) => (
            <div className="col cards-container-div" key={psfunctions.id}>
              <CardFunctions
                title={psfunctions.title}
                imageUrl={psfunctions.image}
                descriprion={psfunctions.descriprion}
              ></CardFunctions>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
