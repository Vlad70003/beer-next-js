import React from "react";
import style from "./OrderWindow.module.scss";

import { Subtitle } from "../Subtitle/Subtitle";
import OrderWindowList from "./OrderWindowList/OrderWindowList";
import OrderPaymentByBonuses from "./OrderPaymentByBonuses/OrderPaymentByBonuses";
import OrderTotal from "./OrderTotal/OrderTotal";

const data = [
  { name: "Пиво Jaws «Атомная Прачечная»", count: "1 шт", price: "105 ₽" },
  { name: "Пиво Jaws «Атомная Прачечная»", count: "1 шт", price: "105 ₽" },
  { name: "Пиво Jaws «Атомная Прачечная»", count: "1 шт", price: "105 ₽" },
];

export default function OrderWindow() {
  return (
    <div className={style.orderWindow}>
      <header className={style.orderWindow__header}>
        <Subtitle fontSize="18px" text="Ваш заказ" />
      </header>
      <main className={style.orderWindow__main}>
        < OrderWindowList content={data} />
        < OrderPaymentByBonuses />
        <span className={style.orderWindow__border}></span>
      </main>
      <footer className={style.orderWindow__footer}>
        < OrderTotal />
      </footer>
    </div>
  );
}
