import React from "react";
import PropTypes from "prop-types";
export default function Card({ title, imageUrl, descriprion, urlLinkedin }) {
  return (
    <>
      <div className="card">
        <img src={imageUrl} alt="" />
        <div className="card-body ">
          <h1 className="card-title">{title}</h1>
          <p className="card-text  text-center text-secondary">
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
    </>
  );
}

Card.PropTypes = {
  title: PropTypes.string.isRequired,
  descriprion: PropTypes.string,
  urlLinkedin: PropTypes.string,
  imageUrl: PropTypes.string,
};
