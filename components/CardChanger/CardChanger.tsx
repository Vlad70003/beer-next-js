import React from "react";
import style from "./CardChanger.module.scss";
import Image from "next/image";

import { InputSelect } from "../../ui/Select/InputSelect";
import { BorderWrapper } from "../wrappers/borderWrapper/BorderWrapper";

import trash from "../../assests/img/trash.svg";
import bankLogo from "../../assests/img/masterCard.svg";

export const CardChanger = () => {
  return (
    <div className={style.cardChanger}>
      <label htmlFor="card" className={style.cardChanger__label}>
        Моя карта:
      </label>
      <div className={style.cardChanger__wrapper}>
        <BorderWrapper
          border="1px solid #BFBFBF"
          background="white"
          borderRadius="20px"
          display="flex"
          position="relative"
          minWidth="270px"
          className={style.cardChanger__border}
        >
          <InputSelect placeholder="Веберите карту" width="100%" />
          <div className={style.cardChanger__bankLogo__wrapper}>
            <Image
              src={bankLogo}
              alt="bankLogo"
              className={style.cardChanger__bankLogo}
            />
          </div>
        </BorderWrapper>
        <Image
          src={trash}
          alt="delete"
          className="delete"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
