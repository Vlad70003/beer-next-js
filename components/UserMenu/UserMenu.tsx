import React from "react";
import style from "./UserMenu.module.scss";
import Link from "next/link";

import { useActions } from "../../hooks/useActions";

import { Button } from "../../ui/Button/Button";

interface UserMenuProps {
  chooseMainClass: (value: string) => void;
}

export const UserMenu = ({ chooseMainClass }: UserMenuProps) => {
  const { loggedOutAction } = useActions();

  return (
    <div className={style.userMenu}>
      <Link href={"/PrivateOffice"}>
        <a>
          <div className={style.row} onClick={() => chooseMainClass("close")}>
            <Button title="Личный кабинет" fontSize="1rem" />
          </div>
        </a>
      </Link>

      <div
        className={`${style.row} ${style.row__lastChild}`}
        onClick={() => {
          chooseMainClass("close");
          loggedOutAction();
        }}
      >
        <Button title="Выйти" fontSize="1rem" />
      </div>
    </div>
  );
};
