import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";

import { useRouter } from "next/router";

import { Button } from "../../../ui/Button/Button";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

import { toggleColor } from "../../Header/script/toggleColor";
import { toggleFontWidth } from "../../Header/script/toggleColor";

export default function OpenHeaderMenu() {
  const [pathName, setPathName] = useState<string>("");

  const router = useRouter();
  const path = router.asPath;

  const modal = useTypedSelector((state) => state.modal);
  const { closeModalAction } = useActions();

  useEffect(() => {
    setPathName(path);
  }, [path]);

  const orderingPrewStyle = {
    marginRight: modal.typeModal === "open-header-menu" ? "0px" : "-1000px",
    transition: "margin-right .5s",
  };

  return (
    <div className={style.openHeaderMenu} style={orderingPrewStyle}>
      <h2 className={style.openHeaderMenu__title}>Меню</h2>
      <ul className={style.openHeaderMenu__list}>
        <li className={style.openHeaderMenu__item}>
          <Link href="/AboutCompany">
            <a>
              <Button
                title="О компании"
                type="button"
                padding="0 24px 0 0"
                color={toggleColor({ pathName, path: "/AboutCompany" })}
                fontWeight={toggleFontWidth({
                  pathName,
                  path: "/AboutCompany",
                })}
                hoverClassColor="blueHoverClassColor"
                fontSize="1rem"
              />
            </a>
          </Link>
        </li>
        <li className={style.openHeaderMenu__item}>
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
        </li>
        <li className={style.openHeaderMenu__item}>
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
        </li>
      </ul>
      <div className={style.close} onClick={() => closeModalAction()}></div>
    </div>
  );
}
