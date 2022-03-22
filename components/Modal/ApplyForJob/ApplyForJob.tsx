import React from "react";
import style from "./ApplyForJob.module.scss";
import { Radio } from "react-radio-input";

import { BorderWrapper } from "../../wrappers/borderWrapper/BorderWrapper";
import { Input } from "../../../ui/Input/Input";
import { InputRadio } from "../../../ui/InputRadio/InputRadio";
import { InputMaskLib } from "../../../ui/InputMask/InputMaskLib";
import { TextArea } from "../../../ui/Textarea/TeaxtArea";
import { FileButton } from "../../../ui/FileButton/FileButton";
import { Button } from "../../../ui/Button/Button";

export const ApplyForJob = () => {
  return (
    <div className={style.applyForJob}>
      <header className={style.header}>
        <h3 className={style.applyForJob__title}>Откликнуться на вакансию</h3>
        <h5 className={style.applyForJob__subTitle}>
          Пожалуйста, заполните данные анкеты чтобы мы смогли с вами связаться
        </h5>
      </header>
      <main className={style.main}>
        <form className={style.form}>
          <div className={style.leftSide}>
            <div className={style.row}>
              <label className={style.label}>
                <div className={style.label__title}>
                  ФИО<span className={style.red}>*</span> :
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
                  Пол<span className={style.red}>*</span> :
                </div>
                <InputRadio
                  initialState="male-applyForJob"
                  flex="2"
                  className="radioGroupApplyForJob"
                >
                  <label
                    htmlFor="male-applyForJob"
                    className={`${style.labelMargin} ${style.flex} ${style.alignItems}`}
                  >
                    <Radio id="male-applyForJob" value="male-applyForJob"  />
                    <pre>  Мужской</pre>
                  </label>
                  <label htmlFor="female-applyForJob" className={`${style.flex} ${style.alignItems}`}>
                    <Radio id="female-applyForJob" value="female-applyForJob" />
                    <pre>  Женский</pre>
                  </label>
                </InputRadio>
              </label>
            </div>
            <div className={style.row}>
              <label className={style.label}>
                <div className={style.label__title}>
                  Дата рождения<span className={style.red}>*</span> :
                </div>
                <BorderWrapper
                  border="1px solid #BFBFBF"
                  borderRadius="92px"
                  background="white"
                  padding="9px 24px"
                  position="relative"
                  className={style.absolute}
                >
                  <InputMaskLib
                    mask={"99/99/9999"}
                    width="100%"
                    placeholder="ДД/ММ/ГГГГ"
                  />
                </BorderWrapper>
              </label>
            </div>
            <div className={style.row}>
              <label className={style.label}>
                <div className={style.label__title}>
                  Номер телефона<span className={style.red}>*</span> :
                </div>
                <BorderWrapper
                  border="1px solid #BFBFBF"
                  borderRadius="92px"
                  background="white"
                  padding="9px 24px"
                  position="relative"
                  className={style.absolute}
                >
                  <InputMaskLib
                    mask={"999 999 99 99"}
                    width="100%"
                    placeholder="900 000 00 00"
                  />
                </BorderWrapper>
              </label>
            </div>
          </div>
          <div className={style.rightSide}>
            <div className={style.row}>
              <label className={style.label}>
                <div className={style.label__title}>
                  Сопроводительное письмо
                </div>
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
                    placeholder="Напишите сопроводительное письмо работадателю"
                    rows={8}
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
                <FileButton title="Прикрепить резюме" />
              </BorderWrapper>
              <div className={style.filePostTile}>В формате .doc или .pdf</div>
            </div>
          </div>
        </form>
      </main>
      <footer className={style.footer}>
        <Button
          title="Отправить"
          background="#20598E"
          minWidth="50%"
          padding="12px 0px"
          borderRadius="60px"
          color="white"
        />
      </footer>
    </div>
  );
};
