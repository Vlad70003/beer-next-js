import React from "react";
import style from "./ShopChanger.module.scss";
import Image from "next/image";

import { ChangeShopButton } from "../ChangeShopButton/ChangeShopButton";
import trash from "../../assests/img/trash.svg";
import { useActions } from "../../hooks/useActions";

export const ShopChanger = () => {

  const { deleteCurrentShapAction } = useActions();

  return (
    <div className={style.shopChanger}>
      <div className={style.shopChanger__adressWrapper}>
        <label htmlFor="adress" className={style.shopChanger__label}>
          Адрес:
        </label>
        <div className={style.shopChanger__adress}>
          <ChangeShopButton
            borderBottom="1px dashed rgb(61, 105, 183)"
            margin="0 10px 0 0"
            noLogo
          />
          <Image
            src={trash}
            alt="delete"
            className={style.shopChanger__delete}
            width={20}
            height={20}
            onClick={deleteCurrentShapAction}
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
              <div className={style.shopChanger__timetableRightSide__day}>
                пн-пт
              </div>
              <div className={style.shopChanger__timetableRightSide__time}>
                10:00 - 22:00
              </div>
            </li>
            <li className={style.shopChanger__timetableRightSide__item}>
              <div className={style.shopChanger__timetableRightSide__day}>
                сб-вс
              </div>
              <div className={style.shopChanger__timetableRightSide__time}>
                10:00 - 23:00
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
