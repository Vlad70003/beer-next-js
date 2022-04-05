import { addToOrderArg} from "../../../../types/order";



export const addToOrder = ({
  setProductList,
  order,
  productList,
}: addToOrderArg) => {
  const id: number[] = [];
  setProductList([]);

  order.map((item) => {
    if (id.includes(item.product.id)) {
      setProductList(
        productList.map((element) =>
          item.product.id === element.product.id
            ? {
                ...element,
                number: element.number ? element.number + item.step : 1,
              }
            : element
        )
      );
    } else {
      id.push(item.product.id);
      setProductList((productList: any) => [
        ...productList,
        { ...item, number: item.step ? item.step : 1 },
      ]);
    }
  });
};
