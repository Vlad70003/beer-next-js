interface findProductByIdArg {
    generalOrder: [
      { product: { id: number; status: string }; step: number; number: number }
    ];
    product?: { product: { id: number }; step: number };
    step?: number;
  }

export const findProductById = ({
    generalOrder,
    product,
    step,
  }: findProductByIdArg) => {
    let countConteiner = 0;
    let countDraft = 0;
  
    generalOrder.forEach((element) => {
      if (
        element.product.id === product?.product.id &&
        element.step === product?.step
      ) {
        countConteiner = element.number / element.step;
      }
  
      if (element.product.status === "draft" && element.step === step) {
        countDraft = element.number / element.step;
      }
    });
  
    return { countConteiner, countDraft };
  };