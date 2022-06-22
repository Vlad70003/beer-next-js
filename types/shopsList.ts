export interface shopsListAction {
  type: string;
  payload?: any;
}

export interface shopsListState {
  shopsList: shopsProps | null;
  load: boolean;
  error: any | null;
}

export interface shopsProps {
  success: number;
  data: shopPropsDataItems[];
}

export interface shopPropsDataItems {
  address: string | null;
  city: string | null;
  coordinates: number[] | null;
  id: number | string;
  name: string | null;
  phone: string | number | null;
  region: string | number | null;
  schedule: {
    fri: string;
    mon: string;
    sat: string;
    sun: string;
    thu: string;
    tue: string;
    wed: string;
  };
  xml_id: string | null;
}
