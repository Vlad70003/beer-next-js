import React, { useState } from "react";
import style from "./OpenProduct.module.scss";
import Image from "next/image";

import { ChooseVolume } from "../../../ui/ChooseVolume/ChooseVolume";
import { useActions } from "../../../hooks/useActions";
import { Button } from "../../../ui/Button/Button";

interface OpenProductProps {
  product: {
    brewery?: string;
    productImg: string;
    productCount: string;
    productGrade: string;
    productPrice: string;
    productProduction: string;
    productSubtitle: string;
    stock: string;
    productTitle: string;
    status: string;
    description?: string;
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
  } = product;

  const { addOrderAction } = useActions();

  const [step, setStep] = useState(1);

  const handleStep = (value: number) => {
    setStep(value);
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
          {status && (
            <div className={style.row}>
              <ChooseVolume handleStep={handleStep} step={step} />
            </div>
          )}
        </main>
        <footer className={style.footer}>
          <div className={style.footer__column}>
            <div className={style.footer__row}>{productPrice}</div>
            <div className={style.footer__row}>{productCount}</div>
          </div>
          <div className={style.footer__column}>
            <Button
              title="В корзину"
              fontSize="18px"
              background="#20598E"
              padding="11px 0"
              width="100%"
              color="white"
              borderRadius="60px"
              onClick={() => addOrderAction({product, step})}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};
