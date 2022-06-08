import React from "react";
import { NextPage } from "next";

//assests
import { baseBackground } from "../assests/variable/variable";

//types
import { styleRouterState } from "../types/router";
import { AboutCompanyProps } from "../types/pages";

//api
import { ShopsApi } from "../api/shopsApi";

//components
import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";
import { AdditionalPageWrapper } from "../components/wrappers/AdditionPageWrapper/AdditionPageWrapper";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { AboutUs } from "../components/AboutUs/AboutUs";

const AboutCompany:NextPage<AboutCompanyProps> = ({shops}) => {
  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <HeaderWrapper styles={styleHome} header footer>
      <BaseWrapperMargin flex="auto">
        <AdditionalPageWrapper title="О компании" mainPadding="26px 0 0 0">
          <AboutUs />
        </AdditionalPageWrapper>
      </BaseWrapperMargin>
    </HeaderWrapper>
  );
};

export async function getStaticProps() {
  const shopsApi = new ShopsApi();
  const res = await shopsApi.getShopsList();
  const shops = await res.json();
  return {
    props: { shops },
  };
}

export default AboutCompany;
