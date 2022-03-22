import { useState } from "react";
import style from "./ChangeChopModal.module.scss";

import { BorderWrapper } from "../../wrappers/borderWrapper/BorderWrapper";
import { InputSelect } from "../../../ui/Select/InputSelect";
import { StoreSelection } from "../../../ui/StoreSelection/StoreSelection";
import { ShopList } from "./ShopList/ShopList";
import { YandexMap } from "../../YandexMap/YandexMap";

interface ChangeChopModalState {
  closeModal?: any;
}

export const ChangeChopModal = ({ closeModal }: ChangeChopModalState) => {
  const [showMap, setShowMap] = useState(false);

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
                  width="100%"
                  minWidth="187px"
                  border="1px solid #BFBFBF"
                  transform
                />
              </div>
            </div>
            <div className={style.changeChopModal__header__rightSide}>
              <div className={style.changeChopModal__header__title}>Город</div>
              <div className={style.changeChopModal__header__input}>
                <InputSelect
                  placeholder="Область"
                  width="100%"
                  minWidth="187px"
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
            {!showMap && <ShopList closeModal={closeModal} />}
            {showMap && <YandexMap width={"100%"} height={"248px"} />}
          </div>
        </main>
      </div>
    </div>
  );
};
