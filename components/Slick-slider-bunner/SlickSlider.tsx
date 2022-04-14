import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import style from "./SlickSlider.module.scss";

import { SampleNextArrow } from "./SampleNextArrow/SampleNextArrow";
import { SamplePrevArrow } from "./SamplePrevArrow/SamplePrevArrow";

import bunner from "../../assests/img/bunner.svg";

export const SlickSlider = () => {
  const settings = {
    className: "slider-bunner variable-width-bunner center-bunner",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    centerPadding: "0px",
    autoplaySpeed: 3000,
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={style.slideWrapper}>
      <Slider {...settings} className="slick-slider-bunner">
        <div className="slick-slider-bunner__item">
          <Image src={bunner} alt="bunner" className="slick-slider-bunner__item--img" />
        </div>
        <div className="slick-slider-bunner__item">
          <Image src={bunner} alt="bunner" className="slick-slider-bunner__item--img" />
        </div>
        <div className="slick-slider-bunner__item">
          <Image src={bunner} alt="bunner" className="slick-slider-bunner__item--img" />
        </div>
      </Slider>
    </div>
  );
};
