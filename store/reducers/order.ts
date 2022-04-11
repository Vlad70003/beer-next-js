import { orderAction, orderState } from "../../types/order";

export const ADD_PRODUCT_BY_ORDER = "ADD_PRODUCT_BY_ORDER";
export const DELETE_PRODUCT_BY_ORDER = "DELETE_ PRODUCT_BY_ORDER";
export const DELETE_ALL_PRODUCT_BY_ORDER = "DELETE_ALL_PRODUCT_BY_ORDER";

const initialStates: orderState = {
  order: [],
};

export const orderReducers = (state = initialStates, action: orderAction) => {
  switch (action.type) {
    case ADD_PRODUCT_BY_ORDER:
      return { order: [...state.order, action.payload] };
    case DELETE_PRODUCT_BY_ORDER: {
      const order = state.order;
      let firstIndexClone = null;

      for (let i = order.length - 1; i >= 0; i--) {
        if (
          order[i].product.status === "weight" &&
          order[i].product.id === action.payload.product.id
        ) {
          firstIndexClone = i;
          i = 0;
        } else if (
          order[i].product.id === action.payload.product.id &&
          order[i].step === action.payload.step
        ) {
          firstIndexClone = i;
          i = 0;
        }
      }

      firstIndexClone !== null && order.splice(firstIndexClone, 1);

      return { order: [...order] };
    }
    case DELETE_ALL_PRODUCT_BY_ORDER:
      return { order: [] };
    default:
      return state;
  }
};
