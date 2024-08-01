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

export default function Home() {
  return (
    <>
      <div className="home-content">
        <h1>
          <span className="home-content-span">
            PaniKaSOS<h1>Mantente protegido por tus contactos</h1>
          </span>
        </h1>
        <CarouselBody />

        <div className="home-content-card">
          <div class="card card1">
            <h1>¡Activa Panika SOS y mantente protegido!</h1>
            <br />
            <h3>
              Panika SOS es tu red de emergencia confiable. Registra a tus
              contactos de confianza y, en caso de emergencia, envía alertas
              automáticas con tu ubicación y datos importantes. Tu seguridad y
              la de tus seres queridos es nuestra prioridad.
              <span>¡Activa Panika SOS y mantente protegido!</span>
            </h3>
          </div>
          <div class="card card2">
            <h1>PanikaSOS</h1>
            <h3>
              Supongo que para los profesionales es lo mismo que logra loquear
              esa es un historia gistra a tus contactos de confianza y, en caso
              de emergencia, envía alertas automáticas con tu ubicación y datos
              importantes. Tu seguridad y
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
