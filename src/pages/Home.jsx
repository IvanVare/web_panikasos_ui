import React from "react";
import styled from "styled-components";
import CarouselBody from "../components/CarouselBody";
import "../components/styles/styleHome.css";

const MarginDiv = styled.div`
  display: flex;
  height: 50%;
  background-color: #000000;
  border-radius: 5%;
  border: 5px solid rgb(255, 255, 255);
  margin-bottom: 20px;
`;

const ImageSchool = styled.img`
  width: 30%;
  max-width: 50%;
`;

export default function Home() {
  return (
    <>
      <div className="home-content">
        <h1>
          <span className="home-content-span">PaniKaSOS</span>
          <h1 className="card-title">Mantente protegido por tus contactos</h1>
        </h1>
        <CarouselBody />

        <div className="home-content-card">
          <div class="home-card home-card1">
            <h1 className="card-title">
              ¡Activa Panika SOS y mantente protegido!
            </h1>
            <h4>
              Panika SOS es tu red de emergencia confiable. Registra a tus
              contactos de confianza y, en caso de emergencia, envía alertas
              automáticas con tu ubicación y datos importantes. Tu seguridad y
              la de tus seres queridos es nuestra prioridad.
              <span> ¡Activa Panika SOS y mantente protegido!</span>
            </h4>
          </div>
          <div class="home-card  home-card2">
            <h1 className="card-title">PanikaSOS</h1>
            <h4>
              Supongo que para los profesionales es lo mismo que logra loquear
              esa es un historia gistra a tus contactos de confianza y, en caso
              de emergencia, envía alertas automáticas con tu ubicación y datos
              importantes. Tu seguridad y
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
