interface toggleBorderBottomState {
  shopPage?: string;
  value?: string;
}

export const toggleBorderBottom = ({ shopPage, value }: toggleBorderBottomState) => {
  return shopPage === value ? "4px solid #3D69B7" : "4px solid transparent";
};
