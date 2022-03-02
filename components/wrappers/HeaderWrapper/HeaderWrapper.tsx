import React from "react";
import Head from "next/head";
import style from "./HeaderWrapper.module.scss";

import { Header } from "../../Header/Header";
import { BaseWrapperMargin } from "../../wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Navigation } from "../../../components/Navigation/Navigation";
import { SlickSlider } from "../../../components/Slick-slider/SlickSlider";
import { Footer } from "../../../components/Footer/Footer";

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
  return (
    <>
    <Head>
      <meta name="keywords" content="Пивас и квас" />
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
      </div>
    </>
  );
}
