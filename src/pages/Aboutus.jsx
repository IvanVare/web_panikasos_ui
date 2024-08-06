import React from "react";
import styled from "styled-components";
import CardsAboutUs from "../components/CardsAboutUs.jsx";
import "../components/styles/styleAboutUs.css";

const ImageSchool = styled.img`
  width: 30%;
  max-width: 50%;
`;

export default function Aboutus() {
  return (
    <>
      <div>
        <div className="appcontent-section">
          <div className="image-container">
            <ImageSchool
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Logo_de_la_UATx.svg"
              alt="uatx"
            />
          </div>
          <div className="text-container">
            <h2>Our leadership</h2>
            <p>somos alumnos de la uatx etc etc.</p>
            <a href="/leadership-team" className="link"></a>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3L11 8L5 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <CardsAboutUs />
      </div>
    </>
  );
}
