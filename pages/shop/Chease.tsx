import { HeaderWrapper } from "../../components/wrappers/HeaderWrapper/HeaderWrapper";
import { BaseWrapperMargin } from "../../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Catalog } from "../../components/Catalog/Catalog";
import { baseBackground } from "../../assests/variable/variable";

import { styleRouterState } from "../../types/router";

import { Chease } from "../../data/sortButton";

const CheasePage = () => {
  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <HeaderWrapper styles={styleHome} header navigation slider footer>
      <BaseWrapperMargin flex="auto">
      <Catalog title="Сыры" sortButton={Chease} product="chease" />
      </BaseWrapperMargin>
    </HeaderWrapper>
  );
};

export default CheasePage;