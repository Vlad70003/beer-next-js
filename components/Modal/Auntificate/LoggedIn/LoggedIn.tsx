import React, { useState } from "react";
import style from "./LoggedIn.module.scss";
import Image from "next/image";

import { InputMaskLib } from "../../../../ui/InputMask/InputMaskLib";
import { BorderWrapper } from "../../../wrappers/borderWrapper/BorderWrapper";
import { Input } from "../../../../ui/Input/Input";
import eye from "../../../../assests/img/eye.svg";
import { ReCheckBox } from "../../../../ui/Re-checkbox/ReCheckBox";
import { Button } from "../../../../ui/Button/Button";

import { useActions } from "../../../../hooks/useActions";

interface LoggedInProps {
  // closeModal?: any;
  setLoggedIn: (value: boolean) => void;
}

export const LoggedIn = ({ setLoggedIn }: LoggedInProps) => {
  const { loggedInAction } = useActions();
  const { closeModalAction } = useActions();

  const handleForm = (event:Event) => {
    event.preventDefault();
    loggedInAction();
    closeModalAction();
  };

  return (
    <div className={style.loggedIn}>
      <form className={style.form}>
        <div className={style.row}>
          <label className={style.label}>
            <div className={style.title}>Мобильный телефон</div>

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
            <div className={style.title}>Пароль</div>

            <BorderWrapper
              border="1px solid #BFBFBF"
              borderRadius="92px"
              background="white"
              padding="9px 24px"
              position="relative"
              className={style.absolute}
            >
              <Input type="number" width="100%" />
              <div className={style.eye}>
                <Image src={eye} alt="eye" />
              </div>
            </BorderWrapper>
          </label>
        </div>
        <div className={style.row}>
          <div className={`${style.flex} ${style.spaceBetween}`}>
            <label className={`${style.label} ${style.flex}`}>
              <ReCheckBox padding="0 8px 0 0" /> Запомнить меня
            </label>
            <Button
              title="Забыли пароль?"
              color="#3D69B7"
              borderBottom="#3D69B7"
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={`${style.flex} ${style.spaceBetween}`}>
            <Button
              title="Зарегистрироваться"
              color="#3D69B7"
              border="1px solid #3D69B7"
              borderRadius="60px"
              padding="12px 27px"
              width="100%"
              margin="0 16px 0 0"
              onClick={() => setLoggedIn(false)}
            />
            <Button
              title="Войти"
              color="white"
              border="1px solid #20598E"
              borderRadius="60px"
              padding="12px 27px"
              background="#20598E"
              width="100%"
              onClick={(event: Event) => handleForm(event)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
