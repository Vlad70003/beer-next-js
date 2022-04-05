import React from 'react';
import style from "./OrderTotal.module.scss";

import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { orderSum } from '../../../script/order/orderSum';

export default function OrderTotal() {

  const {order} = useTypedSelector(state => state.order);

  return (
    <div className={style.orderTotal}>
        <div className={style.orderTotal__text}>Итого:</div>
        <div className={style.orderTotal__count}>{`${orderSum(order)} ₽`}</div>
    </div>
  )
}
