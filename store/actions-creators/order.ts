import { actionState } from "./../../types/products";
import { Dispatch } from "redux";

import {
  ADD_PRODUCT_BY_ORDER,
  DELETE_PRODUCT_BY_ORDER,
} from "../reducers/order";

export const addOrderAction = (value:{}) => {
    return async (dispatch: Dispatch<actionState>) => {
      dispatch({ type: ADD_PRODUCT_BY_ORDER, payload: value });
    };
  };

export const deleteOrderAction = () => {
    return async (dispatch: Dispatch<actionState>) => {
      dispatch({ type: DELETE_PRODUCT_BY_ORDER });
    };
  };
