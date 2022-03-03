import React, { useState } from "react";

import Modal from "react-modal";

interface modalState {
  children?: any;
  padding?: string;
  borderRadius?: string;
  top?: string;
  maxWidth?: string;
  modalIsOpen: boolean,
  setModalIsOpen?: any
}

export const ModalWrapper = ({
  children,
  padding,
  borderRadius,
  top,
  maxWidth,
  modalIsOpen,
  setModalIsOpen,
}: modalState) => {


  function closeModal() {
    localStorage.setItem("first-time", "false");
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
    },
  };

  return (
    <div className="modal">
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="modal__close" onClick={closeModal}></button>
        {React.cloneElement(children, { closeModal: closeModal })}
      </Modal>
    </div>
  );
};

Modal.setAppElement("#__next");
