import React from "react";
import style from "./Product.module.scss";
import Image from "next/image";

import { priceState } from "../../types/product";
import { Button } from "../../ui/Button/Button";

export const Product = ({ product }) => {
  const {
    productImg,
    productCount,
    productGrade,
    productPrice,
    productProduction,
    productSubtitle,
    productTextButton,
    productTitle,
  } = product;

  return (
    <ul className={style.product}>
      <li className={style.product__img__wrapper}>
        <Image
          src={productImg}
          alt="product image"
          className={style.product__img}
          width={220}
          height={220}
        />
      </li>
      <li className={style.product__title__wrapper}>
        <div className={style.product__title}>{productTitle}</div>
      </li>
      <li className={style.product__grade__wrapper}>
        <div className={style.product__grade}>{productGrade}</div>
      </li>
      <li className={style.product__subtitle__wrapper}>
        <div className={style.product__subtitle}>{productSubtitle}</div>
      </li>
      <li className={style.product__production__wrapper}>
        <div className={style.product__production}>{productProduction}</div>
      </li>
      <li className={style.product__hooter}>
        <div className={style.product__production__leftSide}>
          <div className={style.product__production__price}>{productPrice}</div>
          <div className={style.product__production__count}>{productCount}</div>
        </div>
        <div className={style.product__production__rightSide}>
          <Button
            title="В корзину"
            color="white"
            background="#20598E"
            padding="11px 24px"
            borderRadius="60px"
          />
        </div>
      </li>
    </ul>
  );
};
