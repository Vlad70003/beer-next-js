export interface actionState {
  type: string;
  payload?: any;
}

export interface productState {
  users: any[];
  load: boolean;
  error: null | boolean;
}
