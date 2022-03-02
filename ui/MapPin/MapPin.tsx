import React from "react";
import style from "./MapPin.module.scss";
import Image from "next/image";

import mapPin from "../../assests/img/map-pin.svg";

import { imgState } from "../../types/image";

export const MapPin = ({ width = "21px", height = "23px" }: imgState) => {
  return (
    <span className={style.mapPinConteiner}>
      <Image
        src={mapPin}
        alt="mapPin"
        className="map-pin"
        width={width}
        height={height}
      />
    </span>
  );
};
