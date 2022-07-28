export interface priceState {
  product: {
    productImg?: string;
    productCount?: string;
    productGrade?: string;
    productPrice?: string;
    productProduction?: string;
    productSubtitle?: string;
    productTextButton?: string;
    productTitle?: string;
  };
}

export interface productState {
  beer?: any;
  beverages?: any;
  fish?: any;
  meat?: any;
  chease?: any;
  snack?: any;
  other?: any;
  stock?: any;
  bottled?: any;
}

export interface productItem {
  stil_piva: { value: string };
  vid_piva: { value: string };
  id: string;
  props: [
    {
      value: string;
      id: any;
      property_id: string;
    }
  ];
}
