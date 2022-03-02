import { HeaderWrapper } from "../../components/wrappers/HeaderWrapper/HeaderWrapper";
import { BaseWrapperMargin } from "../../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Catalog } from "../../components/Catalog/Catalog";
import { baseBackground } from "../../assests/variable/variable";

import { styleRouterState } from "../../types/router";

import { Snacks } from "../../data/sortButton";

const SnacksPage = () => {
  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <HeaderWrapper styles={styleHome} header navigation slider footer>
      <BaseWrapperMargin flex="auto">
        <Catalog title="Снеки" sortButton={Snacks} product="snacks" />
      </BaseWrapperMargin>
    </HeaderWrapper>
  );
};

export default SnacksPage;
