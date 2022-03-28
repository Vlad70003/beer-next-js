import React, { useState } from "react";
import style from "./ProductCounter.module.scss";

interface ProductCounterProps {
  productInfo: {
    price: number;
    count: number;
  };
}

export const ProductCounter = ({ productInfo }: ProductCounterProps) => {
  const [productCount, setProductCount] = useState<number>(productInfo.count);

  const priceCalculate = (productCount: number, price: number) => {
    return productCount * price;
  };

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
            productCount > 0 && setProductCount(productCount - 1);
          }}
        >
          -
        </button>
        <div className={style.count}>{`${productCount} шт.`}</div>
        <button
          className={style.button}
          onClick={() => setProductCount(productCount + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
