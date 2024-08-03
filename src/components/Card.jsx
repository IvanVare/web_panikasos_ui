import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./styles/styleCard.css";

const ImageContainer = styled.img`
  max-width: 200px;
  min-width: 100px;
  border-radius: 100%;
`;

export default function Card({ title, imageUrl, descriprion, urlLinkedin }) {
  return (
    <>
      <div className="card card-container">
        <div className="card-container-row">
          <ImageContainer src={imageUrl} alt="{title}" />
          <div className="card-body text-center  ">
            <h3 className="card-title">{title}</h3>
            <p className="card-text text-secondary">
              {descriprion ? descriprion : "Sin descripción"}
            </p>
            <a
              href={urlLinkedin}
              className="btn btn-outline-primary"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="#" className="btn btn-outline-success" target="_blank">
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

Card.PropTypes = {
  title: PropTypes.string,
  descriprion: PropTypes.string,
  urlLinkedin: PropTypes.string,
  imageUrl: PropTypes.string,
};
