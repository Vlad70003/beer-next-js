import React from "react";
import style from "./Сonditions.module.scss";

import { conditionsState } from "../../types/conditions";

export const Сonditions = ({ title, content }: any) => {
  return (
    <div className={style.conditions}>
      <h3 className={style.conditions__title}>{title}</h3>
      <ul className={style.conditions__list}>
        {content.map((item: any) => {
          return <li key={item} className={style.conditions__item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
