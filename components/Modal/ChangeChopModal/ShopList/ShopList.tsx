import { useMemo } from "react";
import style from "./ShopList.module.scss";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

//types
import { shopPropsDataItems } from "../../../../types/shopsList";

//component
import { Button } from "../../../../ui/Button/Button";

interface ShopListProps {
  currentCities: { value: string } | null;
  currentRegion: { value: string } | null;
}

const ShopList = ({ currentCities, currentRegion }: ShopListProps) => {

  const { currentShapAction } = useActions();
  const { closeModalAction } = useActions();
  const { shopsList } = useTypedSelector((state) => state.shopList);

  const shopsListFilter = (currentCities:any, currentRegion:any, shopsList:any) => {
    return shopsList.data.filter((item:any) => (currentCities  ? item.city === currentCities?.value : currentRegion ? item.region === currentRegion?.value : item))
  }

  const shopsListFilterResult = useMemo(() => {
    return shopsListFilter(currentCities, currentRegion, shopsList)
  }, [currentCities, currentRegion])

  return (
    <ul className={style.shopList}>
      {shopsListFilterResult?.map((shop:shopPropsDataItems, ind:number) => {
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
                    {shop.name ? shop.name : null}
                  </div>
                  <div className={style.shopItem__text}>пн-пт</div>
                  <div className={style.shopItem__text}>
                    {shop?.schedule?.fri || ""}
                  </div>
                </div>
                <div className={style.shopItem__row}>
                  <div className={style.shopItem__text}>
                    {shop?.phone ? shop?.phone : "Нет телефона"}
                  </div>
                  <div className={style.shopItem__text}>сб-вс</div>
                  <div className={style.shopItem__text}>
                    {shop?.schedule?.wed || ""}
                  </div>
                </div>
              </div>
              <div className={style.shopItem__rightSide}>
                <Button
                  title="Выбрать"
                  color="#3D69B7"
                  borderBottom={"1px solid #3D69B7"}
                  onClick={() => {
                    closeModalAction();
                    shop.name && currentShapAction(shop.name);
                  }}
                />
              </div>
            </li>
        );
      })}
    </ul>
  );
};

export default ShopList;
