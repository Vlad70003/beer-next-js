interface handleProductCounterArg {
  addOrderAction: any;
  deteteOrderAction: any;
  product: any;
  step: number;
  status?: any;
  productCount: number;
  setProductCount: (value: number) => void;
  action: string;
}

export const handleProductCounter = ({
  addOrderAction,
  deteteOrderAction,
  product,
  step,
  status,
  productCount,
  setProductCount,
  action,
}: handleProductCounterArg) => {
  if (productCount === 0 && action === "increase") {
    return;
  }

  if (action === "increase") {
    deteteOrderAction({ product: product.product, step });
  }

  if (action === "decrease") {
    addOrderAction({ product: product.product, step });
  }
};
