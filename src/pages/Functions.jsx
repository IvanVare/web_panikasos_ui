import React from "react";
import CardFunctions from "../components/CardFunctions";

const panikasosFunctions = [
  {
    id: 1,
    title: "Seguridad",
    descriprion: "jdjsddasdsaga",
    image: "https://cdn-icons-png.flaticon.com/512/345/345535.png",
  },
  {
    id: 2,
    title: "Notificaciones",
    descriprion: "Desarrollador de la pagina",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGNGtsQUye7dW6vt217tungEygbGeyijkr4w&s",
  },
  {
    id: 3,
    title: "Correo electronico",
    descriprion: "Desarrollador de la pagina",
    image: "https://cdn-icons-png.flaticon.com/512/646/646094.png",
  },
  {
    id: 4,
    title: "Botón rapido",
    descriprion: "Desarrollador de la pagina",
    image: "https://cdn-icons-png.flaticon.com/512/101/101369.png",
  },
  {
    id: 5,
    title: "Accesibilidad",
    descriprion: "Desarrollador de la pagina",
    image:
      "https://static.vecteezy.com/system/resources/previews/013/633/792/non_2x/accsessibility-icon-universal-accsess-icon-free-vector.jpg",
  },
];

export default function Functions() {
  return (
    <>
      <div className="container-cards-group row row-cols-2 row-cols-md-3 g-5">
        {panikasosFunctions.map((psfunctions) => (
          <div className="col cards-container-div" key={psfunctions.id}>
            <CardFunctions
              title={psfunctions.title}
              imageUrl={psfunctions.image}
              descriprion={psfunctions.descriprion}
            ></CardFunctions>
          </div>
        ))}
      </div>
    </>
  );
}
