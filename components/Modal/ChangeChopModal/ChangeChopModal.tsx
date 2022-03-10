import { useState } from "react";
import style from "./ChangeChopModal.module.scss";

import { BorderWrapper } from "../../wrappers/borderWrapper/BorderWrapper";
import { InputSelect } from "../../../ui/Select/InputSelect";
import { StoreSelection } from "../../../ui/StoreSelection/StoreSelection";
import { ShopList } from "./ShopList/ShopList";
import { YandexMap } from "../../YandexMap/YandexMap";

interface ChangeChopModalState {
  closeModal?: any;
  setShop: (value: string) => void,
}

export const ChangeChopModal = ({closeModal, setShop}:ChangeChopModalState) => {

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
                <BorderWrapper
                  border="1px solid #BFBFBF"
                  borderRadius="20px"
                  maxWidth="187px"
                  minWidth="187px"
                >
                  <InputSelect placeholder="Область" width="100%"/>
                </BorderWrapper>
              </div>
            </div>
            <div className={style.changeChopModal__header__rightSide}>
              <div className={style.changeChopModal__header__title}>Город</div>
              <div className={style.changeChopModal__header__input}>
                <BorderWrapper
                  border="1px solid #BFBFBF"
                  borderRadius="20px"
                  minWidth="187px"
                  maxWidth="187px"
                >
                  <InputSelect placeholder="Область" width="100%"/>
                </BorderWrapper>
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
                < StoreSelection width="187px" setShowMap={setShowMap} showMap={showMap} />   
            </div>
          </div>
        </header>
        <main className={style.changeChopModal__main}>
          <div className={style.changeChopModal__main__conteiner}>
            {!showMap && < ShopList closeModal={closeModal} setShop={setShop} /> }     
            {showMap && < YandexMap width={"100%"} height={"248px"} /> }     
        </div>
        </main>
      </div>
    </div>
  );
};
