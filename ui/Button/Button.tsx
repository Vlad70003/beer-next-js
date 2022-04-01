import React from "react";

import { buttonState } from "../../types/button";

import { truncate } from "../../script/wordProcessing/trancute";
import { classNaneBtn } from "./className";

export const Button = ({
  title,
  type,
  color,
  padding,
  fontWeight,
  cursor,
  maxLength,
  background,
  border,
  borderRadius,
  onClick,
  margin,
  borderBottom,
  fontSize,
  width,
  minWidth,
  fontWeightClass,
  hoverClassColor,
  ref
}: buttonState) => {


  const styleButton = {
    color: color || "black",
    padding: padding || "none",
    fontWeight: fontWeight || "400",
    cursor: cursor || "pointer",
    background: background || "none",
    border: border || "none",
    borderRadius: borderRadius || "none",
    margin: margin || "0px",
    borderBottom: borderBottom || border,
    fontSize: fontSize || "16px",
    width: width || "auto",
    minWidth: minWidth,
    transition: "all .4s"
  };

  return (
    <button
      className={classNaneBtn({fontWeightClass, hoverClassColor})}
      type={type}
      style={styleButton}
      onClick={onClick}
      id="button"
      ref={ref}
    >
      {maxLength ? truncate(title, maxLength) : title}
    </button>
  );
};
