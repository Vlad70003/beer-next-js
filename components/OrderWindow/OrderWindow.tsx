import React from "react";
import style from "./OrderWindow.module.scss";

import { Subtitle } from "../Subtitle/Subtitle";
import OrderWindowList from "./OrderWindowList/OrderWindowList";
import OrderPaymentByBonuses from "./OrderPaymentByBonuses/OrderPaymentByBonuses";
import OrderTotal from "./OrderTotal/OrderTotal";

import { useTypedSelector } from "../../hooks/useTypedSelector";

export default function OrderWindow() {

  const {order} = useTypedSelector(state => state.order);

  return (
    <div className={style.orderWindow}>
      <header className={style.orderWindow__header}>
        <Subtitle fontSize="18px" text="Ваш заказ" />
      </header>
      <main className={style.orderWindow__main}>
        < OrderWindowList content={order} />
        < OrderPaymentByBonuses />
        <span className={style.orderWindow__border}></span>
      </main>
      <footer className={style.orderWindow__footer}>
        < OrderTotal />
      </footer>
    </div>
  );
}
