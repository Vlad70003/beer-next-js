import React from "react";
import style from "./CartCounter.module.scss";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { orderSum } from "../../script/order/orderSum";

import { ShopingKart } from "../../ui/ShopingKart/ShopingKart";
import { OrderIndicator } from "../OrderIndicator/OrderIndicator";

export const CartCounter = () => {
  const { order } = useTypedSelector((state) => state.order);
  const { generalOrder } = useTypedSelector((state) => state.generalOrder);

  return (
    <div className={style.cartCounter}>
      <div className={style.cartCounter__kart}>
        <ShopingKart />
        {generalOrder?.length ? (
          <div className={style.cartCounter__orderIndicator}>
            <OrderIndicator />
          </div>
        ) : null}
      </div>
      <div className={style.cartCounter__counter}>{`${orderSum(order)} ₽`}</div>
    </div>
  );
};
