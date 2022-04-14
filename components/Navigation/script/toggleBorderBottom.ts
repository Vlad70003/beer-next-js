interface toggleBorderBottomState {
  shopPage?: string;
  value?: string;
}

export const toggleBorderBottom = ({ shopPage, value }: toggleBorderBottomState) => {
  if (shopPage === value &&  shopPage === "stock") {
    return "4px solid red"
  }
  return shopPage === value ? "4px solid #3D69B7" : "4px solid transparent";
};
