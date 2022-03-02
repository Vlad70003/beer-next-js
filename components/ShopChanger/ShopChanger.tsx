import React from "react";
import style from "./ShopChanger.module.scss";
import Image from "next/image";

import { Button } from "../../ui/Button/Button";
import trash from "../../assests/img/trash.svg";

export const ShopChanger = () => {
  return (
    <div className={style.shopChanger}>
      <div className={style.shopChanger__adressWrapper}>
        <label htmlFor="adress" className={style.shopChanger__label}>
          Адрес:
        </label>
        <div className={style.shopChanger__adress}>
          <Button
            title="г. Северодвинск, ул. Железнодорожная, 50/1"
            fontWeight="400"
            color="#3D69B7"
            borderBottom="1px dashed #3D69B7"
            padding="0 5px 0 0"
          />
          <Image
            src={trash}
            alt="delete"
            className={style.shopChanger__delete}
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className={style.shopChanger__timetableWrapper}>
        <div className={style.shopChanger__timetableLeftSide}>
          <a
            href="tel:+7-900-000-00-02"
            className={style.shopChanger__timetableLeftSide__phone}
          >
            +7-900-000-00-02
          </a>
        </div>
        <div className={style.shopChanger__timetableRightSide}>
            <ul className={style.shopChanger__timetableRightSide__list}>
                <li className={style.shopChanger__timetableRightSide__item}>
                    <div className={style.shopChanger__timetableRightSide__day}>пн-пт</div>
                    <div className={style.shopChanger__timetableRightSide__time}>10:00 - 22:00</div>
                </li>
                <li className={style.shopChanger__timetableRightSide__item}>
                    <div className={style.shopChanger__timetableRightSide__day}>сб-вс</div>
                    <div className={style.shopChanger__timetableRightSide__time}>10:00 - 23:00</div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};
