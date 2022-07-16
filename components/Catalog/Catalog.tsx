import React, { useState, useEffect } from "react";
import style from "./Catalog.module.scss";

//component
import { catalogState } from "../../types/catalog";
import { baseBackground } from "../../assests/variable/variable";
import { Button } from "../../ui/Button/Button";
import { Product } from "../Product/Product";

//types
import { productItem } from "../../types/product";

export function Catalog({ title, product, filters }: catalogState) {
  const [filterArray, setFilterArray] = useState<any>([]);

  return (
    <section className={style.catalog}>
      <h2 className={style.catalog__title}>{title}</h2>
      <nav className={style.catalog__nav}>
        <ul className={style.catalog__nav__list}>
          {filters?.map((item: any) =>
            item?.values.map(
              (
                element: { value: string; id: string },
                ind: React.Key | null | undefined
              ) => {
                return (
                  <li
                    className={style.catalog__nav__item}
                    key={ind}
                    onClick={() =>
                      setFilterArray((list: any) => {
                        const array = list.concat([]);
                        let flag = true;
                        let index = null;
                        array.forEach((itm: any, ind: any) => {
                          flag = false;
                          itm.id === element.id ? (index = ind) : null;
                        });
                        !flag && index !== null
                          ? array.splice(index, 1)
                          : array.push(element);

                        return array;
                      })
                    }
                  >
                    <Button
                      title={element.value}
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
              }
            )
          )}
        </ul>
      </nav>
      <ul className={style.catalog__list}>
        {product?.slice(0, 1).map(
          (
            item: productItem,
            ind: number
          ) => {
            const li = (
              <li className={style.catalog__item} key={ind}>
                <Product product={item} />
              </li>
            );
            const arr: boolean[] = [];

            filterArray.length &&
              item?.props.map((itm) => {
                filterArray?.map((iem: { id: any; value: string }) => {
                  if (itm.id === iem.id) {
                    if (itm.value === iem.value) {
                      arr.push(true);
                    } else {
                      arr.push(false);
                    }
                  }
                });
              });

            if (!filterArray.length) {
              return li;
            } else if (filterArray.length && !arr.includes(false)) {
              return li;
            }
          }
        )}
      </ul>
    </section>
  );
}
