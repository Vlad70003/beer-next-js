import React from "react";
import style from "./PurchaseSuccess.module.scss";
import Link from "next/link";

import { Button } from "../../../ui/Button/Button";

export const PurchaseSuccess = () => {
  return (
    <div className={style.purchaseSuccess}>
      <header className={style.header}>
        <h3 className={style.header__title}>Спасибо за заказ!</h3>
      </header>
      <main className={style.main}>
        <div className={style.row}>
          <div className={style.main__title}>
            Как тольок ваш заказ будет готов, вы получите СМС-уведомление на
            мобильный телефон
          </div>
        </div>
        <div className={style.row}>
          <div className={style.main__title}>
            Наблюдать за текущим статусом заказа можно в личном кабинете, в
            разделе мои покупки”
          </div>
        </div>
        <div className={style.row}>
          <div className={style.main__title}>
            За этот заказ вам будет начислено 100 бонусов
          </div>
          <div className={style.main__subtitle}>
            Посмотреть количество бонусных баллов можно в личном кабинете
          </div>
        </div>
      </main>
      <footer className={style.footer}>
        <Link href="/">
          <a style={{flex: 1, padding: "0 16px 0 0"}}>
            <Button
              title="На главную"
              color="#3D69B7"
              border="1px solid #3D69B7"
              borderRadius="60px"
              padding="12px 27px"
              width="100%"
            />
          </a>
        </Link>
        <Link href="/PrivateOffice">
          <a style={{flex: 1}}>
            <Button
              title="В личный кабинет"
              color="white"
              border="1px solid #20598E"
              borderRadius="60px"
              padding="12px 27px"
              background="#20598E"
              width="100%"
            />
          </a>
        </Link>
      </footer>
    </div>
  );
};
