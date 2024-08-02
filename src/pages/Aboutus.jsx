import React from "react";
import styled from "styled-components";
import Card from "../components/Card.jsx";
import "../components/styles/styleAboutUs.css";

const ImageSchool = styled.img`
  width: 30%;
  max-width: 50%;
  background-color: red;
`;

const users = [
  {
    id: 1,
    title: "Ivan",
    descriprion: "jdjsdga",
    image: "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
    urlLinkedin: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Antonio",
    descriprion: "Desarrollador de la pagina",
    image:
      "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
    urlLinkedin: "https://www.facebook.com/",
  },
];

export default function Aboutus() {
  return (
    <>
      <h1>Aboutus</h1>
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

        <div className="container cards-container">
          <div className="row">
            {users.map((userCard) => (
              <div className="col-md-3" key={userCard.id}>
                <Card
                  title={userCard.title}
                  imageUrl={userCard.image}
                  descriprion={userCard.descriprion}
                  urlLinkedin={userCard.urlLinkedin}
                ></Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
