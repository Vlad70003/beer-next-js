import { checkedProduct } from "./checkedProduct";
import { findProductById } from "./findProductById";
import { findConteiner } from "./findConteiner";
import { container } from "../../../components/Product/productExample";

interface handleProductCounterArg {
  addOrderAction: any;
  deteteOrderAction: any;
  generalOrder: any;
  product: any;
  step: number;
  productCount: number;
  action: string;
  petsBottle: { smallPet: {}; mediumPet: {}; bigPet: {} };
  status?: string | null;
}

export const handleProductCounter = ({
  addOrderAction,
  deteteOrderAction,
  generalOrder,
  product,
  step,
  productCount,
  action,
  status,
  petsBottle,
}: handleProductCounterArg) => {
  if (productCount === 0 && action === "increase") {
    return;
  }

  const { smallPet, mediumPet, bigPet } = petsBottle;

  if (action === "increase") {
    if (status === "conteiner") {
      const { countConteiner, countDraft } = findProductById({
        generalOrder,
        product,
        step,
      });

      if (countConteiner > countDraft) {
        //Нельзя выбрать меньше тар, чем необходимо для разливного пива
        deteteOrderAction({ product: checkedProduct(product), step });
      }
    } else if (status === "draft") {
      // Удаляет разливное пиво и тару
      const rightPet =
        step === 0.5
          ? smallPet
          : step === 1
          ? mediumPet
          : step === 1.5
          ? bigPet
          : null;

      deteteOrderAction({ product: checkedProduct(product), step });
      deteteOrderAction({ product: checkedProduct(rightPet), step: 1 });
    } else {
      // Убирает товар из корзины, если это не разливное пиво
      deteteOrderAction({ product: checkedProduct(product), step });
    }
  }

  if (action === "decrease") {
    addOrderAction({ product: checkedProduct(product), step });

    if (status === "draft") {
      const rightPet =
        step === 0.5
          ? smallPet
          : step === 1
          ? mediumPet
          : step === 1.5
          ? bigPet
          : null;

      // Добавляет тару к разливному пиву
      addOrderAction({ product: rightPet, step: 1 });
    }
  }
};
