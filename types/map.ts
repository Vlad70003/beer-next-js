export interface mapState {
  width?: string | number;
  height?: string | number;
  shopsList?: any;
  coordForContacts?: number[];
  centerOffice?: number[];
  currentCities?: {coord: number[]} | null | undefined;
  currentRegion?: {
    value: string
  } | null | undefined;
}
