import React from "react";
import style from "./Social.module.scss";

import { socialState } from "../../../types/socialState";

export const Social = ({
  href,
  content,
  width,
  height,
  background,
  borderRadius,
  social,
  margin,
}: socialState) => {

  
  const linkWrapperStyle = {
    width: width || "auto",
    height: height || "auto",
    background: background || "null",
    borderRadius: borderRadius || "null",
    margin: margin || "0px",
  };

  return (
    <div className="social__wrapper" style={linkWrapperStyle}>
      <a href={href} className={`social ${style[social]}`}>
        {content || ""}
      </a>
    </div>
  );
};
