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
  const {deleteOrderAction} = useActions()

  const [productList, setProductList] = useState<orderArg[]>(order);

  useEffect(() => {
    addToOrder({ setProductList, order, productList });
  }, [order]);

  return (
    <div className={style.productList}>
      {productList && productList?.length ? (
        <ul className={style.list}>
          {productList.map((product) => {
            return (
              <li className={style.item} key={product.product.id}>
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
                </div>

                <div className={style.item__col}>
                  <ProductCounter
                    productInfo={{
                      price: product.product.productPrice,
                      count: product.number || 1,
                      status: product.product.status,
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
      {productList && productList?.length ? (
        <div className={style.buttonWrapper}>
          <DeleteButton onClick={() => deleteOrderAction()} />
        </div>
      ) : null}
    </div>
  );
};
