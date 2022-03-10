import React from 'react';
import style from "./OrderPaymentByBonuses.module.scss";

export default function OrderPaymentByBonuses() {
  return (
    <div className={style.orderPaymentByBonuses}>
        <div className={style.orderPaymentByBonuses__content}>Оплата бонусами</div>
        <div className={style.orderPaymentByBonuses__content}>- 500 ₽ </div>
    </div>
  )
}
