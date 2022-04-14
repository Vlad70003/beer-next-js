import React from "react";
import style from "./ChangePassword.module.scss";

import { BorderWrapper } from "../../wrappers/borderWrapper/BorderWrapper";
import { Input } from "../../../ui/Input/Input";
import { Button } from "../../../ui/Button/Button";

export const ChangePassword = () => {
  return (
    <div className={style.changePassword}>
      <h5 className={style.changePassword__title}>Изменить пароль</h5>
      <form action="" className={style.changePassword__form}>
        <div className={style.row}>
          <label className={style.label}>
            <div className={style.label__title}>
              Старый пароль<span className={style.red}>*</span>
            </div>
            <BorderWrapper
              border="1px solid #BFBFBF"
              borderRadius="92px"
              background="white"
              padding="8px 24px"
              position="relative"
              className={style.absolute}
            >
              <Input type="text" width="100%" placeholder="ФИО" />
            </BorderWrapper>
          </label>
        </div>
        <div className={style.row}>
          <label className={style.label}>
            <div className={style.label__title}>
              Новый пароль<span className={style.red}>*</span>
            </div>
            <BorderWrapper
              border="1px solid #BFBFBF"
              borderRadius="92px"
              background="white"
              padding="8px 24px"
              position="relative"
              className={style.absolute}
            >
              <Input type="text" width="100%" placeholder="ФИО" />
            </BorderWrapper>
          </label>
        </div>
        <div className={style.row}>
          <label className={style.label}>
            <div className={style.label__title}>
              Повторите пароль<span className={style.red}>*</span>
            </div>
            <BorderWrapper
              border="1px solid #BFBFBF"
              borderRadius="92px"
              background="white"
              padding="8px 24px"
              position="relative"
              className={style.absolute}
            >
              <Input type="text" width="100%" placeholder="ФИО" />
            </BorderWrapper>
          </label>
        </div>
        <div className={style.row}>
          <Button
            title="Изменить пароль"
            background="#20598E"
            borderRadius="60px"
            color="white"
            padding="13px 0"
            width="100%"
          />
        </div>
      </form>
    </div>
  );
};
