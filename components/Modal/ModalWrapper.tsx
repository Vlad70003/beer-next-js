import React, { useState } from "react";
import "./ModalWrapper.scss";

import Modal from "react-modal";

interface modalState {
  children?: any;
  padding?: string;
  border?: string;
  top?: string;
  maxWidth?: string;
}

export const ModalWrapper = ({
  children,
  padding,
  border,
  top,
  maxWidth,
}: modalState) => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
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
      border: border || "0px",
      maxWidth: maxWidth || "none",
      zIndex: 9999,
    },
  };

  return (
    <div className="modal">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
