interface handleProductionPriceArg {
  productPrice: number;
  step: number;
}

export const handleProductionPrice = ({
  productPrice,
  step,
}: handleProductionPriceArg) => {

  return productPrice ? `${productPrice * step} ₽` : "Нет цены";
};
