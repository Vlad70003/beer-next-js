interface toggleColorState {
  pathName: string | null;
  path: string;
}

export const toggleColor = ({ pathName, path }: toggleColorState) => {
  return pathName === path ? "#3D69B7" : "#434242";
};
