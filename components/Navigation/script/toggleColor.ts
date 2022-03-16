interface toggleColorState {
  shopPage: string;
  value: string;
}

export const toggleColor = ({ shopPage, value }: toggleColorState) => {
  return shopPage === value ? "#3D69B7" : "black";
};
