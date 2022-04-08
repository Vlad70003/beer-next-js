interface handleProductCounterArg {
  addOrderAction: any;
  deteteOrderAction: any;
  product: any;
  step: number;
  productCount: number;
  action: string;
}

const checkedProduct = (product:any) => {
  if (product.product) {
    return product.product
  }
  if (product) {
    return product;
  }
}

export const handleProductCounter = ({
  addOrderAction,
  deteteOrderAction,
  product,
  step,
  productCount,
  action,
}: handleProductCounterArg) => {
  if (productCount === 0 && action === "increase") {
    return;
  }

  if (action === "increase") {
    deteteOrderAction({ product: checkedProduct(product) , step });
  }

  if (action === "decrease") {
    addOrderAction({ product: checkedProduct(product), step });
  }
};
