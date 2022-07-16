interface handleProductionCountArg {
  productCount: string;
  status: string;
  step: number;
  checkedAndNumberProductInOrder: { numberOrder: number | null };
}

export const handleProductionCount = ({
  productCount,
  status,
  step,
  checkedAndNumberProductInOrder,
}: handleProductionCountArg) => {
  const numberOrder = checkedAndNumberProductInOrder?.numberOrder || step;
  if (status === "draft") {
    return `цена за ${numberOrder} л без тары`;
  } else {
    return productCount;
  }
};
