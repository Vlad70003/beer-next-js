import React, { useState, useEffect } from "react";
import style from "./Navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "../../ui/Button/Button";
import { Bonus } from "../Bonus/Bonus";
import { CartCounter } from "../CartCounter/CartCounter";

import { toggleColor } from "./script/toggleColor";
import { toggleBorderBottom } from "./script/toggleBorderBottom";

export const Navigation = () => {

  const [pathName, setPathName] = useState<string | null>(null);

  const router = useRouter();
  const path = router.asPath;

  useEffect(() => {
    setPathName(path);
  }, [path]);

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
                  borderBottom={toggleBorderBottom({pathName, path:"/shop/BeerAndCider"})}
                  color={toggleColor({pathName, path:"/shop/BeerAndCider"})}
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
                  borderBottom={toggleBorderBottom({pathName, path:"/shop/Bottled"})}
                  color={toggleColor({pathName, path:"/shop/Bottled"})}
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
                  borderBottom={toggleBorderBottom({pathName, path:"/shop/Beverages"})}
                  color={toggleColor({pathName, path:"/shop/Beverages"})}
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
                  borderBottom={toggleBorderBottom({pathName, path:"/shop/Fishes"})}
                  color={toggleColor({pathName, path:"/shop/Fishes"})}
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
                  borderBottom={toggleBorderBottom({pathName, path:"/shop/Meat"})}
                  color={toggleColor({pathName, path:"/shop/Meat"})}
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
                  borderBottom={toggleBorderBottom({pathName, path:"/shop/Chease"})}
                  color={toggleColor({pathName, path:"/shop/Chease"})}
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
                  borderBottom={toggleBorderBottom({pathName, path:"/shop/Snacks"})}
                  color={toggleColor({pathName, path:"/shop/Snacks"})}
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
                  borderBottom={toggleBorderBottom({pathName, path:"/shop/Other"})}
                  color={toggleColor({pathName, path:"/shop/Other"})}
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
                  borderBottom={toggleBorderBottom({pathName, path:"/shop/Stock"})}
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
