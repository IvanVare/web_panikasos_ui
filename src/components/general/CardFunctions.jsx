import React from "react";

export default function CardFunctions({ title, imageUrl, description }) {
  return (
    <div className="card w-full md:w-80 lg:w-96 m-4 bg-black shadow-2xl">
      <figure className="h-48 bg-white flex justify-center items-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover md:w-2/5"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{title}</h2>
        <p className="text-center">{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
