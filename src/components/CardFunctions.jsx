import React from "react";
import styled from "styled-components";
import "../components/styles/styleCardFunctions.css";

const ImageContainer = styled.img`
  max-width: 100px;
  min-width: 20px;
  border-radius: 20%;
`;

export default function CardFunctions({ title, imageUrl, descriprion }) {
  return (
    <>
      <div className="col">
        <div className="cardF">
          <div className="cardF cardF-continer">
            <ImageContainer src={imageUrl} alt={title} />
          </div>
          <div className="card-body">
            <h5 className="function-card-title">{title}</h5>
            <p className="function-card-text">{descriprion}</p>
          </div>
        </div>
      </div>
    </>
  );
}
