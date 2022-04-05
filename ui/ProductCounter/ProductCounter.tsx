import React, { useEffect, useState } from "react";
import style from "./ProductCounter.module.scss";

import { handleProductCounter } from "./script";

interface ProductCounterProps {
  productInfo: {
    price: number;
    count: number;
    status: string | null;
  };
}

export const ProductCounter = ({ productInfo }: ProductCounterProps) => {
  const [productCount, setProductCount] = useState<number>(productInfo.count);

  const priceCalculate = (productCount: number, price: number) => {
    return productCount * price;
  };

  useEffect(() => {
    setProductCount(productInfo.count);
  }, [productInfo.count]);

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
