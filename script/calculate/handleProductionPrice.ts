interface handleProductionPriceArg {
  productPrice: number;
  step: number;
  status: string;
}

export const handleProductionPrice = ({
  productPrice,
  step,
  status,
}: handleProductionPriceArg) => {
  if (status === "weight") {
    return productPrice ? `${(productPrice / 10) * step} ₽` : "Нет цены";
  }
  return productPrice ? `${productPrice * step} ₽` : "Нет цены";
};
