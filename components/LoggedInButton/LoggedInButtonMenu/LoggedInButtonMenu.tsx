import React from "react";
import style from "./LoggedInButtonMenu.module.scss";
import Link from "next/link";
import { useActions } from "../../../hooks/useActions";
import { Button } from "../../../ui/Button/Button";

interface LoggedInButtonMenuProps {
  mainClass: string;
  chooseMainClass: (value: string) => void;
}

export const LoggedInButtonMenu = ({
  mainClass,
  chooseMainClass,
}: LoggedInButtonMenuProps) => {
  const { loggedOutAction } = useActions();

  return (
    <div className={`${style.loggedInButtonMenu} `}>
      <ul className={`${style[mainClass]}`}>
        <Link href={"/PrivateOffice"}>
          <a>
            <Button
              title="Личный кабинет"
              onClick={() => chooseMainClass("close")}
              padding="8px 0"
              fontSize="14px"
              width="100%"
              borderBottom="1px solid #C5C5C5"
            />
          </a>
        </Link>
        <Button
          title="Выйти"
          onClick={() => {
            loggedOutAction(), chooseMainClass("close");
          }}
          padding="8px 0"
          fontSize="14px"
          width="100%"
          borderBottom="1px solid #C5C5C5"
        />
      </ul>
    </div>
  );
};
