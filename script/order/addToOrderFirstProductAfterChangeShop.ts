interface addToOrderFirstProductAfterChangeShopState {
  productsForShopData: { products: { id: number }[] };
  productAfterChangeShop: {
    product: { id: number };
    step: number;
    rightPet: {} | null;
  };
  addOrderAction: any;
  setProductAfterChangeShop: (value: any) => void;
}

export const addToOrderFirstProductAfterChangeShop = ({
  productsForShopData,
  productAfterChangeShop,
  addOrderAction,
  setProductAfterChangeShop,
}: addToOrderFirstProductAfterChangeShopState) => {
  const product = productsForShopData?.products;
  const necessaryProduct = product?.filter(
    (item: any) => item.id === productAfterChangeShop?.product?.id
  );

  if (necessaryProduct) {
    addOrderAction({
      product: productAfterChangeShop.product,
      step: productAfterChangeShop.step,
    });

    if (productAfterChangeShop.rightPet) {
      addOrderAction({ product: productAfterChangeShop.rightPet, step: 1 });
    }
    setProductAfterChangeShop(null);
  }
};
