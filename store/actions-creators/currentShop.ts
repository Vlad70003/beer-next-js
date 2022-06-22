import { actionState } from "./../../types/products";
import { Dispatch } from "redux";

import { shopPropsDataItems } from "../../types/shopsList";

import { CHOOSE_CURENT_SHOP, DELETE_CURRENT_SHOP } from "../reducers/currentShop";

export const currentShapAction = (value: shopPropsDataItems) => {

  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: CHOOSE_CURENT_SHOP, payload: value });
  };
};

export const deleteCurrentShapAction = () => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: DELETE_CURRENT_SHOP });
  };
};
