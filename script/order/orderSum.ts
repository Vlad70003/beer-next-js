import { ProductClass } from "../product/product";

export const orderSum = (
  arr: { product: { price: number, measure: {} }; step: number }[]
) => {

  const product = new ProductClass()

  if (!arr?.length) {
    return 0;
  }

  return arr.reduce((sum, current) => {
    const status = product.status({measure: current?.product?.measure});

    if ( status === "weight" ) {
      
    }
    return sum + ( status === "weight" ? current.product.price / 10 : current.product.price) * current.step;
  }, 0);
};
