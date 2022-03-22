import { currentShopAction, currentShopState } from "./../../types/currentShop";

export const CHOOSE_CURENT_SHOP = "CHOOSE_CURENT_SHOP";

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
    default:
      return state;
  }
};
