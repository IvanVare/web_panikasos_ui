import React, { useEffect, useRef, useState } from "react";
import { CarouselImages } from "./CarouselImages.js";
import "./carouselBody.css";

function CarouselBody() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imageNode = listNode.querySelectorAll("li > img")[currentIndex];
    if (imageNode) {
      imageNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction == "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === CarouselImages.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="main-container">
        <div className="slider-container">
          <button className="leftArrow" onClick={() => scrollToImage("prev")}>
            &#10092;
          </button>
          <button className="rightArrow" onClick={() => scrollToImage("next")}>
            &#10093;
          </button>
          <div className="container-images">
            <ul ref={listRef}>
              {CarouselImages.map((item) => {
                return (
                  <li key={item.id}>
                    <img className="class-images" src={item.imgUrl} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dots-container">
            {CarouselImages.map((_, idx) => (
              <div
                onClick={() => goToSlide(idx)}
                key={idx}
                className={`dot-container-item ${
                  idx === currentIndex ? "active" : ""
                }`}
              >
                &#9864;
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselBody;
