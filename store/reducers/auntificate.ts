import { loggedInAction, loggedInState } from './../../types/loggenIn';

export const FETCH_LOGIN = "FETCH_PRODUCT";
export const FETCH_LOGIN_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_LOGIN_ERROR = "FETCH_PRODUCT_ERROR";

const initialStates: loggedInState = {
  loggedIn: false,
  load: false,
  error: null,
};

export const auntificateReducers = (
  state = initialStates,
  action: loggedInAction
): loggedInState => {

  switch (action.type) {
    case FETCH_LOGIN:
      return { load: true, error: null, loggedIn: false };

    case FETCH_LOGIN_SUCCESS:
      return { load: false, error: false, loggedIn: true };

    case FETCH_LOGIN_ERROR:
      return { load: false, error: true, loggedIn: false };

    default:
      return state;
  }
};