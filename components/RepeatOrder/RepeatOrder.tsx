import React from "react";
import style from "./RepeatOrder.module.scss";

import Image from "next/image";
import { Button } from "../../ui/Button/Button";

import refresh from "../../assests/img/refresh.svg";

export const RepeatOrder = () => {
  return (
    <div className={style.repeatOrder}>
      <Button title="Повторить заказ" color="#20598E" fontWeight="700" />
      <span className={style.image}>
        <Image src={refresh} alt="Повторить" className="image" />
      </span>
    </div>
  );
};
