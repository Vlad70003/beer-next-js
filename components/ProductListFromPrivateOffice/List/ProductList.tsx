import React, { useState } from "react";
import style from "./ProductList.module.scss";

import { Phase } from "../../../ui/Phase/Phase";
import { Button } from "../../../ui/Button/Button";
import { ProductItem } from "../Item/ProductItem";

interface ProductListState {
  item: any;
}

export const ProductList = ({ item }: ProductListState) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className={style.productListFromPrivateOffice__item}>
      <header className={style.productListFromPrivateOffice__header}>
        <ul className={style.productListFromPrivateOffice__headerLeftSide__list}>
          <li className={style.productListFromPrivateOffice__headerLeftSide__item}>
            {item.date}
          </li>
          <li className={style.productListFromPrivateOffice__headerLeftSide__item}>
            <label
              htmlFor=""
              className={style.productListFromPrivateOffice__headerLeftSide__item__label}
            >
              <pre>Имя: </pre>
            </label>
            <div className={style.productListFromPrivateOffice__headerLeftSide__item__value}>
              {item.user.firstName}
            </div>
          </li>
          <li className={style.productListFromPrivateOffice__headerLeftSide__item}>
            <label
              htmlFor=""
              className={style.productListFromPrivateOffice__headerLeftSide__item__label}
            >
              <pre>Статус: </pre>
            </label>
            <div className={style.productListFromPrivateOffice__headerLeftSide__item__value}>
              {item.status}
            </div>
          </li>
        </ul>
        <ul className={style.productListFromPrivateOffice__headerMiddleSide__list}>
          <li className={style.productListFromPrivateOffice__headerMiddleSide__item}>
            {item.destination}
          </li>
          <li className={style.productListFromPrivateOffice__headerMiddleSide__item}>
            <Phase phaseNumber={item.phase} />
          </li>
          <li
            className={style.productListFromPrivateOffice__headerMiddleSide__item} productListFromPrivateOffice__button-wrapper
            onClick={handleOpen}
          >
            <Button
              title="Подробнее"
              color="#3D69B7"
              fontWeight="700"
              borderBottom="1px dotted #3D69B7"
              padding="0 5px 0 0"
            />
            <span className={isOpen ? `${style.arrow} ${style.down}` : `${style.arrow} ${style.up}`}></span>
          </li>
        </ul>
        <ul className={style.productListFromPrivateOffice__headerRightSide__list}>
          <li className={style.productListFromPrivateOffice__headerRightSide__item}>
            <label
              htmlFor=""
              className={style.productListFromPrivateOffice__headerLeftSide__item__label}
            >
              <pre>Сумма заказа: </pre>
            </label>
            <div className={style.productListFromPrivateOffice__headerLeftSide__item__value}>
              {item.sumPrice}
            </div>
          </li>
          <li className={style.productListFromPrivateOffice__headerRightSide__item}>
            <label
              htmlFor=""
              className={style.productListFromPrivateOffice__headerLeftSide__item__label}
            >
              <pre>Начислено бонусов: </pre>
            </label>
            <div className={style.productListFromPrivateOffice__headerLeftSide__item__value}>
              {item.bonus}
            </div>
          </li>
          <li className={style.productListFromPrivateOffice__headerRightSide__item}>
            <label
              htmlFor=""
              className={style.productListFromPrivateOffice__headerLeftSide__item__label}
            >
              <pre>Списано: </pre>
            </label>
            <div className={style.productListFromPrivateOffice__headerLeftSide__item__value}>
              {item.writtenOff}
            </div>
          </li>
        </ul>
      </header>
      <main className={ isOpen ? `${style.productListFromPrivateOffice__main__open}` : `${style.productListFromPrivateOffice__main__close}`}>
        <ul className={style.productListFromPrivateOffice__main__list}>
          {item.productList.map((product: any, ind:number) => {
            return <ProductItem product={product} key={ind} />;
          })}
        </ul>
        <div className={style.productListFromPrivateOffice__bonus}>
          <div className={style.productListFromPrivateOffice__bonus__content}>Оплата бонусами:</div>
          <div className={style.productListFromPrivateOffice__bonus__content}>-500 ₽</div>
        </div>
        <div className={style.productListFromPrivateOffice__total}>
          <div className={style.productListFromPrivateOffice__total__content}>Итог:</div>
          <div className={style.productListFromPrivateOffice__total__content}>1500 ₽</div>
        </div>

      </main>
      
    </li>
  );
};
