import React from "react";
import style from "./FeedBack.module.scss";

import { BorderWrapper } from "../../wrappers/borderWrapper/BorderWrapper";
import { Input } from "../../../ui/Input/Input";
import { TextArea } from "../../../ui/Textarea/TeaxtArea";
import { InputMaskLib } from "../../../ui/InputMask/InputMaskLib";
import { FileButton } from "../../../ui/FileButton/FileButton";
import { Button } from "../../../ui/Button/Button";

export const FeedBack = () => {
  return (
    <div className={style.feedBack}>
      <h3 className={style.feedBack__title}>Обратная связь</h3>
      <form className={style.form}>
        <div className={style.row}>
          <label className={style.label}>
            <div className={style.label__title}>
              Имя<span className={style.red}>*</span> :
            </div>

            <BorderWrapper
              border="1px solid #BFBFBF"
              borderRadius="92px"
              background="white"
              padding="9px 24px"
              position="relative"
              className={style.absolute}
            >
              <Input type="text" width="100%" placeholder="Имя" />
            </BorderWrapper>
          </label>
        </div>
        <div className={style.row}>
          <label className={style.label}>
            <div className={style.label__title}>
              Телефон<span className={style.red}>*</span> :
            </div>

            <BorderWrapper
              border="1px solid #BFBFBF"
              borderRadius="92px"
              background="white"
              padding="9px 24px"
              position="relative"
            >
              <InputMaskLib
                mask={"999 999 99 99"}
                width="100%"
                placeholder="900 000 00 00"
              />
            </BorderWrapper>
          </label>
        </div>
        <div className={style.row}>
          <label className={style.label}>
            <div className={style.label__title}>
              Эл. почта<span className={style.red}>*</span> :
            </div>

            <BorderWrapper
              border="1px solid #BFBFBF"
              borderRadius="92px"
              background="white"
              padding="9px 24px"
              position="relative"
              className={style.absolute}
            >
              <Input type="email" width="100%" placeholder="Эл. почта" />
            </BorderWrapper>
          </label>
        </div>
        <div className={style.row}>
          <label className={style.label}>
            <div className={style.label__title}>Сообщение:</div>

            <BorderWrapper
              border="1px solid #BFBFBF"
              borderRadius="15px"
              background="white"
              padding="9px 24px"
              position="relative"
              className={style.absolute}
            >
              <TextArea
                width="100%"
                placeholder="Введите свое сообщение"
                rows={5}
                resize
              />
            </BorderWrapper>
          </label>
        </div>
        <div className={style.row}>
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
            <FileButton title="Редактировать"/>
          </BorderWrapper>
        </div>
        <div className={style.row}>
          <Button
            title="Отправить"
            background="#20598E"
            width="100%"
            padding="12px 0px"
            borderRadius="60px"
            color="white"
          />
        </div>
      </form>
    </div>
  );
};
