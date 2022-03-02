import React, { useState } from "react";
import style from "./Info.module.scss";
import Image from 'next/image';

import info from "../../assests/img/information.svg";

interface InfoState {
  width?: string;
  height?: string;
  text?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  transform?: string;
}

export const Info = ({ width = "18px", height = "18px", text, left, right, top, bottom, transform }: InfoState) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (value: boolean) => {
    setIsOpen(value);
  };

  const infoWrapperStyle = {
    left: left || "nonne",
    right: right || "nonne",
    top: top || "nonne",
    bottom: bottom || "nonne",
    transform: top ? "translateY(-50%)" : "none",
  }

  return (
    <div className={style.infoWrapper} style={infoWrapperStyle}>
      <div className={style.info}>
        <Image
          src={info}
          alt="info"
          className={style.info__img}
          width={width}
          height={height}
          onMouseOver={() => handleOpen(true)}
          onMouseOut={() => handleOpen(false)}
        />
        <div
          className={
            isOpen
              ? `${style.info__detail} ${style.open}`
              : `${style.info__detail} ${style.close}`
          }
        >
          {text}
        </div>
      </div>
    </div>
  );
};
