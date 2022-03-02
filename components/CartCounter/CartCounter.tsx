import React from "react";
import style from "./CartCounter.module.scss";

import { ShopingKart } from "../../ui/ShopingKart/ShopingKart";

export const CartCounter = () => {
  return (
    <div className={style.cartCounter}>
      <div className={style.cartCounter__kart}>
        <ShopingKart />
      </div>
      <div className={style.cartCounter__counter}>0 ₽</div>
    </div>
  );
};
