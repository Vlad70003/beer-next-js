import React, { useEffect, useState } from "react";
import Head from "next/head";
import style from "./HeaderWrapper.module.scss";

import { Header } from "../../Header/Header";
import { BaseWrapperMargin } from "../../wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Navigation } from "../../../components/Navigation/Navigation";
import { SlickSlider } from "../../../components/Slick-slider-bunner/SlickSlider";
import { Footer } from "../../../components/Footer/Footer";
import { OrderingPrew } from "../../Modal/OrderingPrew/OrderingPrew";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

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
  shopPage?: string;
  handlePage?: any;
}

export function HeaderWrapper({
  children,
  shopPage,
  handlePage,
  styles,
  header,
  navigation,
  slider,
  footer,
}: HeaderWrapperState) {
  const modal = useTypedSelector((state) => state.modal);
  const { openModalAction } = useActions();
  const { closeModalAction } = useActions();

  useEffect(() => {
    loggedFirstTime.checkedFirstTime()
      ? openModalAction("welcome-modal")
      : closeModalAction();
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
          <BaseWrapperMargin flex="0 0 auto">
            <Header />
          </BaseWrapperMargin>
        )}
        {navigation && (
          <div className={style.sticky}>
            <BaseWrapperMargin flex="auto">
              <Navigation handlePage={handlePage} shopPage={shopPage} />
            </BaseWrapperMargin>
          </div>
        )}
        {slider && <SlickSlider />}
        <>{children}</>
        {footer && <Footer />}

        {modal.typeModal === "welcome-modal" && (
          <ModalWrapper
            padding="48px"
            borderRadius="20px"
            top="30%"
            left="50%"
            maxWidth="460px"
            modalIsOpen={modal.modalOpen}
            backgroundColor="#0000004D"
          >
            <WelcomeModal />
          </ModalWrapper>
        )}

        <OrderingPrew />
      </div>
    </>
  );
}
