import React from "react";
import Image from "next/image";

import { imgState } from "../../types/image";

import seach from "../../assests/img/seach.svg";

export const Seach = ({ width = "18px", height = "18px" }: imgState) => {
  return (
    <Image
      src={seach}
      alt="seach"
      className="seach"
      width={width}
      height={height}
    />
  );
};
