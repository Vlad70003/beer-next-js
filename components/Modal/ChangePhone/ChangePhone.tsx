import React from "react";
import style from "./ChangePhone.module.scss";

import { BorderWrapper } from "../../wrappers/borderWrapper/BorderWrapper";
import { Input } from "../../../ui/Input/Input";
import { Button } from "../../../ui/Button/Button";

export const ChangePhone = () => {
  return (
    <div className={style.changePhone}>
      <h5 className={style.changePhone__title}>Изменить номер телефона</h5>
      <form action="" className={style.changePhone__form}>
        <div className={style.row}>
          <label className={style.label}>
            <div className={style.label__title}>
              Старый номер телефона<span className={style.red}>*</span>
            </div>
            <BorderWrapper
              border="1px solid #BFBFBF"
              borderRadius="92px"
              background="white"
              padding="9px 24px"
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
              Новый номер телефона<span className={style.red}>*</span>
            </div>
            <BorderWrapper
              border="1px solid #BFBFBF"
              borderRadius="92px"
              background="white"
              padding="9px 24px"
              position="relative"
              className={style.absolute}
            >
              <Input type="text" width="100%" placeholder="ФИО" />
            </BorderWrapper>
          </label>
        </div>
        <div className={style.row}>
          <Button
            title="Выслать код"
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
