import {container} from "../../components/Product/productExample";

interface handleProductCounterArg {
  addOrderAction: any;
  deteteOrderAction: any;
  product: any;
  step: number;
  productCount: number;
  action: string;
  status?: string | null;
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
  status,
}: handleProductCounterArg) => {
  if (productCount === 0 && action === "increase") {
    return;
  }

  if (action === "increase") {
    deteteOrderAction({ product: checkedProduct(product) , step });
  }

  if (action === "decrease") {
    addOrderAction({ product: checkedProduct(product), step });

    if ( status === "draft" ) {
      addOrderAction({ product: container, step });
    }
  }
};
