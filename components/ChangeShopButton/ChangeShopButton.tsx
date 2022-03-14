import { useState, useEffect } from "react";
import style from "./ChangeShopButton.module.scss";

import { ModalWrapper } from "../Modal/ModalWrapper";
import { ChangeChopModal } from "../Modal/ChangeChopModal/ChangeChopModal";
import { MapPin } from "../../ui/MapPin/MapPin";
import { Button } from "../../ui/Button/Button";

import { currentShop } from "../../script/shop/currentShop";



export const ChangeShopButton = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [shop, setShop] = useState<string>("Выберите магазин");

  useEffect(() => {
    currentShop.checkedCurrentShop();
    setShop(localStorage.getItem("currentShop") || "Выберите магазин");
  }, [])

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
          <Button title={shop} type="button" color="#3D69B7" />
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
        <ChangeChopModal setShop={setShop} />
      </ModalWrapper>
    </>
  );
};
