import React from "react";
import style from "./OrderWindowItem.module.scss";

//script
import { ProductClass } from "../../../script/product/product";

interface OrderWindowItemData {
  item?: {
    product: {
      name: string;
      status: string;
      price: number;
      productPrice: number;
      measure: { symbol: string };
    };
    step?: number;
  };
}

const product = new ProductClass();

export default function OrderWindowItem({ item }: OrderWindowItemData) {


  const ITEM_NAME = item?.product?.name;
  const ITEM_STATUS = product.status({measure: item?.product?.measure})
  const ITEM_COUNT = item?.step;
  const ITEM_PRICE = item?.product?.price;
  const ITEM_MEASURE = item?.product?.measure?.symbol;

  return (
    <li className={style.orderWindow__item}>
      <div className={style.orderWindow__item__wrapper}>
        <div className={style.orderWindow__item__name}>{ITEM_NAME}</div>
        <div className={style.orderWindow__item__count}>
          {ITEM_STATUS === "draft"
            ? `${ITEM_COUNT} ${ITEM_MEASURE}`
            : ITEM_STATUS === "weight"
            ? `${ITEM_COUNT ? ITEM_COUNT * 100 : ITEM_COUNT} г`
            : `${ITEM_COUNT} ${ITEM_MEASURE}`}
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
