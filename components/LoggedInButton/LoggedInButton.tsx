import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import style from "./LoggedInButton.module.scss";

import { Button } from "../../ui/Button/Button";
import { User } from "../../ui/User/User";
import { ModalWrapper } from "../Modal/ModalWrapper";
import { Auntificate } from "../Modal/Auntificate/Auntificate";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface StateProps {

}

export const LoggedInButton = ({}:StateProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const loggedInState = useTypedSelector(state => state.auntificate.loggedIn);

  return (
    <>
      <div className={style.loggedInButton} onClick={() => {!loggedInState && setModalIsOpen(true)}}>
        <Button
          title={loggedInState ? "Александр Григорьевич" : "Войти"}
          type="button"
          fontWeight="700"
          padding="0 10px 0 0"
          maxLength={14}
          fontSize="18px"
        />
        <User />
      </div>
      <ModalWrapper
        padding="32px 54px"
        borderRadius="20px"
        top="100px"
        left="74%"
        minWidth="478px"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        backgroundColor="transparent"
        transform="translate(-50%, 0%)"
        onRequestClose
        close
      >
        <Auntificate />
      </ModalWrapper>
    </>
  );
};
