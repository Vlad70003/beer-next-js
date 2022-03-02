import React from 'react';
import style from "./OrderTotal.module.scss";

export default function OrderTotal() {
  return (
    <div className={style.orderTotal}>
        <div className={style.orderTotal__text}>Итого:</div>
        <div className={style.orderTotal__count}>1000 ₽ </div>
    </div>
  )
}
