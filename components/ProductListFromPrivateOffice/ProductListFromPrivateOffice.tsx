import React, { useState } from "react";
import style from "./ProductListFromPrivateOffice.module.scss";

import {ProductList} from "./List/ProductList";

interface ProductListFromPrivateOfficeState {
  productList: any[];
}

export const ProductListFromPrivateOffice = ({
  productList,
}: ProductListFromPrivateOfficeState) => {

  return (
    <div className={style.productListFromPrivateOffice}>
      <ul className={style.productListFromPrivateOffice__list}>
        {productList.map((item, idx) => {
          return (
            < ProductList item={item} key={idx}/>
          );
        })}
      </ul>
      
    </div>
  );
};
