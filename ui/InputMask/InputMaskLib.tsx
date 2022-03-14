import React from "react";
import style from "./InputMaskLib.module.scss";
import InputMask from "react-input-mask";

export const InputMaskLib = ({ mask, width, placeholder, handleValue, value }:any) => {
  return (
    <InputMask
      mask={mask}
      width={width}
      placeholder={placeholder}
      className={style.inputMask}
      onChange={(event: React.ChangeEvent) => handleValue && handleValue(event)}
      value={value}
    />
  );
};
