import style from "./ShopList.module.scss";
import { shops } from "../data";

import { Button } from "../../../../ui/Button/Button";

import { currentShop } from "../../../../script/shop/currentShop";

interface ShopListState {
  closeModal?: any;
  setShop: (value: string) => void,
}

export const ShopList = ({ closeModal, setShop }: ShopListState) => {
  return (
    <ul className={style.shopList}>
      {shops.map((shop, ind) => {
        const background = ind % 2 === 0 ? "#F4F9FD" : "white";
        return (
          <li
            key={shop.id}
            className={style.shopItem}
            style={{ background: background }}
          >
            <div className={style.shopItem__leftSide}>
              <div className={style.shopItem__row}>
                <div
                  className={`${style.shopItem__text} ${style.shopItem__title}`}
                >
                  {shop.address}
                </div>
                <div className={style.shopItem__text}>пн-пт</div>
                <div className={style.shopItem__text}>
                  {shop.workTime.weekdays}
                </div>
              </div>
              <div className={style.shopItem__row}>
                <div className={style.shopItem__text}>{shop.phone}</div>
                <div className={style.shopItem__text}>сб-вс</div>
                <div className={style.shopItem__text}>
                  {shop.workTime.weekend}
                </div>
              </div>
            </div>
            <div className={style.shopItem__rightSide}>
              <Button
                title="Выбрать"
                color="#3D69B7"
                borderBottom={"1px solid #3D69B7"}
                onClick={() => {
                  closeModal();
                  currentShop.changeLocalStorage(shop.address);
                  setShop(shop.address)
                }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
