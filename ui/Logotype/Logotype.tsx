import React from "react";
import { imgState } from "../../types/image";
import Image from "next/image";
import style from "./style.module.scss";

import logotype from "../../assests/img/logotype.png";

export const Logotype = ({ width = "153px", height = "30px" }: imgState) => {
  return (
    <div className={style.imageWrapper}>
      <Image
        src={logotype}
        alt="logotype"
        className="logotype"
        width={width}
        height={height}
      />
    </div>
  );
};
