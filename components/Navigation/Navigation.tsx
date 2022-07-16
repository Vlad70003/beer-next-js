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
  categories: [];
}

export const Navigation = ({
  shopPage,
  handlePage,
  categories,
}: NavigationProps) => {
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
              <Image
                src={miniLogo}
                className={style.miniLogo}
                alt="mini-logo"
                height={31}
                width={31}
              />
            </a>
          </li>
          {categories?.map((item: { id: string; name: string }) => {
            
            return (
              <li className={style.navigation__item} key={item.id}>
                <Link
                  activeClass="active"
                  className={item.name}
                  to={item.name}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  onClick={() => handlePage(item?.id)}
                >
                  <Button
                    title={item.name}
                    type="button"
                    fontSize="18px"
                    padding="0 0 8px 0"
                    margin="0 0 0 1.5rem"
                    borderBottom={
                      shopPage &&
                      toggleBorderBottom({
                        shopPage,
                        value: item.id,
                      })
                    }
                    color={
                      shopPage && toggleColor({ shopPage, value: item.id })
                    }
                    fontWeightClass="bold"
                    hoverClassColor="blueHoverClassColor"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.navigation__rightSide}>
        <ul className={style.navigation__rightSide__list}>
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
