import React from "react";
import style from "./InputMaskLib.module.scss";
import InputMask from "react-input-mask";

export const InputMaskLib = ({ mask, width, placeholder, handleTimeOrder, timeOrder }:any) => {
  return (
    <InputMask
      mask={mask}
      width={width}
      placeholder={placeholder}
      className={style.inputMask}
      onChange={(event: React.ChangeEvent) => handleTimeOrder(event)}
      value={timeOrder}
    />
  );
};
