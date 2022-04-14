import React, { useState } from "react";
import style from "./RateTheDelivery.module.scss";

import { RatingStar } from "../../RatingStar/RatingStar";
import { BorderWrapper } from "../../wrappers/borderWrapper/BorderWrapper";
import { TextArea } from "../../../ui/Textarea/TeaxtArea";
import { FileButton } from "../../../ui/FileButton/FileButton";
import { Button } from "../../../ui/Button/Button";

export const RateTheDelivery = () => {
  return (
    <div className={style.rateTheDelivery}>
      <h5 className={style.rateTheDelivery__title}>Оценить заказ</h5>
      <h6 className={style.rateTheDelivery__postTitle}>
        Оцените заказ и помогите нам стать лучше!
      </h6>
      <div className={style.rateTheDelivery__rating}>
        <RatingStar />
      </div>
      <label className={style.rateTheDelivery__label}>
        <div className={style.rateTheDelivery__label__title}>Комментарий:</div>
        <BorderWrapper
          border="1px solid #BFBFBF"
          borderRadius="15px"
          background="white"
          padding="8px 24px"
          position="relative"
          className={style.absolute}
        >
          <TextArea width="100%" placeholder="Оставьте отзыв" rows={5} resize />
        </BorderWrapper>
      </label>
      <div className={style.rateTheDelivery__file}>
        <BorderWrapper
          border="1px dashed #BFBFBF"
          borderRadius="15px"
          background="white"
          padding="15px 24px"
          position="relative"
          className={style.absolute}
          display="flex"
          justifyContent="center"
        >
          <FileButton title="Прикрепить файл" postTitle="Размер файла не более 5MB" />
        </BorderWrapper>
      </div>
      < Button title="Отправить" background="#20598E" color="white" padding="13px 0" width="100%" borderRadius="60px" />
    </div>
  );
};
