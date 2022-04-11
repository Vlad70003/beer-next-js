import React, { useEffect, useState, useLayoutEffect } from "react";
import style from "./ProductCounter.module.scss";

import { useActions } from "../../hooks/useActions";

import { handleProductCounter } from "./script";

interface ProductCounterProps {
  customNumber?: boolean;
  productInfo: {
    product?: any;
    price: number;
    count: number;
    status: string | null;
    step: number;
  };
}

export const ProductCounter = ({
  customNumber,
  productInfo,
}: ProductCounterProps) => {
  const { addOrderAction } = useActions();
  const { deteteOrderAction } = useActions();

  const [productCount, setProductCount] = useState<number>(productInfo.count);

  const priceCalculate = (productCount: number, price: number) => {
    const pow = productCount * price;

    if (productInfo.status === "draft") {
      return pow * productInfo.step;
    } else if (productInfo.status === "weight") {
      return pow / 100;
    } else {
      return pow;
    }
  };

  useEffect(() => {
    if (productInfo.status === "draft") {
      setProductCount(productInfo.count / productInfo.step);
    } else if (productInfo.status === "weight") {
      setProductCount(productInfo.count * 100);
    } else {
      setProductCount(productInfo.count);
    }
  }, [productInfo]);

  return (
    <div className={style.productCounter}>
      {customNumber ? null : (
        <div className={style.row}>{`${priceCalculate(
          productCount,
          productInfo.price
        )} ₽`}</div>
      )}
      <div className={style.row}>
        <button
          className={style.button}
          onClick={() => {
            handleProductCounter({
              deteteOrderAction,
              addOrderAction,
              product: productInfo.product,
              step: productInfo.step,
              productCount,
              action: "increase",
            });
          }}
        >
          -
        </button>
        <div className={style.count}>
          {productInfo.status === "draft"
            ? `${productCount} шт.`
            : productInfo.status === "weight"
            ? `${productCount} гр.`
            : `${productCount} шт.`}
        </div>
        <button
          className={style.button}
          onClick={() => {
            handleProductCounter({
              deteteOrderAction,
              addOrderAction,
              product: productInfo.product,
              step: productInfo.status === "weight" ? 0.5 : productInfo.step,
              productCount,
              action: "decrease",
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
