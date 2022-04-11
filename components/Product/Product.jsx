import React, { useEffect, useState } from "react";
import style from "./Product.module.scss";
import Image from "next/image";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import { Info } from "../../ui/Info/Info";
import { Button } from "../../ui/Button/Button";
import { ChooseVolume } from "../../ui/ChooseVolume/ChooseVolume";
import { ModalWrapper } from "../Modal/ModalWrapper";
import { OpenProduct } from "../Modal/OpenProduct/OpenProduct";
import { ProductCounter } from "../../ui/ProductCounter/ProductCounter";

import { checkedProductInOrder } from "../../script/order/checkedProductInOrder";
import {
  handleProductionCount,
  handleProductionPrice,
  handleModal,
} from "./script";

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
    id,
  } = product;

  const modal = useTypedSelector((state) => state.modal);
  const { currentShop } = useTypedSelector((state) => state.currentShop);
  const { generalOrder } = useTypedSelector((state) => state.generalOrder);

  const { openModalAction } = useActions();
  const { addOrderAction } = useActions();

  const [step, setStep] = useState(1);

  const [checkedAndNumberProductInOrder, setCheckedAndNumberProductInOrder] =
    useState(null);

  useEffect(() => {
    const { productIsOrder, numberOrder } = checkedProductInOrder({
      generalOrder,
      id,
      step,
    });
    setCheckedAndNumberProductInOrder({ productIsOrder, numberOrder });
  }, [generalOrder, id, step]);

  const handleStep = (value) => {
    setStep(value);
  };
  return (
    <>
      <ul
        className={style.product}
        onClick={(event) => handleModal(event, openModalAction)}
      >
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
          {status !== "draft" && (
            <div className={style.product__production}>{productProduction}</div>
          )}
          {status === "draft" && (
            <div className={`${style.product__chooseVolume} chooseVolume`}>
              {<ChooseVolume step={step} handleStep={handleStep} />}
            </div>
          )}
        </li>
        <li className={style.product__hooter}>
          <div className={style.product__production__leftSide}>
            <div className={style.product__production__price}>
              {`${handleProductionPrice({ productPrice, step })} Р`}
            </div>
            <div className={style.product__production__count}>
              {handleProductionCount({ productCount, status, step })}
            </div>
          </div>
          <div
            className={`${style.product__production__rightSide} product__button-wrapper`}
          >
            {checkedAndNumberProductInOrder?.productIsOrder ? (
              <ProductCounter
                customNumber
                productInfo={{
                  product: product,
                  price: productPrice,
                  count: checkedAndNumberProductInOrder?.numberOrder || 1,
                  status: status,
                  step: step,
                }}
              />
            ) : (
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
                  onClick={() => {
                    currentShop === "Выберите магазин"
                      ? openModalAction("change-shop")
                      : addOrderAction({ product, step });
                  }}
                />
              </Info>
            )}
          </div>
        </li>
        {stock && (
          <div className={style["product__stock--wrapper"]}>
            <div className={style.product__stock}>{stock}</div>
          </div>
        )}
      </ul>

      {modal.typeModal === "open-product" && (
        <ModalWrapper
          padding="48px"
          borderRadius="20px"
          top="30%"
          left="50%"
          maxWidth="800px"
          minWidth="740px"
          modalIsOpen={modal.modalOpen}
          backgroundColor="#0000004D"
          onRequestClose
          close
        >
          <OpenProduct
            product={product}
            step={step}
            isOrder={checkedAndNumberProductInOrder.productIsOrder}
            numberOrder={checkedAndNumberProductInOrder.numberOrder}
          />
        </ModalWrapper>
      )}
    </>
  );
};
