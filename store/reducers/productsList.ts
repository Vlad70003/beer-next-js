import { productListAction, productListState } from "../../types/productList";


export const ADD_PRODUCTS_LIST = "ADD_PRODUCTS_LIST";
export const LOAD_PRODUCTS_LIST = "LOAD_PRODUCTS_LIST";
export const ERROR_PRODUCTS_LIST = "ERROR_PRODUCTS_LIST";

const initialStates: productListState = {
  productList: null,
  load: false,
  error: null,
};

export const productListReducers = (
  state = initialStates,
  action: productListAction
) => {
  switch (action.type) {
    case ADD_PRODUCTS_LIST:
      return { productList: action.payload, load: false, error: null };

    case LOAD_PRODUCTS_LIST:
      return { productList: null, load: true, error: null };

    case ERROR_PRODUCTS_LIST:
      return { productList: null, load: false, error: action.payload };
    default:
      return state;
  }
};
