export interface orderAction {
  type: string;
  payload?: any;
}

export interface orderState {
  order: { product: {
    [x: string]: any;
    measure: any; id: number; status: string 
}; step: number }[];
}

export interface orderArg {
  product: {
    productImg?: any;
    picture?: any;
    id: number;
    name: string;
    price: number;
    status: string;
    productCount: string;
    measure: {
      symbol: string
    };
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
