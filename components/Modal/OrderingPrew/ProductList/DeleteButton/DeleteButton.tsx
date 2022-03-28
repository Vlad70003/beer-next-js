import React from "react";
import style from "./DeleteButton.module.scss";
import Image from "next/image";

import { Button } from "../../../../../ui/Button/Button";

import deleteImg from "../../../../../assests/img/trash.svg";

export const DeleteButton = ({onClick}:any) => {
  return (
    <div className={style.deleteButton} onClick={onClick}>
      <Button title="Очистить корзину" color="#20598E" />
      <div className={style.deleteButton__imgWrapper}></div>
      <Image src={deleteImg} alt="delete" />
    </div>
  );
};
