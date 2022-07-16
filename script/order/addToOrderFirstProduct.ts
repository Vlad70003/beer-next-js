interface addToOrderFirstProductState {
  currentShop: string;
  openModalAction: any;
  addOrderAction: any;
  product: any;
  step: number;
  container: {};
}

export const addToOrderFirstProduct = ({
  currentShop,
  openModalAction,
  addOrderAction,
  product,
  step,
  container,
}: addToOrderFirstProductState) => {
  return currentShop === "Выберите магазин"
    ? openModalAction("change-shop")
    : addOrderAction({ product, step });
  // &&
  //     status === "draft" &&
  //     addOrderAction({ product: container, step });
};
