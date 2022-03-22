import { actionState } from "./../../types/products";
import { Dispatch } from "redux";

import { FETCH_LOGIN_SUCCESS, LOG_OUT } from "../reducers/auntificate";

export const loggedInAction = () => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: FETCH_LOGIN_SUCCESS });
  };
};

export const loggedOutAction = () => {
  return async (dispatch: Dispatch<actionState>) => {
    dispatch({ type: LOG_OUT });
  };
};