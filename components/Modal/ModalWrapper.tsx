import React from "react";
import style from "./ModalWrapper.module.scss";
import Modal from "react-modal";

import {useActions} from "../../hooks/useActions";

interface modalState {
  children?: any;
  padding?: string;
  borderRadius?: string;
  top?: string;
  maxWidth?: string;
  modalIsOpen: boolean;
  setModalIsOpen?: any;
  minWidth?: string;
  close?: boolean;
  backgroundColor?: string,
  onRequestClose?: boolean,
  right?: string,
  left?: string,
  transform?: string,
}

export const ModalWrapper = ({
  children,
  padding,
  borderRadius,
  top,
  maxWidth,
  minWidth,
  modalIsOpen,
  close,
  backgroundColor,
  onRequestClose,
  right,
  left,
  transform
}: modalState) => {

  const {closeModalAction} = useActions();

  function closeModal() {
    closeModalAction();
  }

  function closeEmit() {}

  const customStyles = {
    content: {
      top: top || "50%",
      left: left || "auto",
      right: right || "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: transform || "translate(-50%, -50%)",
      padding: padding || "0px",
      borderRadius: borderRadius || "0px",
      maxWidth: maxWidth || "none",
      zIndex: 9999,
      minWidth: minWidth,
    },
    overlay: {
      backgroundColor: backgroundColor,
    }
  };

  return (
    <div className={style.modal}>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={onRequestClose ? closeModal : closeEmit}
      >
        {close && (
          <button className={style.modal__close} onClick={closeModal}></button>
        )}
        {React.cloneElement(children, { closeModal: closeModal })}
      </Modal>
    </div>
  );
};

Modal.setAppElement("#__next");
