import { addToOrderArg, orderArg } from "../../../../types/order";
import { ProductClass } from "../../../../script/product/product";

export const addToOrder = ({ addGeneralOrderAction, order }: addToOrderArg) => {
  
  const productClass = new ProductClass();

  const compareItems = (resultItem: any, orderItem: any, status: any) => {
    if (status === "weight") {
      return resultItem?.product?.id === orderItem.product.id;
    }

    return (
      resultItem?.product?.id === orderItem.product.id &&
      resultItem?.step === orderItem.step
    );
  };

  const result: any = [];

  order.forEach((orderItem, ind) => {
    const status = productClass.status({
      measure: orderItem?.product?.measure,
      name: orderItem?.product?.name,
    });
    const filtered = result.filter((resultItem: any) =>
      compareItems(resultItem, orderItem, status)
    );

    if (filtered.length > 0) {
      const inx = result.findIndex((resultItem: any) =>
        compareItems(resultItem, orderItem, status)
      );
      result[inx].number += orderItem.step;
    } else {
      result.push({ ...orderItem, number: orderItem.step, key: ind });
    }
  });

  const sortResult = result.sort(
    (a: orderArg, b: orderArg) =>
      a.product.id + a.step - (b.product.id + b.step)
  );

  addGeneralOrderAction(sortResult);
};
