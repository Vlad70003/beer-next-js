import { getRightPets } from "./getRightPets";

interface addToOrderFirstProductState {
  currentShop: string;
  openModalAction: any;
  setProductAfterChangeShop: (value: any) => void | null;
  addOrderAction: any;
  product: any;
  status: string;
  step: number;
  petsBottle: { smallPet: {}; mediumPet: {}; bigPet: {} };
  container: {};
}

export const addToOrderFirstProduct = ({
  currentShop,
  openModalAction,
  setProductAfterChangeShop,
  addOrderAction,
  product,
  step,
  container,
  status,
  petsBottle,
}: addToOrderFirstProductState) => {

  const rightPet =
    status === "draft" ? getRightPets({ petsBottle, step }) : null;

  return currentShop === "Выберите магазин"
    ? openModalAction("change-shop") && setProductAfterChangeShop({product, step, rightPet })
    : addOrderAction({ product, step }) &&
        rightPet &&
        addOrderAction({ product: rightPet, step: 1 });
};
