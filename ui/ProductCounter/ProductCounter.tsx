import React, { useEffect, useState } from "react";
import style from "./ProductCounter.module.scss";

import { useActions } from "../../hooks/useActions";

import { handleProductCounter } from "./script";

interface ProductCounterProps {
  productInfo: {
    product: any;
    price: number;
    count: number;
    status: string | null;
    step: number;
  };
}

export const ProductCounter = ({ productInfo }: ProductCounterProps) => {

  const {addOrderAction} = useActions();
  const {deteteOrderAction} = useActions();

  const [productCount, setProductCount] = useState<number>(productInfo.count);

  const priceCalculate = (productCount: number, price: number) => {
    return productCount * price;
  };

  useEffect(() => {
    setProductCount(productInfo.count);
  }, [productInfo]);

  return (
    <div className={style.productCounter}>
      <div className={style.row}>{`${priceCalculate(
        productCount,
        productInfo.price
      )} ₽`}</div>
      <div className={style.row}>
        <button
          className={style.button}
          onClick={() => {
            handleProductCounter({
              deteteOrderAction,
              addOrderAction,
              product: productInfo.product,
              step: productInfo.step,
              status: productInfo.status,
              productCount,
              setProductCount,
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
              status: productInfo.status,
              productCount,
              setProductCount,
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
