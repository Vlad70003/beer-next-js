import React, { SyntheticEvent } from "react";
import style from "./Close.module.scss";
import Link from "next/link";

interface CloseProps {
  onClick: any;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export const Close = ({onClick, top, left, right, bottom}:CloseProps) => {

  const styleClose = {
    top: top,
    left: left,
    right: right,
    bottom: bottom,
  }

  return <div style={styleClose} className={style.close} onClick={() => onClick()}></div>;
};
