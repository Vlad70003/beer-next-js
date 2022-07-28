interface toggleBorderBottomState {
  activeScrollPage?: string;
  value?: string;
}

export const toggleBorderBottom = ({
  activeScrollPage,
  value,
}: toggleBorderBottomState) => {
  if (activeScrollPage === value && activeScrollPage === "stock") {
    return "4px solid red";
  }
  return activeScrollPage === value
    ? "4px solid #3D69B7"
    : "4px solid transparent";
};
