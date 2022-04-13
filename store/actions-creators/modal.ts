import { actionState } from "./../../types/products";
import { Dispatch } from "redux";

import { OPEN_MODAL, CLOSE_MODAL } from "../reducers/modal";

export const openModalAction = (value:string, id: number) => {
    return async (dispatch: Dispatch<actionState>) => {
      dispatch({ type: OPEN_MODAL, payload: {value, id} });
    };
  };

export const closeModalAction = () => {
    return async (dispatch: Dispatch<actionState>) => {
      dispatch({ type: CLOSE_MODAL });
    };
  };