export interface orderAction {
  type: string;
  payload?: any;
}

export interface orderState {
  order: { product: { id: number }, step: number }[];
}

export interface orderArg {
  product: {
    productImg: { src: string };
    id: number;
    productTitle: string;
    productPrice: number;
    status: string;
    productCount: string;
  };
  step: number;
  count?: number;
  number?: number;
}

export interface addToOrderArg {
  setProductList: (value: any) => void;
  order: orderArg[];

}
