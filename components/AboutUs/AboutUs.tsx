import React from "react";
import style from "./AboutUs.module.scss";

import { Subtitle } from "../Subtitle/Subtitle";

export const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <div className={style.aboutUs__content}>
        <div className={style.description}>
          <p className={style.aboutUs__content__row}>
            Сеть магазинов разливного пива &quot;Пивас и Квас&quot; основана в
            сентябре 2016 года в городе Северодвинск.
          </p>
          <p className={style.aboutUs__content__row}>
            На данный момент сеть насчитывает более 60 магазинов в крупных
            городах: Северодвинске, Архангельске, Новодвинске, Ярославле,
            Котласе, Коряжме.
          </p>
          <p className={style.aboutUs__content__row}>
            В ближайшем будущем планируется активное масштабирование и развитие.
          </p>
          <p className={style.aboutUs__content__row}>
            Наши магазины созданы для самых утонченных ценителей хмельного
            напитка и имеют самый большой выбор и ассортимент.
          </p>
          <p className={style.aboutUs__content__row}>
            В настоящее время в каждом магазине сети представлено более 66
            сортов эксклюзивного пива и напитков на любой вкус.
          </p>
          <p className={style.aboutUs__content__row}>
            В магазинах «Пивас и Квас» вы найдете лучшие сорта пива
            отечественных и зарубежных пивоварен, вкуснейшие снеки, любимые
            рыбные и мясные закуски.
          </p>
          <p className={style.aboutUs__content__row}>
            Качественный сервис и выгодная бонусная система Вас явно порадует!
          </p>
          <p className={style.aboutUs__content__row}>
            Мы тщательно следим за качеством и хранением вашего любимого
            янтарного напитка!
          </p>
        </div>
        <div className={style.aboutUs__priority}>
        < Subtitle text="Наши приоритеты:" />
          <ul className={style.aboutUs__list}>
            <li className={style.aboutUs__item}>
              Постоянное повышение качества продукции
            </li>
            <li className={style.aboutUs__item}>
              Индивидуальный подход к каждому клиенту
            </li>
            <li className={style.aboutUs__item}>Качественный сервис</li>
            <li className={style.aboutUs__item}>Гибкая система скидок </li>
            <li className={style.aboutUs__item}>Лояльная ценовая политика</li>
            <li className={style.aboutUs__item}>Динамичное расширение ассортимента</li>
            <li className={style.aboutUs__item}>Интенсивное развитие сети</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
