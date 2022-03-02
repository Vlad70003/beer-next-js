import React from "react";
import style from "./Card.module.scss";
import Image from "next/image";

import card from "../../assests/img/card.png";

interface cardState {
  width?: number | string;
  height?: number | string;
  opacity?: number | string;
}

export const Card = ({ width = "300px", height = "188px", opacity = "0.1" }:cardState) => {

  return (
    <div className={style.card}>
      <div className={style.card__imgWrapper} style={{width: width, height: height}}>
        <Image
          src={card}
          alt="card"
          className={style.card__img}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};
