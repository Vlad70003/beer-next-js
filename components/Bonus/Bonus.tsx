import React from "react";
import style from "./Bonus.module.scss";

export const Bonus = () => {
  const bonusCountStyle = {
    fontWeight: "700",
  };

  const bonysStyle = {
    display: "flex",
  };

  const count = (
    <div className="bonus-count" style={bonusCountStyle}>
      0
    </div>
  );

  return (
    <pre className={style.bonus} style={bonysStyle}>
      Бонусы: {count}
    </pre>
  );
};
