import { orderArg } from "../../types/order";

interface checkedProductInOrderArg {
  generalOrder: orderArg[];
  id: number;
  step: number;
  status: string;
}

export const checkedProductInOrder = ({
  generalOrder,
  id,
  step,
  status,
}: checkedProductInOrderArg) => {
  let productIsOrder = false;
  let numberOrder = null;

  generalOrder?.map((item) => {
    if (status === "weight" && item.product.id === id) {
      productIsOrder = true;
      numberOrder = item.number;
    }
    if (status !== "weight" && item.product.id === id && item.step === step) {
      productIsOrder = true;
      numberOrder = item.number;
    }
  });

  return { productIsOrder, numberOrder };
};
