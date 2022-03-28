import React, { useState, useEffect } from "react";
import style from "./Navigation.module.scss";

import { Button } from "../../ui/Button/Button";
import { Bonus } from "../Bonus/Bonus";
import { CartCounter } from "../CartCounter/CartCounter";

import { toggleColor } from "./script/toggleColor";
import { toggleBorderBottom } from "./script/toggleBorderBottom";

import { useActions } from "../../hooks/useActions";

interface NavigationProps {
  handlePage?: any;
  shopPage?: string;
}

export const Navigation = ({ shopPage, handlePage }: NavigationProps) => {

  const { openModalAction } = useActions();

  return (
    <nav className={style.navigation}>
      <div className={style.navigation__leftSide}>
        <ul className={style.navigation__list}>
          <li className={style.navigation__item}>
            <Button
              title="ПИВО И СИДРЫ"
              type="button"
              fontSize="18px"
              margin="0"
              padding="0 0 8px 0"
              borderBottom={
                shopPage && toggleBorderBottom({ shopPage, value: "beer" })
              }
              color={shopPage && toggleColor({ shopPage, value: "beer" })}
              onClick={() => handlePage("beer")}
              fontWeightClass="bold"
              hoverClassColor="blueHoverClassColor"
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="БУТЫЛОЧНОЕ"
              type="button"
              fontSize="18px"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={
                shopPage &&
                toggleBorderBottom({
                  shopPage,
                  value: "bottled",
                })
              }
              color={shopPage && toggleColor({ shopPage, value: "bottled" })}
              onClick={() => handlePage("bottled")}
              fontWeightClass="bold"
              hoverClassColor="blueHoverClassColor"
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="НАПИТКИ"
              type="button"
              fontSize="18px"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={
                shopPage &&
                toggleBorderBottom({
                  shopPage,
                  value: "beverages",
                })
              }
              color={shopPage && toggleColor({ shopPage, value: "beverages" })}
              onClick={() => handlePage("beverages")}
              fontWeightClass="bold"
              hoverClassColor="blueHoverClassColor"
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="РЫБЫ"
              type="button"
              fontSize="18px"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={
                shopPage &&
                toggleBorderBottom({
                  shopPage,
                  value: "fishes",
                })
              }
              color={shopPage && toggleColor({ shopPage, value: "fishes" })}
              onClick={() => handlePage("fishes")}
              fontWeightClass="bold"
              hoverClassColor="blueHoverClassColor"
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="МЯСО"
              type="button"
              fontSize="18px"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={
                shopPage &&
                toggleBorderBottom({
                  shopPage,
                  value: "meat",
                })
              }
              color={shopPage && toggleColor({ shopPage, value: "meat" })}
              onClick={() => handlePage("meat")}
              fontWeightClass="bold"
              hoverClassColor="blueHoverClassColor"
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="СЫР"
              type="button"
              fontSize="18px"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={
                shopPage &&
                toggleBorderBottom({
                  shopPage,
                  value: "chease",
                })
              }
              color={shopPage && toggleColor({ shopPage, value: "chease" })}
              onClick={() => handlePage("chease")}
              fontWeightClass="bold"
              hoverClassColor="blueHoverClassColor"
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="СНЕКИ"
              type="button"
              fontSize="18px"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={
                shopPage &&
                toggleBorderBottom({
                  shopPage,
                  value: "snacks",
                })
              }
              color={shopPage && toggleColor({ shopPage, value: "snacks" })}
              onClick={() => handlePage("snacks")}
              fontWeightClass="bold"
              hoverClassColor="blueHoverClassColor"
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="ПРОЧЕЕ"
              type="button"
              fontSize="18px"
              padding="0 0 8px 0"
              margin="0 0 0 2rem"
              borderBottom={
                shopPage &&
                toggleBorderBottom({
                  shopPage,
                  value: "other",
                })
              }
              color={shopPage && toggleColor({ shopPage, value: "other" })}
              onClick={() => handlePage("other")}
              fontWeightClass="bold"
              hoverClassColor="blueHoverClassColor"
            />
          </li>
          <li className={style.navigation__item}>
            <Button
              title="АКЦИИ"
              type="button"
              fontSize="18px"
              margin="0 0 0 2rem"
              padding="0 0 8px 0"
              borderBottom={
                shopPage &&
                toggleBorderBottom({
                  shopPage,
                  value: "other",
                })
              }
              color="#E31E25"
              onClick={() => handlePage("other")}
              fontWeightClass="bold"
              hoverClassColor="blueHoverClassColor"
            />
          </li>
        </ul>
      </div>
      <div className={style.navigation__rightSide}>
        <ul className={style.navigation__list}>
          <li className="navigation__item">
            <Bonus />
          </li>
          <li className={style.navigation__item} onClick={() => openModalAction("ordering-prew")}>
            <CartCounter />
          </li>
        </ul>
      </div>
    </nav>
  );
};
