import { ProductClass } from "./../../../script/product/product";

interface findProductByIdArg {
  generalOrder: [
    {
      product: { id: number; status: string; measure: {}; name: string; price:number };
      step: number;
      number: number;
    }
  ];
  product?: { id: number; step: number; price: number };
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
    const productClass = new ProductClass();
    const status = productClass.status({
      measure: element?.product?.measure,
      name: element?.product?.name,
    });

    if (
      element?.product?.id === product?.id &&
      element.product.price === product?.price
    ) {
      countConteiner = element.number / element.step;
    }

    if (status === "draft" && element?.step === step) {
      countDraft = element.number / element.step;
    }
  });

  return { countConteiner, countDraft };
};
