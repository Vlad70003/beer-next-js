import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";

import { BaseWrapperMargin } from "../wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Social } from "../Link/Social/Social";

import logotype from "../../assests/img/logotype.svg";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__topPart}>
        <BaseWrapperMargin>
          <div className={style.footer__topPart__text}>
            В соответствии с действующим законодательством, мы не продаем
            алкоголь через интернет-магазин. Товар на сайте представлен для
            ознакомления с ценами и совершения бронирования заказа.
          </div>
        </BaseWrapperMargin>
      </div>
      <div className={style.footer__bottomPart}>
        <BaseWrapperMargin
          maxWidth="1290px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <div className={style.footer__bottomPart__leftSide}>
            <Image src={logotype} alt="logotype" className={style.footer__img} />
          </div>
          <div className={style.footer__bottomPart__middleSide}>
            <div className={style.footer__bottomPart__middleSide__text}>
              18+ ЧРЕЗМЕРНОЕ УПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ
            </div>
          </div>
          <div className={style.footer__bottomPart__rightSide}>
            <div className={style.footer__bottomPart__rightSide__leftSide}>
              Политика в области персональных данных
            </div>
            <div className={style.footer__bottomPart__rightSide__rightSide}>
              <Social
                href="#"
                width="24px"
                height="24px"
                borderRadius="50%"
                background="#a7a7a710"
                social="inst"
                margin="0 8px"
              />
              <Social
                href="#"
                width="24px"
                height="24px"
                borderRadius="50%"
                background="#a7a7a710"
                social="vk"
                margin="0"
              />
            </div>
          </div>
        </BaseWrapperMargin>
      </div>
    </footer>
  );
};
