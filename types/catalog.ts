export interface catalogState {
  title: string;
  sortButton?: string[];
  product: any;
  petsBottle: {};
  setProductAfterChangeShop: (value: any) => void | null;
  setActiveScrollPage: (value: any) => void | null;
  filters: [{ values: [{value: string}] }];
}
