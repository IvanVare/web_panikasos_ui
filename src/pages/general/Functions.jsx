import React from "react";
import dataFunctions from "../../data/dataFunctions.json";
import CardFunctions from "../../components/general/CardFunctions";

export default function Functions() {
  return (
    <div className="pt-24 functions-content flex flex-col items-center">
      <span className="font-bold text-4xl mb-4">Funciones</span>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 w-full max-w-screen-xl">
        {dataFunctions.map((cdfunctions) => (
          <div className="col cards-container-div" key={cdfunctions.id}>
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
