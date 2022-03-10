import style from "./StoreSelection.module.scss";

import { Button } from "../Button/Button";

interface StoreSelectionState {
  setShowMap: (value: boolean) => void;
  showMap: boolean;
  width?: string;
}

export const StoreSelection = ({
  width,
  setShowMap,
  showMap,
}: StoreSelectionState) => {
  const storeSelectionStyle = {
    width: width,
  };

  return (
    <div className={style.storeSelection} style={storeSelectionStyle}>
      <Button
        title="Списком"
        color="grey"
        padding="2px 18px"
        border={showMap ? "1px solid transparent" : "1px solid #BFBFBF"}
        background={showMap ? "transparent" : "white"}
        borderRadius="34px"
        fontSize="14px"
        onClick={() => setShowMap(false)}
      />
      <Button
        title="На карте"
        color="grey"
        padding="2px 18px"
        border={showMap ? "1px solid #BFBFBF" : "1px solid transparent"}
        background={showMap ? "white" : "transparent"}
        borderRadius="34px"
        fontSize="14px"
        onClick={() => setShowMap(true)}
      />
    </div>
  );
};
