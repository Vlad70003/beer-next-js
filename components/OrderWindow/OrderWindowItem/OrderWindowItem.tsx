import React from "react";
import style from "./OrderWindowItem.module.scss";

interface OrderWindowItemData {
  item?: {
    product: { productTitle: string; status: string; productPrice: number };
    step?: number;
  };
}

export default function OrderWindowItem({ item }: OrderWindowItemData) {
  const ITEM_NAME = item?.product?.productTitle;
  const ITEM_STATUS = item?.product?.status;
  const ITEM_COUNT = item?.step;
  const ITEM_PRICE = item?.product.productPrice;

  return (
    <li className={style.orderWindow__item}>
      <div className={style.orderWindow__item__wrapper}>
        <div className={style.orderWindow__item__name}>{ITEM_NAME}</div>
        <div className={style.orderWindow__item__count}>
          {ITEM_STATUS === "draft"
            ? `${ITEM_COUNT} л.`
            : ITEM_STATUS === "conteiner"
            ? `${ITEM_COUNT} л.`
            : ITEM_STATUS === "weight"
            ? `${ITEM_COUNT ? ITEM_COUNT * 100 : ITEM_COUNT} г.`
            : `${ITEM_COUNT} шт.`}
        </div>
      </div>
      <div className={style.orderWindow__item__price}>
        {ITEM_PRICE && ITEM_COUNT
          ? `${ITEM_PRICE * ITEM_COUNT} ₽`
          : `${ITEM_PRICE} ₽`}
      </div>
    </li>
  );
}
