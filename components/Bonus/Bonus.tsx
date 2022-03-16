import React from "react";
import style from "./Bonus.module.scss";

export const Bonus = () => {



  const count = (
    <div className={style.bonusCount}>
      0
    </div>
  );

  return (
    <pre className={style.bonus}>
      Бонусы: {count}
    </pre>
  );
};
