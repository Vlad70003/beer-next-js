interface handleProductionCountArg {
  productCount: string;
  status: string;
  step: number;
}

export const handleProductionCount = ({
  productCount,
  status,
  step,
}: handleProductionCountArg) => {
  if (status === "draft" && step === 1) {
    return "цена за 1 л без тары";
  } else if (status && step === 0.5) {
    return "цена за 0.5 л без тары";
  } else if (status && step === 1.5) {
    return "цена за 1.5 л без тары";
  } else {
    return productCount;
  }
};
