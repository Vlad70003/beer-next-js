export interface productListAction {
    type: string;
    payload?: any;
  }

  export interface productListState {
    productList: any | null,
    load: boolean,
    error: any | null,
  }