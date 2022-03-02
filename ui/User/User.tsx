import React from "react";
import Image from "next/image";

import { imgState } from "../../types/image";

import user from "../../assests/img/user.svg";

export const User = ({ width = "24px", height = "24px" }: imgState) => {
  return (
    <Image src={user} alt="user" className="user" width={width} height={height} />
  );
};
