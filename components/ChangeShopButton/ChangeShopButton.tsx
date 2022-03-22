import { useState, useEffect } from "react";
import style from "./ChangeShopButton.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { ModalWrapper } from "../Modal/ModalWrapper";
import { ChangeChopModal } from "../Modal/ChangeChopModal/ChangeChopModal";
import { MapPin } from "../../ui/MapPin/MapPin";
import { Button } from "../../ui/Button/Button";

export const ChangeShopButton = () => {

  const currentShopStore = useTypedSelector(state => state.currentShop.currentShop);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("currentShop", currentShopStore);
  }, [currentShopStore])

  return (
    <>
      <div
        className={style.changeShopBtn}
        style={{ display: "flex" }}
        onClick={() => setModalIsOpen(true)}
      >
        <span className="changeShopBtn__max-pin__wrapper">
          <MapPin />
        </span>
        <span className={style.changeShopBtn__button__wrapper}>
          <Button title={currentShopStore} type="button" color="#3D69B7" />
        </span>
      </div>

      <ModalWrapper
        padding="32px 54px"
        borderRadius="20px"
        top="35%"
        left="50%"
        minWidth="560px"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        backgroundColor="transparent"
        onRequestClose
        close
      >
        <ChangeChopModal />
      </ModalWrapper>
    </>
  );
};
