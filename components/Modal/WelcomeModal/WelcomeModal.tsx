import React from "react";
import style from "./WelcomeModal.module.scss";

import { Button } from "../../../ui/Button/Button";

interface welcomeModelState {
  closeModal?: any;
}

export const WelcomeModal = ({ closeModal }: welcomeModelState) => {


  return (
    <div className={style.modalWelcome}>
      <h1 className={style.modalWelcome__title}>Вам уже исполнилось 18 лет?</h1>
      <div className={style.modalWelcome__subTitle}>
        Мы не продаем алкогольную продукцию несовершеннолетним
      </div>
      <div className={style.modalWelcome__buttonsWrapper}>
        <Button
          title="Нет"
          color="#3D69B7"
          type="button"
          background="white"
          padding="10px 70px"
          border="1px solid #3D69B7"
          borderRadius="60px"
        />
        <Button
          title="Да, мне есть 18 "
          color="white"
          background="#20598E"
          padding="10px 30px"
          border="1px solid #20598E"
          borderRadius="60px"
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
