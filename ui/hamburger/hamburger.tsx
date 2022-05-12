import React from "react";
import style from "./style.module.scss";

import { useActions } from "../../hooks/useActions";

export default function Hamburger() {
  const { openModalAction } = useActions();

  return (
    <div
      className={style.hamburger}
      onClick={() => openModalAction("open-header-menu")}
    >
      <div className={style.hamburger__element}></div>
    </div>
  );
}
