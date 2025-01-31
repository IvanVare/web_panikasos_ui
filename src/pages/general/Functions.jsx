import React from "react";
import dataFunctions from "../../data/dataFunctions.json";
import CardFunctions from "../../components/general/CardFunctions";

export default function Functions() {
  return (
    <div className="pt-24 functions-content flex flex-col items-center mx-10">
      <div className="mockup-window bg-red-900 border w-full">
        <div className="bg-base-200 px-20 py-5">
          <span className="font-bold text-2xl">Objetivo del Sitio Web:</span>
          <p className="text-xl">
            El sitio web tiene como propósito proporcionar información detallada
            sobre la aplicación, así como ofrecer herramientas de gestión para
            los usuarios.Además, busca expandir y mejorar las funcionalidades
            disponibles, permitiendo la implementación de nuevas opciones que
            optimicen la experiencia del usuario. Entre sus principales
            objetivos se encuentran:
            <ol className="list-disc my-5">
              <li>
                Almacenamiento en la nube de contactos de emergencia (opcional,
                según la preferencia del usuario).
              </li>
              <li>
                Gestión avanzada de usuarios a través de administradores ,
                asegurando un control eficiente y seguro.
              </li>
            </ol>
            <hr />
            <span className="font-bold">
              Algunas de las funciones que la aplicación ofrece incluyen una
              variedad de herramientas diseñadas para mejorar la seguridad y la
              comunicación de los usuarios.
            </span>
          </p>
        </div>
      </div>
      <span className="font-bold text-2xl mt-6">Principales funciones</span>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6 max-w-screen-xl">
        {dataFunctions.map((cdfunctions) => (
          <div className="col cards-container-div " key={cdfunctions.id}>
            <CardFunctions
              title={cdfunctions.title}
              imageUrl={cdfunctions.image}
              description={cdfunctions.description}
            ></CardFunctions>
          </div>
        ))}
      </div>
    </div>
  );
}
