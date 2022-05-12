import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import style from "./LoggedInButton.module.scss";

import { Button } from "../../ui/Button/Button";
import { User } from "../../ui/User/User";
import { ModalStaticWrapper } from "../ModalStatic/ModalStaticWrapper";
import { Auntificate } from "../Modal/Auntificate/Auntificate";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { UserMenu } from "../UserMenu/UserMenu";

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
          <div className={style.link}>
            <div className={style.loggedInButton__button}>
              <Button
                title={loggedInState ? "Александр" : "Войти"}
                type="button"
                fontWeight="700"
                padding="0 10px 0 0"
                maxLength={14}
                fontSize="18px"
              />
            </div>

            <User />
          </div>
          <div
            className={
              mainClass === "open" ? `${style.open}` : `${style.close}`
            }
          >
            <UserMenu chooseMainClass={chooseMainClass} />
          </div>
        </div>
      </div>

      {modal.typeModal === "auntificate" && (
        <ModalStaticWrapper top="100px" right="70px">
          <Auntificate />
        </ModalStaticWrapper>
      )}
    </>
  );
};
