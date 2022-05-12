import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

import { imgState } from "../../types/image";

import seach from "../../assests/img/seach.svg";
import seachBlack from "../../assests/img/search-black.svg"

export const Seach = ({ width = "18px", height = "18px", black, setIsOpen, isOpen }: imgState) => {
  return (
    <div className={black ? style.imageWrapper24 : style.imageWrapper18} onClick={() => setIsOpen && setIsOpen(!isOpen)}>
      <Image
      src={black ? seachBlack : seach}
      alt="seach"
      className="seach"
      width={width}
      height={height}
    />
    </div>
    
  );
};
