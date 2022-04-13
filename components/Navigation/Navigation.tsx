import React from "react";
import style from "./Navigation.module.scss";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

import { Button } from "../../ui/Button/Button";
import { Bonus } from "../Bonus/Bonus";
import { CartCounter } from "../CartCounter/CartCounter";

import { toggleColor } from "./script/toggleColor";
import { toggleBorderBottom } from "./script/toggleBorderBottom";

import miniLogo from "../../assests/img/mini-logo.png";

import { useActions } from "../../hooks/useActions";
import { useScroll } from "../../hooks/useScroll";

interface NavigationProps {
  handlePage?: any;
  shopPage?: string;
}

export const Navigation = ({ shopPage, handlePage }: NavigationProps) => {
  const { openModalAction } = useActions();
  const scrollY = useScroll();

  return (
    <nav className={style.navigation}>
      <div className={style.navigation__leftSide}>
        <ul
          className={
            scrollY >= 100
              ? ` ${style.navigation__list} ${style.navigation__list__open}`
              : `${style.navigation__list} ${style.navigation__list__close}`
          }
        >
          <li>
            <a onClick={() => scroll.scrollToTop()}>
              <Image src={miniLogo} className={style.miniLogo} alt="mini-logo" height={35} width={35} />
            </a>
          </li>
          <li className={style.navigation__item}>
            <Link
              activeClass="active"
              className="beer"
              to="beer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              onClick={() => handlePage("beer")}
            >
              <Button
                title="ПИВО И СИДРЫ"
                type="button"
                fontSize="18px"
                padding="0 0 8px 0"
                margin="0 0 0 1.5rem"
                borderBottom={
                  shopPage && toggleBorderBottom({ shopPage, value: "beer" })
                }
                color={shopPage && toggleColor({ shopPage, value: "beer" })}
                fontWeightClass="bold"
                hoverClassColor="blueHoverClassColor"
              />
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link
              activeClass="active"
              className="beverages"
              to="beverages"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              onClick={() => handlePage("beverages")}
            >
              <Button
                title="НАПИТКИ"
                type="button"
                fontSize="18px"
                padding="0 0 8px 0"
                margin="0 0 0 1.5rem"
                borderBottom={
                  shopPage &&
                  toggleBorderBottom({
                    shopPage,
                    value: "beverages",
                  })
                }
                color={
                  shopPage && toggleColor({ shopPage, value: "beverages" })
                }
                fontWeightClass="bold"
                hoverClassColor="blueHoverClassColor"
              />
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link
              activeClass="active"
              className="bottled"
              to="bottled"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              onClick={() => handlePage("bottled")}
            >
              <Button
                title="БУТЫЛОЧНОЕ"
                type="button"
                fontSize="18px"
                padding="0 0 8px 0"
                margin="0 0 0 1.5rem"
                borderBottom={
                  shopPage &&
                  toggleBorderBottom({
                    shopPage,
                    value: "bottled",
                  })
                }
                color={shopPage && toggleColor({ shopPage, value: "bottled" })}
                fontWeightClass="bold"
                hoverClassColor="blueHoverClassColor"
              />
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link
              activeClass="active"
              className="chease"
              to="chease"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              onClick={() => handlePage("chease")}
            >
              <Button
                title="СЫР"
                type="button"
                fontSize="18px"
                padding="0 0 8px 0"
                margin="0 0 0 1.5rem"
                borderBottom={
                  shopPage &&
                  toggleBorderBottom({
                    shopPage,
                    value: "chease",
                  })
                }
                color={shopPage && toggleColor({ shopPage, value: "chease" })}
                fontWeightClass="bold"
                hoverClassColor="blueHoverClassColor"
              />
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link
              activeClass="active"
              className="fishes"
              to="fishes"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              onClick={() => handlePage("fishes")}
            >
              <Button
                title="РЫБЫ"
                type="button"
                fontSize="18px"
                padding="0 0 8px 0"
                margin="0 0 0 1.5rem"
                borderBottom={
                  shopPage &&
                  toggleBorderBottom({
                    shopPage,
                    value: "fishes",
                  })
                }
                color={shopPage && toggleColor({ shopPage, value: "fishes" })}
                fontWeightClass="bold"
                hoverClassColor="blueHoverClassColor"
              />
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link
              activeClass="active"
              className="meat"
              to="meat"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              onClick={() => handlePage("meat")}
            >
              <Button
                title="МЯСО"
                type="button"
                fontSize="18px"
                padding="0 0 8px 0"
                margin="0 0 0 1.5rem"
                borderBottom={
                  shopPage &&
                  toggleBorderBottom({
                    shopPage,
                    value: "meat",
                  })
                }
                color={shopPage && toggleColor({ shopPage, value: "meat" })}
                fontWeightClass="bold"
                hoverClassColor="blueHoverClassColor"
              />
            </Link>
          </li>

          <li className={style.navigation__item}>
            <Link
              activeClass="active"
              className="snacks"
              to="snacks"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              onClick={() => handlePage("snacks")}
            >
              <Button
                title="СНЕКИ"
                type="button"
                fontSize="18px"
                padding="0 0 8px 0"
                margin="0 0 0 1.5rem"
                borderBottom={
                  shopPage &&
                  toggleBorderBottom({
                    shopPage,
                    value: "snacks",
                  })
                }
                color={shopPage && toggleColor({ shopPage, value: "snacks" })}
                fontWeightClass="bold"
                hoverClassColor="blueHoverClassColor"
              />
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Link
              activeClass="active"
              className="other"
              to="other"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => handlePage("other")}
            >
              <Button
                title="ПРОЧЕЕ"
                type="button"
                fontSize="18px"
                padding="0 0 8px 0"
                margin="0 0 0 1.5rem"
                borderBottom={
                  shopPage &&
                  toggleBorderBottom({
                    shopPage,
                    value: "other",
                  })
                }
                color={shopPage && toggleColor({ shopPage, value: "other" })}
                fontWeightClass="bold"
                hoverClassColor="blueHoverClassColor"
              />
            </Link>
          </li>
          <li className={style.navigation__item}>
            <Button
              title="АКЦИИ"
              type="button"
              fontSize="18px"
              margin="0 0 0 1.5rem"
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
          <li
            className={style.navigation__item}
            onClick={() => openModalAction("ordering-prew")}
          >
            <CartCounter />
          </li>
        </ul>
      </div>
    </nav>
  );
};
