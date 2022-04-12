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
        //Нельзя выбрать меньше тар, чем необходимо для разливного пива
        deteteOrderAction({ product: checkedProduct(product), step });
      }
    } else if (status === "draft") {
      // Удаляет разливное пиво и тару
      const conteiner = findConteiner({ generalOrder, step });

      deteteOrderAction({ product: checkedProduct(product), step });
      deteteOrderAction({ product: checkedProduct(conteiner), step });
    } else {
      // Убирает товар из корзины, если это не разливное пиво
      deteteOrderAction({ product: checkedProduct(product), step });
    }
  }

  if (action === "decrease") {
    addOrderAction({ product: checkedProduct(product), step });

    if (status === "draft") {
      // Добавляет тару к разливному пиву
      addOrderAction({ product: container, step });
    }
  }
};
