import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "./Header.module.scss";
import { useRouter } from "next/router";

import { ChangeShopButton } from "../ChangeShopButton/ChangeShopButton";
import { Input } from "../../ui/Input/Input";
import { Logotype } from "../../ui/Logotype/Logotype";
import { BorderWrapper } from "../wrappers/borderWrapper/BorderWrapper";
import { Seach } from "../../ui/Seach/Seach";
import { Button } from "../../ui/Button/Button";
import { LoggedInButton } from "../LoggedInButton/LoggedInButton";
import Hamburger from "../../ui/hamburger/hamburger";

import { toggleColor } from "./script/toggleColor";
import { toggleFontWidth } from "./script/toggleColor";

const Header: React.FC = () => {
  const [pathName, setPathName] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const path = router.asPath;

  useEffect(() => {
    setPathName(path);
  }, [path]);

  return (
    <header className={style.header}>
      <div className={style.conteiner}>
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
              padding="8px 16px"
              background="white"
              borderRadius="30px"
            >
              <Input placeholder="Поиск по сайту" />
              <Seach />
            </BorderWrapper>
          </span>
          <nav className={style.nav}>
            <Link href="/AboutCompany">
              <a>
                <Button
                  title="О компании"
                  type="button"
                  padding="0 24px 0 0"
                  color={toggleColor({ pathName, path: "/about-company" })}
                  fontWeight={toggleFontWidth({
                    pathName,
                    path: "/about-company",
                  })}
                  hoverClassColor="blueHoverClassColor"
                  fontSize="1rem"
                />
              </a>
            </Link>

            <Link href="/Contacts">
              <a>
                <Button
                  title="Контакты"
                  type="button"
                  padding="0 24px 0 0"
                  color={toggleColor({ pathName, path: "/Contacts" })}
                  fontWeight={toggleFontWidth({ pathName, path: "/Contacts" })}
                  hoverClassColor="blueHoverClassColor"
                  fontSize="1rem"
                />
              </a>
            </Link>

            <Link href="/WorkWithUs">
              <a>
                <Button
                  title="Работа у нас"
                  type="button"
                  color={toggleColor({ pathName, path: "/WorkWithUs" })}
                  fontWeight={toggleFontWidth({
                    pathName,
                    path: "/WorkWithUs",
                  })}
                  hoverClassColor="blueHoverClassColor"
                  fontSize="1rem"
                />
              </a>
            </Link>
          </nav>
          <span className={style.header__profile}>
            <div className={style.header__profile__seachWrapper}>
              <Seach
                black
                width="24"
                height="24"
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            </div>
            <LoggedInButton />
            <Hamburger />
          </span>
        </div>
      </div>
      {isOpen && (
        <span className={style.header__input__wrapperlaptop}>
          <BorderWrapper
            display="flex"
            border="1px solid #BFBFBF"
            padding="8px 16px"
            background="white"
            borderRadius="30px"
            position="relative"
            margin="20px 0 0 0"
          >
            <Input placeholder="Поиск по сайту" width="100%" />
            <Seach />
          </BorderWrapper>
        </span>
      )}
      <div className={style.header__input__wrapperModile}>
        <BorderWrapper
          display="flex"
          border="1px solid #BFBFBF"
          padding="8px 16px"
          background="white"
          borderRadius="30px"
          position="relative"
          margin="20px 0 0 0"
        >
          <Input placeholder="Поиск по сайту" width="100%" />
          <Seach />
        </BorderWrapper>
      </div>
    </header>
  );
};

export default React.memo(Header)