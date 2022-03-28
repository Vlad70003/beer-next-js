import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./LoggedInButton.module.scss";

import { Button } from "../../ui/Button/Button";
import { User } from "../../ui/User/User";
import { ModalWrapper } from "../Modal/ModalWrapper";
import { Auntificate } from "../Modal/Auntificate/Auntificate";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Close } from "../../ui/Close/Close";

export const LoggedInButton = () => {
  const [mainClass, setMainClass] = useState("close");
  const [pathName, setPathName] = useState<string>("");

  const router = useRouter();
  const path = router.asPath;

  useEffect(() => {
    setPathName(path);
  }, [path]);

  const loggedInState = useTypedSelector((state) => state.auntificate.loggedIn);
  const modal = useTypedSelector((state) => state.modal);
  const { openModalAction } = useActions();

  const chooseMainClass = (value: string) => {
    setMainClass(value);
  };

  return (
    <>
      <div
        className={style.loggedInButton}
        onMouseMove={() => loggedInState && chooseMainClass("open")}
        onMouseOut={() => loggedInState && chooseMainClass("close")}
        onClick={() => {
          !loggedInState && openModalAction("auntificate");
        }}
      >
        <div className={style.loggedInButton__wrapper}>
          <Link href={loggedInState ? "/PrivateOffice" : pathName}>
            <a className={style.link}>
              <Button
                title={loggedInState ? "Александр" : "Войти"}
                type="button"
                fontWeight="700"
                padding="0 10px 0 0"
                maxLength={14}
                fontSize="18px"
              />
              {/* <Menu>
                <MenuItem>1</MenuItem>
                <SubMenu title="2">
                  <MenuItem>2-1</MenuItem>
                </SubMenu>
              </Menu> */}
              {loggedInState ? <Close /> : <User />}
            </a>
          </Link>
        </div>
      </div>

      { modal.typeModal === "auntificate" && <ModalWrapper
        padding="32px 54px"
        borderRadius="20px"
        top="100px"
        left="74%"
        minWidth="478px"
        modalIsOpen={modal.modalOpen}
        backgroundColor="transparent"
        transform="translate(-50%, 0%)"
        onRequestClose
        close
      >
        <Auntificate />
      </ModalWrapper>}
    </>
  );
};
