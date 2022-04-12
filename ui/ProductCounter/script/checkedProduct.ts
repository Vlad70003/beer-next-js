export const checkedProduct = (product: any) => {
    if (product.product) {
      return product.product;
    }
    if (product) {
      return product;
    }
  };