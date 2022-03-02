import React from "react";
import style from "./Subtitle.module.scss";

interface subtitleState {
    text: string,
    padding?: string,
    fontSize?: string,
}

export const Subtitle = ({text, padding, fontSize}:subtitleState) => {

  const subtitleStyle = {
    padding: padding || "0px",
    fontSize: fontSize || "24px",
  }

    return (
      <h4 className={style.subtitle} style={subtitleStyle}>{text}</h4>
    );
  };