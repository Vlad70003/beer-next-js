import React, { useState } from "react";
import style from "./ChooseVolume.module.scss";

export const ChooseVolume = () => {
  const [step, setStep] = useState(1);

  const handleClick = (value: number) => {
    setStep(value);
  };

  return (
    <div className={style.chooseVolume}>
      <ul className={style.chooseVolume__list}>
        <li
          className={`${style.chooseVolume__item} ${
            step === 1 && style.chooseVolume__item__active
          }`}
          onClick={() => handleClick(1)}
          id="chooseVolume__first"
        >
          0,5 л
        </li>
        <li
          className={`${style.chooseVolume__item} ${
            step === 2 && style.chooseVolume__item__active
          }`}
          onClick={() => handleClick(2)}
          id="chooseVolume__second"
        >
          1 л
        </li>
        <li
          className={`${style.chooseVolume__item} ${
            step === 3 && style.chooseVolume__item__active
          }`}
          onClick={() => handleClick(3)}
          id="chooseVolume__third"
        >
          1,5 л
        </li>
      </ul>
    </div>
  );
};
