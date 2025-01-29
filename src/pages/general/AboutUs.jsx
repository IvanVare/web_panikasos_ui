import React from "react";

// Componente reutilizable para las tarjetas de desarrolladores
const DeveloperCard = ({ name, role, description, skills, imageSrc }) => {
  return (
    <div className="card w-72 md:w-96 shadow-xl lg:card-compact p-5 bg-black border-x-2 border-red-800">
      <figure>
        <img
          className="w-1/2 h-auto"
          src={imageSrc}
          alt={`${name} - ${role}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-warning p-5 md:p-1">
            <span className="text-[small] md:text-base leading-[15px]">
              {role}
            </span>
          </div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {skills.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function AboutUs() {
  const developers = [
    {
      name: "Iván Varela",
      role: "Lead Developer",
      description:
        "Ivan es un ingeniero en computación con año y medio de experiencia en desarrollo full stack.",
      skills: ["JavaScript", "React", "Spring boot"],
      imageSrc: "https://www.svgrepo.com/show/192244/man-user.svg",
    },
    {
      name: "Jennifer Córdoba",
      role: "UI/UX Designer",
      description:
        "Jennifer es una desarrolladora creativa con pasión por el desarrollo de interfaces, con año y medio de experiencia.",
      skills: ["Design", "UI/UX"],
      imageSrc:
        "https://t3.ftcdn.net/jpg/03/94/89/90/360_F_394899054_4TMgw6eiMYUfozaZU3Kgr5e0LdH4ZrsU.jpg",
    },
  ];

  return (
    <div className=" min-h-[100dvh] text-white bg-black">
      <div className="pt-24 rounded-b-[50px] h-max bg-gradient-to-r from-[#6c0000] via-[#ff0030] to-[#c21e07] p-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="flex items-center justify-center">
            <img
              className="w-1/3"
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Logo_de_la_UATx.svg"
              alt="Logo de la UATx"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl mb-4 font-bold">Nuestra aplicación</h2>
            <p className="text-sm md:text-lg">
              Somos alumnos de la Universidad Autónoma de Tlaxcala (UATx) que
              desarrollamos esta aplicación como prototipo de titulación. La
              aplicación está enfocada en la seguridad de las personas,
              permitiendo a los usuarios compartir su ubicación en tiempo real
              con sus contactos de confianza de manera rápida y eficiente. Uno
              de los métodos más discretos para hacerlo es a través del correo
              electrónico, un canal que facilita el envío de información
              precisa. Este enfoque no sólo mejora la seguridad personal, sino
              que también contribuye a que los usuarios se sientan protegidos en
              situaciones críticas.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-5">
        <h2 className="text-2xl text-center mb-10">Desarrolladores</h2>
        <div className="flex flex-wrap pb-10 justify-center gap-10">
          {developers.map((developer, index) => (
            <DeveloperCard key={index} {...developer} />
          ))}
        </div>
      </div>
    </div>
  );
}
