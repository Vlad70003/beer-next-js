import React from "react";
import style from "../styles/AboutCompany.module.scss";

import { baseBackground } from "../assests/variable/variable";
import { styleRouterState } from "../types/router";

import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";
import { AdditionalPageWrapper } from "../components/wrappers/AdditionPageWrapper/AdditionPageWrapper";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { AboutUs } from "../components/AboutUs/AboutUs";

const AboutCompany = () => {
  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <HeaderWrapper styles={styleHome} header footer>
      <BaseWrapperMargin flex="auto">
        <AdditionalPageWrapper title="Контакты" mainPadding="26px 0 0 0">
          <AboutUs />
        </AdditionalPageWrapper>
      </BaseWrapperMargin>
    </HeaderWrapper>
  );
};

export default AboutCompany;
