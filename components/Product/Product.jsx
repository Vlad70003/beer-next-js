import React, { useState } from "react";
import style from "./Product.module.scss";
import Image from "next/image";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import { Info } from "../../ui/Info/Info";
import { Button } from "../../ui/Button/Button";
import { ChooseVolume } from "../../ui/ChooseVolume/ChooseVolume";
import { ModalWrapper } from "../Modal/ModalWrapper";
import { OpenProduct } from "../Modal/OpenProduct/OpenProduct";

export const Product = ({ product }) => {
  const {
    productImg,
    productCount,
    productGrade,
    productPrice,
    productProduction,
    productSubtitle,
    stock,
    productTitle,
    status,
  } = product;

  const modal = useTypedSelector((state) => state.modal);
  const { openModalAction } = useActions();

  const handleModal = (event) => {
    const elementId = event.target.id;
    const listId = [
      "chooseVolume__first",
      "chooseVolume__second",
      "chooseVolume__third",
      "button",
    ];

    if (listId.includes(elementId)) {
      return;
    }

    openModalAction("open-product");
  };

  return (
    <>
      <ul className={style.product} onClick={(event) => handleModal(event)}>
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
          {!status && (
            <div className={style.product__production}>{productProduction}</div>
          )}
          {status && (
            <div className={style.product__chooseVolume}>
              {<ChooseVolume />}
            </div>
          )}
        </li>
        <li className={style.product__hooter}>
          <div className={style.product__production__leftSide}>
            <div className={style.product__production__price}>
              {productPrice}
            </div>
            <div className={style.product__production__count}>
              {productCount}
            </div>
          </div>
          <div className={style.product__production__rightSide}>
            <Info
              text="Пожалуйста выберите магазин, чтобы мы могли педоставить вам актуальный ассортимент"
              position="relative"
              width="100%"
              height="auto"
              positionWindow="bottom"
            >
              <Button
                title="В корзину"
                color="white"
                background="#20598E"
                padding="11px 24px"
                borderRadius="60px"
              />
            </Info>
          </div>
        </li>
        {stock && (
          <div className={style["product__stock--wrapper"]}>
            <div className={style.product__stock}>{stock}</div>
          </div>
        )}
      </ul>

      { modal.typeModal === "open-product" && <ModalWrapper
        padding="48px"
        borderRadius="20px"
        top="30%"
        left="50%"
        maxWidth="800px"
        minWidth="740px"
        modalIsOpen={modal.modalOpen}
        backgroundColor="#0000004D"
        close
      >
        <OpenProduct product={product} />
      </ModalWrapper>}
    </>
  );
};
