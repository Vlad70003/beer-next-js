import { actionState } from "./../../types/products";
import { Dispatch } from "redux";

import {
  ADD_PRODUCTS_LIST,
  LOAD_PRODUCTS_LIST,
  ERROR_PRODUCTS_LIST,
} from "../reducers/productsList";

export const addProductListAction = (value: {}) => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: ADD_PRODUCTS_LIST, payload: value });
  };
};

export const loadProductListAction = () => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: LOAD_PRODUCTS_LIST });
  };
};

export const errorProductListAction = (value: any) => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: ERROR_PRODUCTS_LIST, payload: value });
  };
};
