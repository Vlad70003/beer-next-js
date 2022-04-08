import {
  generalOrderAction,
  generalOrderState,
} from "../../types/generalOrder";

export const ADD_GENERAL_ORDER = "ADD_GENERAL_ORDER";

const initialStates: generalOrderState = {
  generalOrder: [],
};

export const generalOrderReducers = (
  state = initialStates,
  action: generalOrderAction
): generalOrderState => {
  switch (action.type) {
    case ADD_GENERAL_ORDER:
      return { generalOrder: action.payload };

    default:
      return state;
  }
};
