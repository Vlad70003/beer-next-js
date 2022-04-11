export interface orderAction {
  type: string;
  payload?: any;
}

export interface orderState {
  order: { product: { id: number; status: string }; step: number }[];
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
  key?: number;
}

export interface addToOrderArg {
  addGeneralOrderAction: (value: any) => void;
  order: orderArg[];
}
