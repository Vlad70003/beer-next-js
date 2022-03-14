export interface loggedInAction {
    type: string;
    payload?: any;
}

export interface loggedInState {
    loggedIn: boolean;
    load: boolean;
    error: null | boolean;
  }