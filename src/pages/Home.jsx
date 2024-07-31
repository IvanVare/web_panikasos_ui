import React from "react";
import CarouselBody from "../components/CarouselBody";
import "../components/styles/styleHome.css";
export default function Home() {
  return (
    <>
      <div className="home-content">
        <h1>Mantente protegido por tus contactos</h1>
        <h1>
          <span className="home-content-span">PaniKaSOS</span>
        </h1>
        <CarouselBody></CarouselBody>
        <div>
          <div className="card">
            <h1 className="home-content-message">
              <span>
                Panika SOS es tu red de emergencia confiable. Registra a tus
                contactos de confianza y, en caso de emergencia, envía alertas
                automáticas con tu ubicación y datos importantes. Tu seguridad y
                la de tus seres queridos es nuestra prioridad.
              </span>
              ¡Activa Panika SOS y mantente protegido!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
