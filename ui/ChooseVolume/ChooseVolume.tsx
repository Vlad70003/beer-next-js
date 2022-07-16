import React, { useState } from "react";
import style from "./ChooseVolume.module.scss";

interface ChooseVolumeArg {
  step: number;
  handleStep: (value: number) => void;
  measure: { symbol: string; ratio: string };
}

export const ChooseVolume = ({
  step,
  handleStep,
  measure,
}: ChooseVolumeArg) => {
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
          onClick={() => handleStep(+measure?.ratio / 2)}
        >
          {`0,5 ${measure?.symbol}`}
        </li>
        <li
          className={style.chooseVolume__item}
          onClick={() => handleStep(+measure?.ratio)}
        >
          {`1 ${measure?.symbol}`}
        </li>
        <li
          className={style.chooseVolume__item}
          onClick={() => handleStep(+measure?.ratio * 1.5)}
        >
          {`1,5 ${measure?.symbol}`}
        </li>
      </ul>
      <div
        className={style.chooseVolume__toggleItem}
        style={toggleItemStyle}
      ></div>
    </div>
  );
};
