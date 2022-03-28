import React from 'react';
import style from "./Slick-slider.module.scss";
import Slider from "react-slick";
import Image from "next/image";

import { SampleNextArrow } from './SampleNextArrow/SampleNextArrow';
import { SamplePrevArrow } from './SamplePrevArrow/SamplePrevArrow';

import bunner from "../../assests/img/product.png";

export const SlickSliderToOrder = () => {

    const settings = {
        className: "slider variable-width center",
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: "0px",
        
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };

  return (
    <div className={style.slickSliderToOrder}>
        <Slider {...settings} className="slick-slider-order">
        <div className={style.slickSliderToOrder__item}>
          <Image src={bunner} alt="bunner" className="slick-slider-order__item--img" />
          <div className={style.slickSliderToOrder__text}>Алтайские Гренки ржано-пшеничные со вкусом аджики + соус 130 г</div>
        </div>
        <div className={style.slickSliderToOrder__item}>
          <Image src={bunner} alt="bunner" className="slick-slider-order__item--img" />
           <div className={style.slickSliderToOrder__text}>Алтайские Гренки ржано-пшеничные со вкусом аджики + соус 130 г</div>
        </div>
        <div className={style.slickSliderToOrder__item}>
          <Image src={bunner} alt="bunner" className="slick-slider-order__item--img" />
           <div className={style.slickSliderToOrder__text}>Алтайские Гренки ржано-пшеничные со вкусом аджики + соус 130 г</div>
        </div>
      </Slider>
    </div>
  )
}
