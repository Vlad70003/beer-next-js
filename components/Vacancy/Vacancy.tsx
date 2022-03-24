import React, { useState } from "react";
import style from "./Vacancy.module.scss";

import { Button } from "../../ui/Button/Button";
import { Сonditions } from "../Сonditions/Сonditions";
import { ModalWrapper } from "../Modal/ModalWrapper";
import { ApplyForJob } from "../Modal/ApplyForJob/ApplyForJob";

import { vacancyState } from "../../types/vacancy";

import { conditions, requirements } from "./data";

export const Vacancy = ({
  title,
  experience,
  salary,
  city,
  requirement,
  timetable,
}: vacancyState) => {

  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={style.vacancy}>
      <h3 className={style.vacancy__title}>{title}</h3>
      <div className={style.vacancy__header}>
        <div className={style.vacancy__header__leftSide}>
          <ul className={style.vacancy__header__leftSide__list}>
            <li className={style.vacancy__header__leftSide__item}>{`Опыт работы от: ${experience}`}</li>
            <li className={style.vacancy__header__leftSide__item}>{`з/п: ${salary}`}</li>
            <li className={style.vacancy__header__leftSide__item}>{city}</li>
          </ul>
          <ul className={style.vacancy__header__leftSide__list}>
            <li className={style.vacancy__header__leftSide__requirement}>
              {requirement}
            </li>
            <li className={style.vacancy__header__leftSide__timetable}>
              {timetable}
            </li>
          </ul>
        </div>
        <div className={style.vacancy__header__rightSide}>
          <Button
            title="Откликнуться"
            color="#3D69B7"
            border="1px solid #3D69B7"
            borderRadius="60px"
            padding="12px 40px"
            onClick={() => setModalIsOpen(true)}
          />
        </div>
      </div>
      { !isOpen && <Button
        title={"Подробнее"}
        color="#3D69B7"
        fontWeight="700"
        margin="16px 0"
        onClick={() => handleClick()}
      />}
      <div
        className={
          isOpen
            ? `${style.vacancy__requirementWrapper} ${style.vacancy__open}`
            : `${style.vacancy__requirementWrapper} ${style.vacancy__close}`
        }
      >
        <Сonditions title="Условия:" content={conditions} />
        <Сonditions title="Требования:" content={requirements} />
      </div>
      {isOpen && <Button
        title={"Свернуть"}
        color="#3D69B7"
        fontWeight="700"
        margin="16px 0"
        onClick={() => handleClick()}
      />}
    </div>

    <ModalWrapper
        padding="32px 54px"
        borderRadius="20px"
        top="50%"
        left="50%"
        minWidth="812px"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        backgroundColor="#0000004D"
        transform="translate(-50%, -50%)"
        onRequestClose
        close
      >
        < ApplyForJob />
      </ModalWrapper>
    </>
  );
};
