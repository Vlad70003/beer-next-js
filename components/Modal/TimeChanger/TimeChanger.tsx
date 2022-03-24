import React from "react";
import style from "./TimeChanger.module.scss";

import { time } from "./data";

interface TimeChangerProps {
  timeOrder: string;
  setTimeOrder: (value: string) => void;
  closeModal: any
}

export const TimeChanger = ({ timeOrder, setTimeOrder, closeModal }:TimeChangerProps) => {
  return (
    <div className={style.timeChanger}>
      <h3 className={style.timeChanger__title}>Выберите время</h3>
      <div className={style.timeChanger__conteiner}>
        <div className={style.timeChanger__wrapper}>
          <ul className={style.timeChanger__list}>
            {time.map((item, index) => {
              return (
                <li key={index} className={timeOrder === item ? style.timeChanger__item__active : style.timeChanger__item} onClick={() => {setTimeOrder(item); closeModal()}}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
