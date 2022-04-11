import React, { useEffect, useState } from "react";
import style from "./ProductList.module.scss";
import Image from "next/image";

import { ProductCounter } from "../../../../ui/ProductCounter/ProductCounter";
import { DeleteButton } from "./DeleteButton/DeleteButton";

import { addToOrder } from "./script";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

import { orderArg } from "../../../../types/order";

export const ProductList = () => {
  const { order }: { order: orderArg[] } = useTypedSelector(
    (store) => store.order
  );
  const { generalOrder }: { generalOrder: orderArg[] } = useTypedSelector(
    (store) => store.generalOrder
  );
  const { deleteAllOrderAction } = useActions();
  const { addGeneralOrderAction } = useActions();

  useEffect(() => {
    addToOrder({ addGeneralOrderAction, order });
  }, [order]);

  return (
    <div className={style.productList}>
      {generalOrder?.length ? (
        <ul className={style.list}>
          {generalOrder.map((product) => {
            return (
              <li className={style.item} key={product.key}>
                <div className={style.item__col}>
                  <div className={style.imageWrapper}>
                    <Image
                      src={product.product.productImg.src}
                      alt="product"
                      className={style.image}
                      width={85}
                      height={85}
                    />
                  </div>
                </div>
                <div className={style.item__col}>
                  <h4 className={style.nameProduct}>
                    {product.product.productTitle}
                  </h4>
                  {(product.product.status === "draft" || product.product.status === "conteiner")  && (
                    <div
                      className={style.item__displacement}
                    >{`${product.step} л.`}</div>
                  )}
                </div>
                <div className={style.item__col}>
                  <ProductCounter
                    productInfo={{
                      product: product,
                      price: product.product.productPrice,
                      count: product.number || 1,
                      status: product.product.status,
                      step: product.step,
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={style.clearList}>Корзина пуста, добавьте товар.</div>
      )}
      {generalOrder && generalOrder?.length ? (
        <div className={style.buttonWrapper}>
          <DeleteButton onClick={() => deleteAllOrderAction()} />
        </div>
      ) : null}
    </div>
  );
};
