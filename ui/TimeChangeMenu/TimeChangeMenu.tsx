import React from "react";
import style from "./TimeChangeMenu.module.scss";

import { time } from "./data";

export default function TimeChangeMenu({ setIsOpen, setTimeOrder }: any) {
  return (
    <div className={style.timeChangeMenu}>
      <div className={style.timeChangeMenu__title}>Время</div>
      <ul className={style.timeChangeMenu__list}>
        {time.map((item) => {
          return (
            <li
              key={item}
              className={style.timeChangeMenu__item}
              onClick={() => {
                setIsOpen();
                setTimeOrder(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
