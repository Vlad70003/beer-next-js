interface toggleBorderBottomState {
  pathName: string | null;
  path: string;
}

export const toggleBorderBottom = ({ pathName, path }: toggleBorderBottomState) => {
  return pathName === path ? "4px solid #3D69B7" : "4px solid transparent";
};
