import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { SampleNextArrow } from "./SampleNextArrow/SampleNextArrow";
import { SamplePrevArrow } from "./SamplePrevArrow/SamplePrevArrow";

import bunner from "../../assests/img/bunner.png";

export const SlickSlider = () => {
  const settings = {
    className: "slider variable-width center",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slide-wrapper">
      <Slider {...settings} className="slick-slider">
        <div className="slick-slider__item">
          <Image src={bunner} alt="bunner" className="slick-slider__item--img" />
        </div>
        <div className="slick-slider__item">
          <Image src={bunner} alt="bunner" className="slick-slider__item--img" />
        </div>
        <div className="slick-slider__item">
          <Image src={bunner} alt="bunner" className="slick-slider__item--img" />
        </div>
      </Slider>
    </div>
  );
};
