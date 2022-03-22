import { useState } from "react";
import style from "../styles/Contacts.module.scss";

import { Contact } from "../components/Contacts/Contact";
import { AdditionalPageWrapper } from "../components/wrappers/AdditionPageWrapper/AdditionPageWrapper";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";

import { styleRouterState } from "../types/router";
import { baseBackground } from "../assests/variable/variable";
import { ModalWrapper } from "../components/Modal/ModalWrapper";
import { FeedBack } from "../components/Modal/FeedBack/FeedBack";
import { ChangeChopModal } from "../components/Modal/ChangeChopModal/ChangeChopModal";

const Contacts = () => {
  const [modalIsOpenFeedBack, setModalIsOpenFeedBack] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <>
      <HeaderWrapper styles={styleHome} header footer>
        <BaseWrapperMargin flex="auto">
          <AdditionalPageWrapper title="Контакты" mainPadding="26px 0 0 0">
            <main className={style.contscts__main}>
              <Contact
                address="г. Северодвинск, ул. Гагарина, д. 15 "
                phone="+7-900-000-00-00"
                working_hours="пн-пт с 10:00 до 19:00"
                setModalIsOpenFeedBack={setModalIsOpenFeedBack}
                modalIsOpenFeedBack={modalIsOpenFeedBack}
                setModalIsOpen={setModalIsOpen}
                modalIsOpen={modalIsOpen}
              />
              <div className="contscts__right-side"></div>
            </main>
          </AdditionalPageWrapper>
        </BaseWrapperMargin>
      </HeaderWrapper>

      <ModalWrapper
        padding="32px 54px"
        borderRadius="20px"
        top="50%"
        left="50%"
        minWidth="472px"
        modalIsOpen={modalIsOpenFeedBack}
        setModalIsOpen={setModalIsOpenFeedBack}
        backgroundColor="#0000004D"
        transform="translate(-50%, -50%)"
        onRequestClose
        close
      >
        < FeedBack />
      </ModalWrapper>

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
        <ChangeChopModal  />
      </ModalWrapper>
    </>
  );
};
export default Contacts;
