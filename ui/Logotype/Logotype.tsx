import React from "react";
import { imgState } from "../../types/image";
import Image from "next/image";

import logotype from "../../assests/img/logotype.png";

export const Logotype = ({ width = "153px", height = "30px" }: imgState) => {
  return (
    <Image
      src={logotype}
      alt="logotype"
      className="logotype"
      width={width}
      height={height}
    />
  );
};
