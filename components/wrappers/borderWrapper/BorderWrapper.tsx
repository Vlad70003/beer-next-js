import React from "react";
import style from "./BorderWrapper.module.scss";

import { borderWrapperState } from "../../../types/borderWrapper";

export const BorderWrapper = ({
  children,
  border,
  padding,
  background,
  borderRadius,
  inlineFlex,
  maxWidth,
  display,
  minWidth,
  position,
  className,
  overflow,
  width,
  margin,
  flex,
}: borderWrapperState) => {
  
  const borderWrapperStyle = {
    border: border,
    padding: padding || "none",
    background: background || "none",
    borderRadius: borderRadius || "none",
    display: display || "flex",
    alignItems: inlineFlex && "center",
    justifyContent: inlineFlex && "center",
    maxWidth: maxWidth || "none",
    minWidth: minWidth || "none",
    position: position || "static",
    overflow: overflow || "none",
    width: width || "none",
    margin: margin || "0px",
    flex: flex,
  };

  return (
    <div className={className && style[className]} style={borderWrapperStyle}>
      {children}
    </div>
  );
};
