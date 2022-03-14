import React from "react";
import style from "./Contact.module.scss";

import { Button } from "../../ui/Button/Button";
import { YandexMap } from "../YandexMap/YandexMap";

import { contact } from "../../types/contact";

export const Contact = ({ address, phone, working_hours, setModalIsOpen, modalIsOpen }: contact) => {
  return (
    <div className={style.contact}>
      <div className={style.contact__leftSide}>
        <h3 className={style.contact__title}>Офис</h3>
        <div className={style.contact__address}>{address}</div>
        <div className={style.contact__phone}>{phone}</div>
        <h3 className={style.contact__title}>Время работы:</h3>
        <div className={style.contact__workingHours}>{working_hours}</div>
        <div className={style.contact__buttonsWrapper}>
          <Button
            title="Адреса магазинов"
            color="#3D69B7"
            fontWeight="700"
            fontSize="18px"
            margin="0 0 28px 0"
            borderBottom=" 1px dashed #3D69B7"
          />
          <Button
            title="Обратная связь"
            color="#3D69B7"
            fontWeight="700"
            fontSize="18px"
            borderBottom="1px dashed #3D69B7"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          />
        </div>
      </div>
      <div className={style.contact__rightSide}>
        <YandexMap width="960px" height="500px" />
      </div>
    </div>
  );
};
