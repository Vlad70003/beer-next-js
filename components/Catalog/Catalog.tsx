import React, { useState, useEffect } from "react";
import style from "./Catalog.module.scss";

import { catalogState } from "../../types/catalog";
import { baseBackground } from "../../assests/variable/variable";
import { Button } from "../../ui/Button/Button";
import { Product } from "../Product/Product";


export function Catalog({ title, sortButton, product }: catalogState) {

  return (<section className={style.catalog}>
      <h2 className={style.catalog__title}>{title}</h2>
      <nav className={style.catalog__nav}>
        <ul className={style.catalog__nav__list}>
          {sortButton?.map((item, ind) => {
            return (
              <li className={style.catalog__nav__item} key={ind}>
                <Button
                  title={item}
                  background={baseBackground}
                  padding="0.72rem 2.222rem"
                  color="#434242"
                  border="1px solid #C5C5C580"
                  borderRadius="40px"
                  margin="0.7777rem 1.38rem 0 0"
                  fontSize="1rem"
                  selectClass="filterBtn"
                  selected
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className={style.catalog__list}>
        {product?.map((item: {}, ind: number) => {
            return (
              <li className={style.catalog__item} key={ind}>
                <Product product={item} />
              </li>
            );
          })}
      </ul>
    </section>)
}
