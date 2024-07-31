import React, { useState } from "react";
import styled from "styled-components";
import "./styles/carouselBody.css";

// Importar las imágenes estáticamente
import interfaz1 from "../assets/images/interfaz1.png";
import interfaz2 from "../assets/images/interfaz2.png";
import interfaz3 from "../assets/images/interfaz3.png";

const CarouselImg = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

function CarouselBody(props) {
  const images = [interfaz1, interfaz2, interfaz3];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      console.log(selectedIndex);
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };
  return (
    <>
      <CarouselImg
        src={selectedImage}
        alt="imagen"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />

      <button onClick={previous}>&#10092;</button>
      <button onClick={next}>&#10093;</button>
    </>
  );
}

export default CarouselBody;
