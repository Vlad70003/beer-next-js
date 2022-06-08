import { shopsListAction, shopsListState } from "../../types/shopsList";

export const ADD_SHOPS_LIST = "ADD_SHOPS_LIST";
export const LOAD_SHOPS_LIST = "LOAD_SHOPS_LIST";
export const ERROR_SHOPS_LIST = "LOAD_SHOPS_LIST";

const initialStates: shopsListState = {
  shopsList: [],
  load: false,
  error: null,
};

export const shopsListReducers = (
  state = initialStates,
  action: shopsListAction
): shopsListState => {
  switch (action.type) {
    case ADD_SHOPS_LIST:
      return { shopsList: action.payload, load: false, error: null };
    case LOAD_SHOPS_LIST:
      return { shopsList: [], load: true, error: null };
    case ERROR_SHOPS_LIST:
      return { shopsList: [], load: false, error: action.payload };
    default:
      return state;
  }
};

