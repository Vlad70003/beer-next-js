import React, { useState, useEffect } from "react";
import style from "./Catalog.module.scss";

import { catalogState } from "../../types/catalog";
import { baseBackground } from "../../assests/variable/variable";
import { Button } from "../../ui/Button/Button";
import { Product } from "../Product/Product";

import {
  BeerExample,
  meatExaple,
  beveragesExaple,
  fishExaple,
  cheaseExaple,
  snackExaple,
  otherExaple,
} from "../Product/productExample";

export function Catalog({ title, sortButton, product }: catalogState) {

  const [currentProduct, setCurrentProduct] = useState<any>(null);

  useEffect(() => {
    switch (product) {
      case "beer":
        setCurrentProduct(BeerExample);
        break;
      case "bottled":
        setCurrentProduct(BeerExample);
        break;
      case "beverages":
        setCurrentProduct(beveragesExaple);
        break;
      case "fishes":
        setCurrentProduct(fishExaple);
        break;
      case "meat":
        setCurrentProduct(meatExaple);
        break;
      case "chease":
        setCurrentProduct(cheaseExaple);
        break;
      case "snacks":
        setCurrentProduct(snackExaple);
        break;
      case "other":
        setCurrentProduct(otherExaple);
        break;
      default:
        return;
    }
  }, [product]);

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
                  padding="13px 40px"
                  color="#434242"
                  border="1px solid #C5C5C580"
                  borderRadius="40px"
                  margin="14px 25px 0 0"
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className={style.catalog__list}>
        {currentProduct?.map((item: {}, ind: number) => {
            return (
              <li className={style.catalog__item} key={ind}>
                <Product product={item} />
              </li>
            );
          })}
      </ul>
    </section>)
}
