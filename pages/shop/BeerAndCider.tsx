import { HeaderWrapper } from "../../components/wrappers/HeaderWrapper/HeaderWrapper";
import { BaseWrapperMargin } from "../../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Catalog } from "../../components/Catalog/Catalog";
import { baseBackground } from "../../assests/variable/variable";

import { styleRouterState } from "../../types/router";

import { BeerAndCider } from "../../data/sortButton";

const BeerAndCiderPage = () => {
  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <HeaderWrapper styles={styleHome} header navigation slider footer>
      <BaseWrapperMargin flex="auto">
        <Catalog
          title="Пиво и сидры"
          sortButton={BeerAndCider}
          product="beer"
        />
      </BaseWrapperMargin>
    </HeaderWrapper>
  );
};

export default BeerAndCiderPage;
