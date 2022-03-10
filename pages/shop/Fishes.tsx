import { HeaderWrapper } from "../../components/wrappers/HeaderWrapper/HeaderWrapper";
import { BaseWrapperMargin } from "../../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Catalog } from "../../components/Catalog/Catalog";
import { baseBackground } from "../../assests/variable/variable";

import { styleRouterState } from "../../types/router";

import { Fish } from "../../data/sortButton";

const FishesPage = () => {
  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <HeaderWrapper styles={styleHome} header navigation slider footer>
      <BaseWrapperMargin flex="auto">
        <Catalog title="Рыбы" sortButton={Fish} product="fishes" />
      </BaseWrapperMargin>
    </HeaderWrapper>
  );
};

export default FishesPage;