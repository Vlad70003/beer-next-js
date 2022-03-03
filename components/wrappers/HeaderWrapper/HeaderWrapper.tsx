import React, { useEffect, useState } from "react";
import Head from "next/head";
import style from "./HeaderWrapper.module.scss";

import { Header } from "../../Header/Header";
import { BaseWrapperMargin } from "../../wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Navigation } from "../../../components/Navigation/Navigation";
import { SlickSlider } from "../../../components/Slick-slider/SlickSlider";
import { Footer } from "../../../components/Footer/Footer";

import { ModalWrapper } from "../../../components/Modal/ModalWrapper";
import { WelcomeModal } from "../../../components/Modal/WelcomeModal/WelcomeModal";

import { loggedFirstTime } from "../../../script/modal/loggedFirstTime";

interface HeaderWrapperState {
  children: React.ReactNode;
  styles: {};
  header?: boolean;
  navigation?: boolean;
  footer?: boolean;
  slider?: boolean;
}

export function HeaderWrapper({
  children,
  styles,
  header,
  navigation,
  slider,
  footer,
}: HeaderWrapperState) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    loggedFirstTime.checkedFirstTime()
      ? loggedFirstTime.changeState(setModalIsOpen, true)
      : loggedFirstTime.changeState(setModalIsOpen, false);
  }, []);

  return (
    <>
      <Head>
        <meta name="keywords" content="Пивас и квас" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className={style.wrapper} style={styles}>
        {header && (
          <>
            <BaseWrapperMargin flex="0 0 auto">
              <Header />
            </BaseWrapperMargin>
          </>
        )}
        {navigation && (
          <>
            <BaseWrapperMargin flex="auto">
              <Navigation />
            </BaseWrapperMargin>
          </>
        )}
        {slider && (
          <>
            <SlickSlider />
          </>
        )}
        <>{children}</>
        {footer && (
          <>
            <Footer />
          </>
        )}

        <ModalWrapper
          padding="48px"
          borderRadius="20px"
          top="30%"
          maxWidth="460px"
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        >
          <WelcomeModal />
        </ModalWrapper>
      </div>
    </>
  );
}
