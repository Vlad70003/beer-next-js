import { actionState } from "./../../types/products";
import { Dispatch } from "redux";

import { ADD_SHOPS_LIST, LOAD_SHOPS_LIST, ERROR_SHOPS_LIST } from "../reducers/shopsList";

export const addShopsListAction = (value: any) => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: ADD_SHOPS_LIST, payload: value });
  };
};
export const loadShopsListAction = () => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: LOAD_SHOPS_LIST });
  };
};
export const errorShopsListAction = () => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: ERROR_SHOPS_LIST });
  };
};
