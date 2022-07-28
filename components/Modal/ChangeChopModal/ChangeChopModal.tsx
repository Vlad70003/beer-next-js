import React, { useState, useEffect, useMemo } from "react";
import style from "./ChangeChopModal.module.scss";

//hooks
import { useTypedSelector } from "../../../hooks/useTypedSelector";

//component
import { InputSelect } from "../../../ui/Select/InputSelect";
import { StoreSelection } from "../../../ui/StoreSelection/StoreSelection";
import ShopList from "./ShopList/ShopList";

//libs
import { YandexMap } from "../../YandexMap/YandexMap";

//script
import { uniqueArrayElement } from "../../../script/array/uniqueArrayElement";

interface ChangeChopModalState {
  closeModal?: any;
}

const ChangeChopModal = ({}: ChangeChopModalState) => {
  const [showMap, setShowMap] = useState(false);
  const { shopsList } = useTypedSelector((state) => state.shopList);
  const { currentShop } = useTypedSelector((state) => state.currentShop);
  const [region, setRegion] = useState<{ value: string }[]>([]);
  const [cities, setSeties] = useState<any>([]);

  const [currentRegion, setCurrentRegion] = useState<{ value: string } | null>(
    null
  );
  const [currentCities, setCurrentCities] = useState<{
    value: string;
    coord: number[];
  } | null>(null);

  const shopListFilter = () => {
    const returnArray = shopsList?.data
      .filter((item) => item.region && item.city && item)
      .map((item) => {
        return { [item.city || 1]: [item.region, item.id, item.coordinates] };
      });
    return returnArray;
  };

  const shopListFilterResult: any = useMemo(
    () => shopListFilter(),
    [shopsList]
  );

  useEffect(() => {
    setRegion([]);

    const newRegion = shopListFilterResult?.map((item: any) => {
      return item[Object.keys(item)[0]][0];
    });

    Array.isArray(newRegion) &&
      uniqueArrayElement(newRegion).map((item) => {
        return setRegion((list: any) => [
          ...list,
          { value: item, label: item, color: "#EBEBEB" },
        ]);
      });
  }, [shopListFilterResult]);

  useEffect(() => {
    setSeties([]);
    setCurrentCities(null);
    const cities = [];

    for (let key in shopListFilterResult) {
      const item = shopListFilterResult[key];

      for (let city in item) {
        if (item[city][0] === currentRegion?.value) {
          cities.push({ [city]: item[city][2] });
        }
      }
    }

    const uniqueCities = cities.filter(
      (elem, index, self) =>
        self.findIndex((t) => {
          return Object.keys(t)[0] === Object.keys(elem)[0];
        }) === index
    );

    Array.isArray(uniqueCities) &&
      uniqueCities.map((item) => {
        return setSeties((list: any) => [
          ...list,
          {
            value: Object.keys(item)[0],
            label: Object.keys(item)[0],
            color: "#EBEBEB",
            coord: Object.values(item)[0],
          },
        ]);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRegion]);

  return (
    <div className={style.changeChopModal}>
      <div className={style.changeChopModal__conteiner}>
        <header className={style.changeChopModal__header}>
          <div className={style.changeChopModal__header__row}>
            <div className={style.changeChopModal__header__leftSide}>
              <div className={style.changeChopModal__header__title}>
                Область
              </div>
              <div className={style.changeChopModal__header__input}>
                <InputSelect
                  placeholder="Область"
                  selectedOption={currentRegion}
                  setSelectedOption={setCurrentRegion}
                  options={region}
                  width="100%"
                  minWidth="187px"
                  border="1px solid #BFBFBF"
                  noOptionsMessage="Загрузка"
                  transform
                />
              </div>
            </div>
            <div className={style.changeChopModal__header__rightSide}>
              <div className={style.changeChopModal__header__title}>Город</div>
              <div className={style.changeChopModal__header__input}>
                <InputSelect
                  placeholder="Город"
                  selectedOption={currentCities}
                  setSelectedOption={setCurrentCities}
                  width="100%"
                  options={cities}
                  minWidth="187px"
                  noOptionsMessage="Выберите область"
                  border="1px solid #BFBFBF"
                  transform
                />
              </div>
            </div>
          </div>
          <div className={style.changeChopModal__header__row}>
            <div className={style.changeChopModal__header__leftSide}>
              <div className={style.changeChopModal__header__title}>
                Магазин
              </div>
            </div>
            <div className={style.changeChopModal__header__rightSide}>
              <StoreSelection
                width="187px"
                setShowMap={setShowMap}
                showMap={showMap}
              />
            </div>
          </div>
        </header>
        <main className={style.changeChopModal__main}>
          <div className={style.changeChopModal__main__conteiner}>
            {!showMap && (
              <ShopList
                currentCities={currentCities}
                currentRegion={currentRegion}
              />
            )}
            {showMap && (
              <div className={style.changeChopModal__yandexConteiner}>
                <YandexMap
                  width={"100%"}
                  height={"248px"}
                  shopsList={shopsList}
                  currentCities={currentCities}
                  currentRegion={currentRegion}
                />
              </div>
            )}
          </div>
        </main>
        {/* {showMap && <div className={style.changeChopModal__shop}>324342</div>} */}
      </div>
    </div>
  );
};

export default React.memo(ChangeChopModal);
