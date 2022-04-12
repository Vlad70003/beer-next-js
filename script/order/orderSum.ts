export const orderSum = (
  arr: { product: { productPrice: number }; step: number }[]
) => {
  if (!arr?.length) {
    return 0;
  }

  return arr.reduce(
    (sum, current) => sum + current.product.productPrice * current.step,
    0
  );
};
