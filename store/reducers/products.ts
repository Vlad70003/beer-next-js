import { productState, actionState } from './../../types/products';

export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";

const initialStates: productState = {
  users: [],
  load: false,
  error: null,
};

export const productsReducers = (
  state = initialStates,
  action: actionState
): productState => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { load: true, error: null, users: [] };

    case FETCH_PRODUCT_SUCCESS:
      return { load: false, error: false, users: action.payload };

    case FETCH_PRODUCT_ERROR:
      return { load: false, error: action.payload, users: [] };

    default:
      return state;
  }
};