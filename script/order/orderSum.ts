export const orderSum = (
  arr: { product: { price: number }; step: number }[]
) => {
  if (!arr?.length) {
    return 0;
  }

  return arr.reduce(
    (sum, current) => sum + current.product.price * current.step,
    0
  );
};
