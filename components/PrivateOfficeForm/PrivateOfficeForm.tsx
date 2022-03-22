import React, { useState } from "react";
import style from "./PrivateOfficeForm.module.scss";
import { Radio } from "react-radio-input";

import { InputMaskLib } from "../../ui/InputMask/InputMaskLib";
import { BorderWrapper } from "../wrappers/borderWrapper/BorderWrapper";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button/Button";
import { InputRadio } from "../../ui/InputRadio/InputRadio";
import { Info } from "../../ui/Info/Info";
import { ModalWrapper } from "../Modal/ModalWrapper";
import { ChangePassword } from "../Modal/ChangePassword/ChangePassword";
import { ChangePhone } from "../Modal/ChangePhone/ChangePhone";

export const PrivateOfficeForm = () => {
  const [modalIsOpenChangePassword, setModalIsOpenChangePassword] = useState(false);
  const [modalIsOpenChangePhone, setModalIsOpenChangePhone] = useState(false);

  return (
    <>
      <div className={style.privateOfficeForm}>
        <div className={style.privateOfficeForm__row}>
          <label htmlFor="name" className={style.privateOfficeForm__label}>
            Имя:
          </label>
          <BorderWrapper
            border="1px solid #BFBFBF"
            borderRadius="92px"
            background="white"
            padding="9px 24px"
            position="relative"
            className="eddit"
          >
            <Input width="100%" />
          </BorderWrapper>
        </div>
        <div className={style.privateOfficeForm__row}>
          <label htmlFor="name" className={style.privateOfficeForm__label}>
            Мой номер:
          </label>
          <div className={style.privateOfficeForm__phone}>*** 00-56</div>
          <Button
            title="Изменить номер телефона"
            fontWeight="700"
            color="#3D69B7"
            borderBottom="1px dashed #3D69B7"
            onClick={() => setModalIsOpenChangePhone(true)}
          />
        </div>
        <div className={style.privateOfficeForm__row}>
          <label htmlFor="name" className={style.privateOfficeForm__label}>
            Эл.почта:
          </label>
          <BorderWrapper
            border="1px solid #BFBFBF"
            borderRadius="92px"
            background="white"
            padding="9px 24px"
            position="relative"
            className="eddit"
          >
            <Input width="100%" />
          </BorderWrapper>
        </div>
        <div className={style.privateOfficeForm__row}>
          <label htmlFor="name" className={style.privateOfficeForm__label}>
            Дата рождения:
          </label>
          <BorderWrapper
            border="1px solid #BFBFBF"
            borderRadius="92px"
            background="white"
            padding="9px 24px"
            position="relative"
          >
            <InputMaskLib
              mask={"99/99/9999"}
              width="100%"
              placeholder="ДД/ММ/ГГГГ"
            />
            <Info
              positionWindow="right"
              right="15px"
              top="50%"
              transform="translateY(-50%)"
              text="Внимание! Дата рождения заполняется всего 1 раз! Проверьте правильность заполнения!"
            />
          </BorderWrapper>
        </div>
        <div
          className={`${style.privateOfficeForm__row} ${style.privateOfficeForm__gender}`}
        >
          <label
            htmlFor="gender"
            className={`${style.privateOfficeForm__label} ${style.privateOfficeForm__label__flex}`}
          >
            Пол:
          </label>
          <InputRadio
            initialState="male-privateOfice"
            flex="2"
            className="radioGroup"
          >
            <label
              htmlFor="male-privateOfice"
              className={`${style.flex} ${style.alighnItemsCenter}`}
            >
              <Radio id="male-privateOfice" value="male-privateOfice" />
              <pre> Мужской</pre>
            </label>
            <label
              htmlFor="female-privateOfice"
              className={`${style.flex} ${style.alighnItemsCenter}`}
            >
              <Radio id="female-privateOfice" value="female-privateOfice" />
              <pre> Женский</pre>
            </label>
          </InputRadio>
        </div>
        <Button
          title="Изменить пароль"
          fontWeight="700"
          color="#3D69B7"
          borderBottom="1px dashed #3D69B7"
          onClick={() => setModalIsOpenChangePassword(true)}
        />
      </div>

      <ModalWrapper
        padding="48px"
        borderRadius="20px"
        top="40%"
        left="50%"
        maxWidth="460px"
        minWidth="460px"
        modalIsOpen={modalIsOpenChangePassword}
        setModalIsOpen={setModalIsOpenChangePassword}
        backgroundColor="#0000004D"
        close
      >
        <ChangePassword />
      </ModalWrapper>

      <ModalWrapper
        padding="48px"
        borderRadius="20px"
        top="40%"
        left="50%"
        maxWidth="460px"
        minWidth="460px"
        modalIsOpen={modalIsOpenChangePhone}
        setModalIsOpen={setModalIsOpenChangePhone}
        backgroundColor="#0000004D"
        close
      >
        <ChangePhone />
      </ModalWrapper>
    </>
  );
};
