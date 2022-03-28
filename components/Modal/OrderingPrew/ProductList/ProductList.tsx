import React, { useState } from "react";
import style from "./ProductList.module.scss";
import Image from "next/image";

import { ProductCounter } from "../../../../ui/ProductCounter/ProductCounter";
import { DeleteButton } from "./DeleteButton/DeleteButton";

import { cart } from "../data";

export const ProductList = () => {
  const [productList, setProductList] = useState<
    | {
        img: StaticImageData;
        name: string;
        price: number;
        count: number;
        id: number;
      }[]
    | null
  >(cart);

  return (
    <div className={style.productList}>
      {productList ? (
        <ul className={style.list}>
          {productList.map((product) => {
            return (
              <li className={style.item} key={product.id}>
                <div className={style.imageWrapper}>
                  <Image
                    src={product.img}
                    alt="product"
                    className={style.image}
                    width={85}
                    height={85}
                  />
                </div>

                <h4 className={style.nameProduct}>{product.name}</h4>
                <ProductCounter
                  productInfo={{ price: product.price, count: product.count }}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Корзина пуста, добавьте товар.</div>
      )}
      {productList && (
        <div className={style.buttonWrapper}>
          <DeleteButton onClick={() => setProductList(null)} />
        </div>
      )}
    </div>
  );
};
