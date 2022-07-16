export interface catalogState {
  title: string;
  sortButton?: string[];
  product: any;
  filters: [{ values: [{value: string}] }];
}
