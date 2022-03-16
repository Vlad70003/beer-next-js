import React, { useState, useEffect } from "react";
import style from "./Navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "../../ui/Button/Button";
import { Bonus } from "../Bonus/Bonus";
import { CartCounter } from "../CartCounter/CartCounter";

import { toggleColor } from "./script/toggleColor";
import { toggleBorderBottom } from "./script/toggleBorderBottom";

interface NavigationProps {
  handlePage: any;
  shopPage: string;
}

export const Navigation = ({ shopPage, handlePage }: NavigationProps) => {
  return (
    <nav className={style.navigation}>
      <div className={style.navigation__leftSide}>
        <ul className={style.navigation__list}>
          <li className={style.navigation__item}>
            <Button
              title="ПИВО И СИДРЫ"
              type="button"
              fontSize="18px"
              fontWeight="700"
              margin="0"
              padding="0 0 8px 0"
              borderBottom={toggleBorderBottom({ shopPage, value: "beer" })}
              color={toggleColor({ shopPage, value: "beer" })}
              onClick={() => handlePage("beer")}
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="БУТЫЛОЧНОЕ"
              type="button"
              fontSize="18px"
              fontWeight="700"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={toggleBorderBottom({
                shopPage,
                value: "bottled",
              })}
              color={toggleColor({ shopPage, value: "bottled" })}
              onClick={() => handlePage("bottled")}
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="НАПИТКИ"
              type="button"
              fontSize="18px"
              fontWeight="700"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={toggleBorderBottom({
                shopPage,
                value: "beverages",
              })}
              color={toggleColor({ shopPage, value: "beverages" })}
              onClick={() => handlePage("beverages")}
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="РЫБЫ"
              type="button"
              fontSize="18px"
              fontWeight="700"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={toggleBorderBottom({
                shopPage,
                value: "fishes",
              })}
              color={toggleColor({ shopPage, value: "fishes" })}
              onClick={() => handlePage("fishes")}
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="МЯСО"
              type="button"
              fontSize="18px"
              fontWeight="700"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={toggleBorderBottom({
                shopPage, value: "meat"
              })}
              color={toggleColor({ shopPage, value: "meat" })}
              onClick={() => handlePage("meat")}
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="СЫР"
              type="button"
              fontWeight="700"
              fontSize="18px"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={toggleBorderBottom({
                shopPage, value: "chease"
              })}
              color={toggleColor({ shopPage, value: "chease" })}
              onClick={() => handlePage("chease")}
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="СНЕКИ"
              type="button"
              fontWeight="700"
              fontSize="18px"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={toggleBorderBottom({
                shopPage, value: "snacks"
              })}
              color={toggleColor({ shopPage, value: "snacks" })}
              onClick={() => handlePage("snacks")}
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="ПРОЧЕЕ"
              type="button"
              fontWeight="700"
              fontSize="18px"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={toggleBorderBottom({
                shopPage, value: "other"
              })}
              color={toggleColor({ shopPage, value: "other" })}
              onClick={() => handlePage("other")}
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="АКЦИИ"
              type="button"
              fontWeight="700"
              fontSize="18px"
              margin="0 0 0 2rem"
              padding="0 0 8px 0"
              borderBottom={toggleBorderBottom({
                shopPage, value: "other" 
              })}
              color="#E31E25"
              onClick={() => handlePage("other")}
            />
          </li>
        </ul>
      </div>
      <div className={style.navigation__rightSide}>
        <ul className={style.navigation__list}>
          <li className="navigation__item">
            <Bonus />
          </li>
          <li className={style.navigation__item}>
            <Link href="/Ordering">
              <a>
                <CartCounter />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
