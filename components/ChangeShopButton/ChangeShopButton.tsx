import { MapPin } from "../../ui/MapPin/MapPin";
import { Button } from "../../ui/Button/Button";
import style from "./ChangeShopButton.module.scss";

export const ChangeShopButton = () => {
  return (
    <div className={style.changeShopBtn} style={{ display: "flex" }}>
      <span className="changeShopBtn__max-pin__wrapper">
        <MapPin />
      </span>
      <span className={style.changeShopBtn__button__wrapper}>
        <Button title="Выберите магазин" type="button" color="#3D69B7" />
      </span>
    </div>
  );
};
