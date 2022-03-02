import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "./Header.module.scss";

import { ChangeShopButton } from "../ChangeShopButton/ChangeShopButton";
import { Input } from "../../ui/Input/Input";
import { Logotype } from "../../ui/Logotype/Logotype";
import { BorderWrapper } from "../wrappers/borderWrapper/BorderWrapper";
import { Seach } from "../../ui/Seach/Seach";
import { Button } from "../../ui/Button/Button";
import { User } from "../../ui/User/User";
// import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  // const location = useLocation();

  const [pathName, setPathName] = useState<string | null>(null);

  // useEffect(() => {
  //   setPathName(location.pathname);
  // }, [location]);

  const checkedPathName = (path: string) => {
    return pathName === path ? "#3D69B7" : "#434242";
  };

  return (
    <header className={style.header}>
      <div className={style.header__leftSide}>
        <span className={style.header__logo__wrapper}>
          <Link href="/">
            <a>
              <Logotype />
            </a>
          </Link>
        </span>
        <span className={style.header__changeShopBtn__wrapper}>
          <ChangeShopButton />
        </span>
      </div>
      <div className={style.header__rightSide}>
        <span className={style.header__input__wrapper}>
          <BorderWrapper
            display="flex"
            border="1px solid #BFBFBF"
            padding="9px 16px"
            background="white"
            borderRadius="30px"
          >
            <Input />
            <Seach />
          </BorderWrapper>
        </span>
        <nav className={style.nav}>
          {/* <Link to="/about-company"> */}
          <Button
            title="О компании"
            type="button"
            padding="0 24px 0 0"
            color={checkedPathName("/about-company")}
          />
          {/* </Link> */}

          <Link href="/Contacts">
            <a>
              <Button
                title="Контакты"
                type="button"
                padding="0 24px 0 0"
                color={checkedPathName("/Contacts")}
              />
            </a>
          </Link>
          <Link href="/WorkWithUs">
            <a href="">
              <Button
                title="Работа у нас"
                type="button"
                color={checkedPathName("/WorkWithUs")}
              />
            </a>
          </Link>
        </nav>
        <Link href="/PrivateOffice">
          <a>
            <span className={style.header__profile}>
              <Button
                title="Александр Иванов Иванович"
                type="button"
                fontWeight="700"
                padding="0 10px 0 0"
                maxLength={14}
                fontSize="18px"
              />
              <User />
            </span>
          </a>
        </Link>
      </div>
    </header>
  );
};
