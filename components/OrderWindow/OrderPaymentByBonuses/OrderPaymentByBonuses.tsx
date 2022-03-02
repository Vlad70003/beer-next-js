import React from 'react';
import style from "./OrderPaymentByBonuses.module.scss";

export default function OrderPaymentByBonuses() {
  return (
    <div className={style.orderPaymentByBonuses}>
        <div className={style.orderPaymentByBonuses__text}>Оплата бонусами</div>
        <div className={style.orderPaymentByBonuses__count}>- 500 ₽ </div>
    </div>
  )
}
