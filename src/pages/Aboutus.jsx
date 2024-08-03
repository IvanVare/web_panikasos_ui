import React from "react";
import styled from "styled-components";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";
import "../components/styles/styleAboutUs.css";

const ImageSchool = styled.img`
  width: 30%;
  max-width: 50%;
`;

const users = [
  {
    id: 1,
    title: "Ivan",
    descriprion: "jdjsdga",
    image:
      "https://scontent.fpbc4-1.fna.fbcdn.net/v/t39.30808-1/330296746_8679805508761000_1006268750703738412_n.jpg?stp=c97.0.200.200a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=VyPkXwNJGQ4Q7kNvgF9BW2y&_nc_ht=scontent.fpbc4-1.fna&oh=00_AYCIkDqa6IZd2VjVE2rGthghJnO--56jR08hIdznSzyF2g&oe=66B37045",
    urlLinkedin: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Antonio",
    descriprion: "Desarrollador de la pagina",
    image: "https://www.svgrepo.com/show/192244/man-user.svg",
    urlLinkedin: "https://www.facebook.com/",
  },
];

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

        <div className="row">
          {users.map((userCard) => (
            <div className="col cards-container" key={userCard.id}>
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
    </>
  );
}
