import React, { useState, useEffect } from "react";
import style from "./OpenProduct.module.scss";
import Image from "next/image";

import { checkedProductInOrder } from "../../../script/order/checkedProductInOrder";

import { container } from "../../Product/productExample";

import { ChooseVolume } from "../../../ui/ChooseVolume/ChooseVolume";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ProductCounter } from "../../../ui/ProductCounter/ProductCounter";
import { Button } from "../../../ui/Button/Button";

interface OpenProductProps {
  product: {
    brewery?: string;
    productImg: string;
    productCount: string;
    productGrade: string;
    productPrice: number;
    productProduction: string;
    productSubtitle: string;
    stock: string;
    productTitle: string;
    status: string;
    description?: string;
    id: number;
  };
}

export const OpenProduct = ({ product }: OpenProductProps) => {
  const {
    brewery,
    productImg,
    productCount,
    productGrade,
    productPrice,
    productProduction,
    productSubtitle,
    stock,
    productTitle,
    status,
    description,
    id,
  } = product;

  const { addOrderAction } = useActions();
  const { openModalAction } = useActions();
  const { currentShop } = useTypedSelector((state) => state.currentShop);
  const { generalOrder } = useTypedSelector((state) => state.generalOrder);

  const [step, setStep] = useState(1);

  const [checkedAndNumberProductInOrder, setCheckedAndNumberProductInOrder] =
    useState<{ productIsOrder: boolean; numberOrder: number | null } | null>(
      null
    );

  useEffect(() => {
    const { productIsOrder, numberOrder } = checkedProductInOrder({
      generalOrder,
      id,
      step,
    });
    setCheckedAndNumberProductInOrder({ productIsOrder, numberOrder });
  }, [generalOrder, id, step]);

  const handleStep = (value: number) => {
    setStep(value);
  };

  const handleClick = () => {
    return currentShop === "Выберите магазин"
      ? openModalAction("change-shop")
      : addOrderAction({ product, step }) &&
          status === "draft" &&
          addOrderAction({ product: container, step });
  };

  return (
    <div className={style.openProduct}>
      <div className={style.leftSide}>
        <Image
          src={productImg}
          width="240px"
          height="240px"
          alt="product img"
        />
      </div>
      <div className={style.rightSide}>
        <main className={style.main}>
          <div className={style.row}>
            <h4 className={style.title}>{productTitle}</h4>
          </div>
          <div className={style.row}>
            <div className={style.text}>{productGrade}</div>
          </div>
          <div className={style.row}>
            <div className={style.text}>{productSubtitle}</div>
          </div>
          {brewery && (
            <div className={style.row}>
              <div className={`${style.text} ${style.text__grey}`}>
                {brewery}
              </div>
            </div>
          )}
          <div className={style.row}>
            <div className={`${style.text} ${style.text__grey}`}>
              {productProduction}
            </div>
          </div>
          {description && (
            <div className={style.row}>
              <div className={`${style.text} ${style.text__description}`}>
                {description}
              </div>
            </div>
          )}
          {status === "draft" && (
            <div className={style.row}>
              <ChooseVolume handleStep={handleStep} step={step} />
            </div>
          )}
        </main>
        <footer className={style.footer}>
          <div className={style.footer__column}>
            <div className={style.footer__row}>{`${productPrice} ₽`}</div>
            <div className={style.footer__row}>{productCount}</div>
          </div>
          <div className={style.footer__column}>
            {checkedAndNumberProductInOrder?.productIsOrder ? (
              <ProductCounter
                customNumber
                padding="0 50px"
                productInfo={{
                  product: product,
                  price: productPrice,
                  count: checkedAndNumberProductInOrder?.numberOrder || 1,
                  status: status,
                  step: step,
                }}
              />
            ) : (
              <Button
                title="В корзину"
                fontSize="18px"
                background="#20598E"
                padding="11px 0"
                width="100%"
                color="white"
                borderRadius="60px"
                onClick={() => handleClick()}
              />
            )}
          </div>
        </footer>
      </div>
    </div>
  );
};
