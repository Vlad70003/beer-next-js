import React from "react";
import style from "./ModalWrapper.module.scss";

import Modal from "react-modal";

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
}

export const ModalWrapper = ({
  children,
  padding,
  borderRadius,
  top,
  maxWidth,
  minWidth,
  modalIsOpen,
  setModalIsOpen,
  close,
}: modalState) => {

  function closeModal() {
    setModalIsOpen(false);
  }

  const customStyles = {
    content: {
      top: top || "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: padding || "0px",
      borderRadius: borderRadius || "0px",
      maxWidth: maxWidth || "none",
      zIndex: 9999,
      minWidth: minWidth,
    },
  };

  return (
    <div className={style.modal}>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
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
