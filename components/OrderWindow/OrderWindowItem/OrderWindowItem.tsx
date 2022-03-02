import React from "react";
import style from "./OrderWindowItem.module.scss";

interface OrderWindowItemData {
  item?: { name: string; count: string | number; price: string | number };
}

export default function OrderWindowItem({ item }: OrderWindowItemData) {

  const ITEM_NAME = item && item.name;
  const ITEM_COUNT = item && item.count;
  const ITEM_PRICE = item && item.price;

  return (
    <li className={style.orderWindow__item}>
      <div className={style.orderWindow__item__wrapper}>
        <div className={style.orderWindow__item__name}>{ITEM_NAME}</div>
        <div className={style.orderWindow__item__count}>{ITEM_COUNT}</div>
      </div>
      <div className={style.orderWindow__item__price}>{ITEM_PRICE}</div>
    </li>
  );
}
