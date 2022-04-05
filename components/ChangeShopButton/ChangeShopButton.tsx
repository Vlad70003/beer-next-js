import { useState, useEffect } from "react";
import style from "./ChangeShopButton.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { ChangeChopModal } from "../Modal/ChangeChopModal/ChangeChopModal";
import { MapPin } from "../../ui/MapPin/MapPin";
import { ModalStaticWrapper } from "../ModalStatic/ModalStaticWrapper";
import { ModalWrapper } from "../Modal/ModalWrapper";
import { Button } from "../../ui/Button/Button";

interface ChangeShopButtonProps {
  noLogo?: boolean;
  borderBottom?: string;
  margin?: string;
}

export const ChangeShopButton = ({
  noLogo,
  borderBottom,
  margin,
}: ChangeShopButtonProps) => {
  const currentShopStore = useTypedSelector(
    (state) => state.currentShop.currentShop
  );

  const modal = useTypedSelector((state) => state.modal);
  const { openModalAction } = useActions();

  useEffect(() => {
    localStorage.setItem("currentShop", currentShopStore);
  }, [currentShopStore]);

  const ChangeShopButtonStyle = {
    display: "flex",
    borderBottom: borderBottom,
    margin: margin,
  };

  return (
    <>
      <div
        className={style.changeShopBtn}
        style={ChangeShopButtonStyle}
        onClick={() => openModalAction("change-shop")}
      >
        {!noLogo && (
          <span className="changeShopBtn__max-pin__wrapper">
            <MapPin />
          </span>
        )}
        <span className={style.changeShopBtn__button__wrapper}>
          <Button title={currentShopStore} type="button" color="#3D69B7" />
        </span>
      </div>

      {
        modal.typeModal === "change-shop" && (
          // <ModalStaticWrapper top="100px" left="50%" transform="translateX(-50%)" >
          //   <ChangeChopModal />
          // </ModalStaticWrapper>
          <ModalWrapper
            padding="32px 54px"
            borderRadius="20px"
            top="35%"
            left="50%"
            minWidth="560px"
            modalIsOpen={modal.modalOpen}
            backgroundColor="#0000004D"
            onRequestClose
            close
          >
            <ChangeChopModal />
          </ModalWrapper>
        )

        // </ModalWrapper>
      }
    </>
  );
};
