import React, { useState } from "react";
import style from "./Info.module.scss";
import Image from "next/image";

import info from "../../assests/img/information.svg";

interface InfoState {
  children?: any;
  position?: "absolute" | "static";
  width?: string;
  height?: string;
  text?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  transform?: string;
  positionWindow: "right" | "left" | "top" | "bottom",
}

export const Info = ({
  children,
  positionWindow,
  width = "18px",
  height = "18px",
  position,
  text,
  left,
  right,
  top,
  bottom,
}: InfoState) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (value: boolean) => {
    setIsOpen(value);
  };

  const infoWrapperStyle = {
    left: left || "none",
    right: right || "none",
    top: top || "none",
    bottom: bottom || "none",
    transform: top ? "translateY(-50%)" : "none",
    position: position || "absolute",
    height: height,
    width: width,
  };

  const infoStyle = {
    height: height,
    width: width,
  }

  return (
    <div className={style.infoWrapper} style={infoWrapperStyle}>
      <div className={style.info} style={infoStyle}>
        {children ? (
          <div
            onMouseOver={() => handleOpen(true)}
            onMouseOut={() => handleOpen(false)}
          >
            {children}
          </div>
        ) : (
          <Image
            src={info}
            alt="info"
            className={style.info__img}
            width={width}
            height={height}
            onMouseOver={() => handleOpen(true)}
            onMouseOut={() => handleOpen(false)}
          />
        )}

        <div
          className={
            isOpen
              ? `${style[`info__${positionWindow}`]} ${style.open}`
              : `${style[`info__${positionWindow}`]} ${style.close}`
          }
        >
          {text}
        </div>
      </div>
    </div>
  );
};
