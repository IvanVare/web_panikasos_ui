import React, { useState } from "react";
import styled from "styled-components";
import "./styles/carouselBody.css";

// Importar las imágenes estáticamente
import interfaz1 from "../assets/images/Imagen1.jpg";
import interfaz2 from "../assets/images/Imagen2.jpg";
import interfaz3 from "../assets/images/Imagen3.jpg";
import interfaz4 from "../assets/images/Imagen4.jpg";

const CarouselImgMargin = styled.div`
  position: relative;
  display: flex;
  background-color: #000000;
  align-items: center;
  flex-direction: column;
  border-radius: 5%;
  border: 5px solid #222222;
  margin: 20px;
  padding: 20px;
  overflow: hidden;
`;

const CarouselImg = styled.img`
  max-width: 300px;
  align-content: center;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonRight = styled.button`
  position: absolute;
  top: 45%;
  height: 10%;
  width: 5%;
  right: 10px;
  font-size: 30px;
  font-weight: 900;
  color: #ffffff;
  z-index: 1;
  background-color: #000000;
  border-radius: 10%;
  border: 2px solid #222222;
`;

const CarouselButtonLeft = styled.button`
  position: absolute;
  top: 45%;
  height: 10%;
  width: 5%;
  left: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  z-index: 1;
  background-color: #000000;
  border-radius: 10%;
  border: 2px solid #222222;
`;

function CarouselBody(props) {
  const images = [interfaz3, interfaz2, interfaz1, interfaz4];
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
      <CarouselImgMargin>
        <CarouselButtonLeft onClick={previous}>&#10092;</CarouselButtonLeft>
        <CarouselImg
          src={selectedImage}
          alt="imagen"
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
        <CarouselButtonRight onClick={next}>&#10093;</CarouselButtonRight>
      </CarouselImgMargin>
    </>
  );
}

export default CarouselBody;
