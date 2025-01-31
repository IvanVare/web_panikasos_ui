import React from "react";
import Carrousel from "../../components/general/Carrousel";

export default function Home() {
  return (
    <>
      <div className="pt-16 p-8 bg-neutral-800 ">
        <div className="flex flex-col items-center justify-center py-10">
          <span className="home-content-span text-white text-7xl font-bold">
            Panis<span className="text-red-800">K</span>a S
            <span className="text-red-800">O</span>S
          </span>

          <p className="card-title text-white text-3xl font-bold">
            Mantente protegido por tus contactos
          </p>
        </div>

        <Carrousel />

        <div className="flex flex-col md:flex-row gap-10 md:p-10 ">
          <div className="card lg:card-side bg-black shadow-xl border-e-8 border-red-800">
            <div className="card-body">
              <h1 className="card-title text-white text-2xl font-bold">
                ¡Activa Panika SOS y mantente protegido!
              </h1>
              <h4>
                Panika SOS es tu red de emergencia confiable. Registra a tus
                contactos de confianza y, en caso de emergencia, envía alertas
                automáticas con tu ubicación y datos importantes. Tu seguridad y
                la de tus seres queridos es nuestra prioridad.
                <span className="text-lg">
                  {" "}
                  ¡Activa Panika SOS y mantente protegido!
                </span>
              </h4>
            </div>
          </div>
          <div className="card  lg:card-side bg-black shadow-xl border-e-8 border-red-800">
            <div className="card-body">
              <h1 className="card-title text-white text-2xl font-bold">
                PanikaSOS
              </h1>
              <h4>
                Aplicación móvil gratuita que ofrece una solución confiable y
                eficiente para situaciones de emergencia. Permite al usuario
                enviar mensajes automáticos que incluyen su información personal
                y ubicación actual a sus contactos de confianza a través de
                correo electrónico. Esta funcionalidad asegura que tus seres
                queridos sean notificados en caso de cualquier eventualidad.
                <span className="text-lg">
                  ¡Recuerda! Tu seguridad es lo más importante, y esta
                  aplicación está aquí para apoyarte.
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
