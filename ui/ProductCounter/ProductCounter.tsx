import React, { useEffect, useState } from "react";
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
    return productCount * price;
  };

  useEffect(() => {
    setProductCount(productInfo.count);
  }, [productInfo]);

  const customNumberCounter = (act: string, step: number) => {
    if (act === "increase") {
      setProductCount((prev) => prev - step);
    }

    if (act === "decrease") {
      setProductCount((prev) => prev + step);
    }
  };

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
          {productInfo.status ? `${productCount} л.` : `${productCount} шт.`}
        </div>
        <button
          className={style.button}
          onClick={() => {
            handleProductCounter({
              deteteOrderAction,
              addOrderAction,
              product: productInfo.product,
              step: productInfo.step,
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
