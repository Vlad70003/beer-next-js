import React, { useState } from "react";
import style from "./ProductItem.module.scss";
import Image from "next/image";

import { DeleteButton } from "../../../ui/DeleteButton/DeleteButton";

interface ProductItemState {
  product: any;
}

export const ProductItem = ({ product }: ProductItemState) => {
  return (
    <li className={style.productItem}>
      <div className={style.productItem__wrapper}>
        <div className={style.productItem__leftSide}>
          <Image
            src={product.img}
            alt="продукт"
            className={style.productItem__leftSide__img}
            width={64}
            height={64}
          />
          <div className={style.productItem__leftSide__wrapper}>
            <div className={style.productItem__itemName}>{product.productName}</div>
            <div className={style.productItem__itemNumber}>{product.number}</div>
          </div>
        </div>
        <div className={style.productItem__rightSide}>
          <div className={style.productItem__preceWrapper}>
            <div className={style.productItem__prece}>{product.price}</div>
          </div>
          <DeleteButton />
        </div>
      </div>
    </li>
  );
};
