import { currentShopAction, currentShopState } from "./../../types/currentShop";

export const CHOOSE_CURENT_SHOP = "CHOOSE_CURENT_SHOP";
export const DELETE_CURRENT_SHOP = "DELETE_CURRENT_SHOP";

const initialStates: currentShopState = {
  currentShop: "Выберите магазин",
};

export const chooseCurrentShopReducers = (
  state = initialStates,
  action: currentShopAction
): currentShopState => {
  switch (action.type) {
    case CHOOSE_CURENT_SHOP:
      return { currentShop: action.payload };
    case DELETE_CURRENT_SHOP:
      return { currentShop: "Выберите магазин" };
    default:
      return state;
  }
};
