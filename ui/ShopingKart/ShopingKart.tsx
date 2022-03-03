import React from "react";
import Image from "next/image";

import { imgState } from "../../types/image";

import shopingCart from "../../assests/img/shoping-cart-transparent.svg";

export const ShopingKart = ({ width = "40px", height = "40px" }: imgState) => {
  return (
    <Image
      src={shopingCart}
      alt="shopingCart"
      className="shoping-cart"
      width={width}
      height={height}
    />
  );
};
