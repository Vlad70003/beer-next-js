import { orderAction, orderState } from "../../types/order";

export const ADD_PRODUCT_BY_ORDER = "ADD_PRODUCT_BY_ORDER";
export const DELETE_PRODUCT_BY_ORDER = "DELETE_ PRODUCT_BY_ORDER";

const initialStates: orderState = {
    order: [],
}

export const orderReducers = (state = initialStates,
    action: orderAction) => {
        switch (action.type) {
            case ADD_PRODUCT_BY_ORDER:
            return { order: [...state.order, action.payload] };
            case DELETE_PRODUCT_BY_ORDER:
              return { order: [] };
            default: 
              return state;
          }

}