interface toggleColorState {
  pathName: string | null;
  path: string;
}

export const toggleColor = ({ pathName, path }: toggleColorState) => {
  return pathName === path ? "#3D69B7" : "#434242";
};

export const toggleFontWidth = ({ pathName, path }: toggleColorState) => {
  return pathName === path ? "700" : "400";
};
