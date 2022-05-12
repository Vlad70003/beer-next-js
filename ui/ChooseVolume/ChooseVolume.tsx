import React, { useState } from "react";
import style from "./ChooseVolume.module.scss";

interface ChooseVolumeArg {
  step: number;
  handleStep: (value: number) => void;
}

export const ChooseVolume = ({ step, handleStep }: ChooseVolumeArg) => {
  const toggleItemStyle = {
    left: step === 0.5 ? "0" : step === 1 ? "50%" : step === 1.5 ? "100%" : "0",
    top: "0",
    transform:
      step === 0.5
        ? "translateX(-1%)"
        : step === 1
        ? "translateX(-50%)"
        : step === 1.5
        ? "translateX(-101%)"
        : "0",
  };

  return (
    <div className={`${style.chooseVolume}`}>
      <ul className={style.chooseVolume__list}>
        <li
          className={style.chooseVolume__item}
          onClick={() => handleStep(0.5)}
        >
          0,5 л
        </li>
        <li className={style.chooseVolume__item} onClick={() => handleStep(1)}>
          1 л
        </li>
        <li
          className={style.chooseVolume__item}
          onClick={() => handleStep(1.5)}
        >
          1,5 л
        </li>
      </ul>
      <div
        className={style.chooseVolume__toggleItem}
        style={toggleItemStyle}
      ></div>
    </div>
  );
};
