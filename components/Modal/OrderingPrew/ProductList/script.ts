import { addToOrderArg } from "../../../../types/order";

var _ = require("lodash");

export const addToOrder = ({
  setProductList,
  order,
  productList,
}: addToOrderArg) => {

  const id: { id: number; step: number }[] = [];

  setProductList([]);

  order.map((item) => {

    let isEqual = false;

    id.forEach((element) => {
      _.isEqual(element, { id: item.product.id, step: item.step }) &&
        (isEqual = true);
      return;
    });

    if (isEqual) {
     
      setProductList(
        productList.map((element) => {
          return item.product.id === element.product.id &&
            item.step === element.step
            ? {
                ...element,
                number: element.number ? element.number + item.step : 1,
              }
            : element
        })
      );
    } else {
      id.push({ id: item.product.id, step: item.step });

      setProductList((productList: any) => [
        ...productList,
        { ...item, number: item.step ? item.step : 1 },
      ]);

    }
  });
};
