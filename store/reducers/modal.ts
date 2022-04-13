import { modalAction, modalState } from "./../../types/modal";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const initialStates: modalState = {
    modalOpen: false,
    typeModal: null,
    id: null,
  };

  export const modalReducers = (
    state = initialStates,
    action: modalAction
  ): modalState => {
    switch (action.type) {
      case OPEN_MODAL:
        return { modalOpen: true, typeModal: action.payload?.value || null, id: action.payload?.id || null };
      case CLOSE_MODAL:
        return { modalOpen: false, typeModal: null, id: null };
      default:
        return state;
    }
  };