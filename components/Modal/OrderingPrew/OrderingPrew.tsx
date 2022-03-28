import React from "react";
import style from "./OrderingPrew.module.scss";
import Link from "next/link";

import { ProductList } from "./ProductList/ProductList";
import { SlickSliderToOrder } from "../../Slick-slider-order/Slick-slider";
import { Button } from "../../../ui/Button/Button";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

export const OrderingPrew = () => {
  const modal = useTypedSelector((state) => state.modal);
  const { closeModalAction } = useActions();

  const orderingPrewStyle = {
    marginRight: modal.typeModal === "ordering-prew" ? "0px" : "-1000px",
    transition: "margin-right .5s",
  };

  return (
    <div className={style.orderingPrew} style={orderingPrewStyle}>
      <div className={style.topSide}>
        <h3 className={style.title}>Ваша корзина</h3>
        <div className={style.productListWrapper}>
          <ProductList />
        </div>
        <h3 className={style.secondTitle}>Добавить к заказу?</h3>
        <div className={style.slideWrapper}>
          <SlickSliderToOrder />
        </div>
      </div>
      <div className={style.bottomSide}>
        <div className={style.total}>
          <div className={style.total__title}>Итого:</div>
          <div className={style.total__count}>1500 ₽</div>
        </div>
        <Link href="/Ordering">
          <a>
            <Button
              title="Оформить заказ"
              background="#20598E"
              borderRadius="60px"
              color="white"
              padding="12px 0"
              margin="0 5%"
              width="90%"
            />
          </a>
        </Link>
      </div>
      <div className={style.close} onClick={() => closeModalAction()}></div>
    </div>
  );
};