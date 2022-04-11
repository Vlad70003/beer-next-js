import { Console } from "console";

const GRAMM = 100;

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

// interface priceCalculateArg {
//   step: number;
//   status: string | null;
//   productCount: number;
//   price: number
// }

// export const priceCalculate = ({step, status, productCount, price}: priceCalculateArg) => {
//   const pow = productCount * price;

//   if (status === "draft") {
//     return pow * step;
//   } else if (status === "weight") {
//     return pow / GRAMM;
//   } else {
//     return pow;
//   }
// };

// interface handleProductCountArg {
//   step: number;
//   status: string | null;
//   productCount: number;
//   setProductCount: (value: number) => void;
// }

// export const handleProductCount = ({status, step, productCount, setProductCount}:handleProductCountArg) => {
//   if (status === "draft") {
//     setProductCount(productCount / step);
//   } else if (status === "weight") {
//     setProductCount(productCount * GRAMM);
//   } else {
//     setProductCount(productCount);
//   }
// }