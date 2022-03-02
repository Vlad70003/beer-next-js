import React from "react";
import style from "./Phase.module.scss";

interface PhaseState {
  phaseNumber: string | number;
}

export const Phase = ({ phaseNumber }: PhaseState) => {
  return (
    <div className={style.phase}>
      <div className={ phaseNumber >= 1 ? `${style.phase__circle} ${style.phase__active}` : `${style.phase__circle}`}>1</div>
      <span className={ phaseNumber >= 1 ? `${style.phase__line} ${style.phase__active}` : `${style.phase__line}`}></span>
      <div className={ phaseNumber >= 2 ? `${style.phase__circle} ${style.phase__active}` : `${style.phase__circle}`}>2</div>
      <span className={ phaseNumber >= 2 ? `${style.phase__line} ${style.phase__active}` : `${style.phase__line}`}></span>
      <div className={ phaseNumber >= 3 ? `${style.phase__circle} ${style.phase__active}` : `${style.phase__circle}`}>3</div>
    </div>
  );
};
