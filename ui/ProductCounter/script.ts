import { container } from "../../components/Product/productExample";

interface handleProductCounterArg {
  addOrderAction: any;
  deteteOrderAction: any;
  generalOrder: any;
  product: any;
  step: number;
  productCount: number;
  action: string;
  status?: string | null;
}

const checkedProduct = (product: any) => {
  if (product.product) {
    return product.product;
  }
  if (product) {
    return product;
  }
};

interface findProductByIdArg {
  generalOrder: [];
  product?: { product: { id: number }; step: number };
  step?: number;
}

const findProductById = ({
  generalOrder,
  product,
  step,
}: findProductByIdArg) => {
  let countConteiner = 0;
  let countDraft = 0;

  generalOrder.forEach((element: any) => {
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

const findConteiner = ({ generalOrder, step }: any) => {
  let conteiner = null;
  generalOrder.forEach((element: any) => {
    if (element.product.status === "conteiner" && element.step === step) {
      conteiner = element;
    }
  });
  return conteiner;
};

export const handleProductCounter = ({
  addOrderAction,
  deteteOrderAction,
  generalOrder,
  product,
  step,
  productCount,
  action,
  status,
}: handleProductCounterArg) => {
  if (productCount === 0 && action === "increase") {
    return;
  }

  if (action === "increase") {
    if (status === "conteiner") {
      const { countConteiner, countDraft } = findProductById({
        generalOrder,
        product,
        step,
      });
      if (countConteiner > countDraft) {
        deteteOrderAction({ product: checkedProduct(product), step });
      }
    } else if (status === "draft") {
      const conteiner = findConteiner({ generalOrder, step });

      deteteOrderAction({ product: checkedProduct(product), step });
      deteteOrderAction({ product: checkedProduct(conteiner), step });
    } else {
      deteteOrderAction({ product: checkedProduct(product), step });
    }
  }

  if (action === "decrease") {
    addOrderAction({ product: checkedProduct(product), step });

    if (status === "draft") {
      addOrderAction({ product: container, step });
    }
  }
};
