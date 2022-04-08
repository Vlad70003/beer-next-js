import { actionState } from "./../../types/products";
import { Dispatch } from "redux";

import { ADD_GENERAL_ORDER } from "../reducers/genegalOrder";

export const addGeneralOrderAction = (value: any) => {
    return async (dispatch: Dispatch<actionState>) => {
      dispatch({ type: ADD_GENERAL_ORDER, payload: value});
    };
  };