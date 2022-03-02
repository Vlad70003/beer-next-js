import React from "react";
import styles from "./Button.module.scss";

import { buttonState } from "../../types/button";

import { truncate } from "../../script/trancute";

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
  };

  return (
    <button
      className={styles.button}
      type={type}
      style={styleButton}
      onClick={onClick}
    >
      {maxLength ? truncate(title, maxLength) : title}
    </button>
  );
};
