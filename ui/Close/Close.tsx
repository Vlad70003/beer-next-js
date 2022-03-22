import React from "react";
import style from "./Close.module.scss";
import Link from "next/link";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

export const Close = () => {
  const loggedInState = useTypedSelector((state) => state.auntificate.loggedIn);
    const { loggedOutAction} = useActions();

  return <div className={style.close} onClick={() => loggedOutAction()}></div>;
};
