import React, { useEffect, useState, useLayoutEffect } from "react";
import style from "./ProductCounter.module.scss";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { handleProductCounter } from "./script/handleProductCounter";

interface ProductCounterProps {
  customNumber?: boolean;
  productInfo: {
    product?: any;
    price: number;
    count: number;
    status: string | null;
    step: number;
    measure: {
      symbol: string;
    };
  };
  padding?: string;
  status: string | null;
}

export const ProductCounter = ({
  customNumber,
  productInfo,
  padding,
  status,
}: ProductCounterProps) => {
  const { addOrderAction } = useActions();
  const { deteteOrderAction } = useActions();
  const { generalOrder } = useTypedSelector((state) => state.generalOrder);

  const [productCount, setProductCount] = useState<number>(productInfo.count);
  const [productPrice, setProductPrice] = useState(0);


  useEffect(() => {
    const pow = productCount * productInfo?.price;

    if (status === "draft" || status === "conteiner") {
      setProductPrice(pow * productInfo.step);
    } else if (status === "weight") {
      setProductPrice(pow / 100);
    } else {
      setProductPrice(pow);
    }
  }, [productCount]);

  useEffect(() => {
    if (status === "draft" || status === "conteiner") {
      setProductCount(productInfo.count);
    } else if (status === "weight") {
      setProductCount(productInfo.count * 100);
    } else {
      setProductCount(productInfo.count);
    }
  }, [productInfo]);

  const sountStyle = {
    padding: padding || "0 11px",
  };

  return (
    <div className={style.productCounter}>
      {customNumber ? null : (
        <div className={style.row}>{`${productPrice} ₽`}</div>
      )}
      <div className={customNumber ? style.onlyButton : style.row}>
        <button
          className={style.button}
          onClick={() => {
            handleProductCounter({
              deteteOrderAction,
              addOrderAction,
              generalOrder,
              product: productInfo.product,
              step: productInfo.step,
              productCount,
              action: "increase",
              status: status,
            });
          }}
        >
          -
        </button>
        <div className={style.count} style={sountStyle}>
          {`${productCount} ${productInfo?.product?.measure?.symbol}`}
        </div>
        <button
          className={style.button}
          onClick={() => {
            handleProductCounter({
              deteteOrderAction,
              addOrderAction,
              generalOrder,
              product: productInfo.product,
              step: status === "weight" ? 0.5 : productInfo.step,
              productCount,
              action: "decrease",
              status: status,
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
