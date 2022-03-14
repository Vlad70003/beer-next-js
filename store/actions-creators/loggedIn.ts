import { actionState } from "./../../types/products";
import { Dispatch } from "redux";

import { FETCH_LOGIN_SUCCESS } from "../reducers/auntificate";

export const loggedInAction = () => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: FETCH_LOGIN_SUCCESS });
  };
};
