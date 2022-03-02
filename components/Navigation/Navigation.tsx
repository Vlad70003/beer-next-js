import React, { useState, useEffect } from "react";
import style from "./Navigation.module.scss";
import Link from "next/link";

import { Button } from "../../ui/Button/Button";
import { Bonus } from "../Bonus/Bonus";
import { CartCounter } from "../CartCounter/CartCounter";

export const Navigation = () => {
  // const location = useLocation();

  const [pathName, setPathName] = useState<string | null>(null);

  // useEffect(() => {
  //   setPathName(location.pathname);
  // }, [location]);

  const toggleBorderBottom = (path: string) => {
    return pathName === path ? "4px solid #3D69B7" : "4px solid transparent";
  };

  const toggleColor = (path: string) => {
    return pathName === path ? "#3D69B7" : "black";
  };

  return (
    <nav className={style.navigation}>
      <div className={style.navigation__leftSide}>
        <ul className={style.navigation__list}>
          <li className={style.navigation__item}>
            <Link href="/shop/BeerAndCider">
              <a>
                <Button
                  title="ПИВО И СИДРЫ"
                  type="button"
                  fontSize="18px"
                  fontWeight="700"
                  margin="0"
                  padding="0 0 8px 0"
                  borderBottom={toggleBorderBottom("/shop/BeerAndCider")}
                  color={toggleColor("/shop/BeerAndCider")}
                />
              </a>
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link href="/shop/Bottled">
              <a>
                <Button
                  title="БУТЫЛОЧНОЕ"
                  type="button"
                  fontSize="18px"
                  fontWeight="700"
                  padding="0 0 8px 0"
                  margin="0 0 0 2rem"
                  borderBottom={toggleBorderBottom("/shop/bottled")}
                  color={toggleColor("/shop/bottled")}
                />
              </a>
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link href="/shop/Beverages">
              <a>
                <Button
                  title="НАПИТКИ"
                  type="button"
                  fontSize="18px"
                  fontWeight="700"
                  padding="0 0 8px 0"
                  margin="0 0 0 2rem"
                  borderBottom={toggleBorderBottom("/shop/beverages")}
                  color={toggleColor("/shop/beverages")}
                />
              </a>
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link href="/shop/Fishes">
              <a>
                <Button
                  title="РЫБЫ"
                  type="button"
                  fontSize="18px"
                  fontWeight="700"
                  padding="0 0 8px 0"
                  margin="0 0 0 2rem"
                  borderBottom={toggleBorderBottom("/shop/fishes")}
                  color={toggleColor("/shop/fishes")}
                />
              </a>
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link href="/shop/Meat">
              <a>
                <Button
                  title="МЯСО"
                  type="button"
                  fontSize="18px"
                  fontWeight="700"
                  padding="0 0 8px 0"
                  margin="0 0 0 2rem"
                  borderBottom={toggleBorderBottom("/shop/meat")}
                  color={toggleColor("/shop/meat")}
                />
              </a>
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link href="/shop/Chease">
              <a>
                <Button
                  title="СЫР"
                  type="button"
                  fontWeight="700"
                  fontSize="18px"
                  padding="0 0 8px 0"
                  margin="0 0 0 2rem"
                  borderBottom={toggleBorderBottom("/shop/chease")}
                  color={toggleColor("/shop/chease")}
                />
              </a>
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link href="/shop/Snacks">
              <a>
                <Button
                  title="СНЕКИ"
                  type="button"
                  fontWeight="700"
                  fontSize="18px"
                  padding="0 0 8px 0"
                  margin="0 0 0 2rem"
                  borderBottom={toggleBorderBottom("/shop/snacks")}
                  color={toggleColor("/shop/snacks")}
                />
              </a>
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link href="/shop/Other">
              <a>
                <Button
                  title="ПРОЧЕЕ"
                  type="button"
                  fontWeight="700"
                  fontSize="18px"
                  padding="0 0 8px 0"
                  margin="0 0 0 2rem"
                  borderBottom={toggleBorderBottom("/shop/other")}
                  color={toggleColor("/shop/other")}
                />
              </a>
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link href="/shop/Stock">
              <a>
                <Button
                  title="АКЦИИ"
                  type="button"
                  fontWeight="700"
                  fontSize="18px"
                  margin="0 0 0 2rem"
                  padding="0 0 8px 0"
                  borderBottom={toggleBorderBottom("/shop/stock")}
                  color="#E31E25"
                />
              </a>
            </Link>
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
