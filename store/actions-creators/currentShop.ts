import { actionState } from "./../../types/products";
import { Dispatch } from "redux";

import { CHOOSE_CURENT_SHOP } from "../reducers/currentShop";

export const currentShapAction = (value:string) => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: CHOOSE_CURENT_SHOP, payload: value });
  };
};
