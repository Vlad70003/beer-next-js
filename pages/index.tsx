import { useState } from "react";
import type { NextPage } from "next";

import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Catalog } from "../components/Catalog/Catalog";
import { baseBackground } from "../assests/variable/variable";
import { useTypedSelector } from "../hooks/useTypedSelector";

import { styleRouterState } from "../types/router";

import {
  BeerAndCider,
  Beverages,
  Chease,
  Fish,
  Meat,
  Other,
  Snacks,
} from "../data/sortButton";

const Home: NextPage = () => {
  const [shopPage, setShopPage] = useState("beer");

  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  const handlePage = (value: string) => {
    setShopPage(value);
  };

  return (
    <>
      <HeaderWrapper
        styles={styleHome}
        handlePage={handlePage}
        shopPage={shopPage}
        header
        navigation
        slider
        footer
      >
        <BaseWrapperMargin flex="auto">
          {shopPage === "beer" && (
            <Catalog
              title="Пиво и сидры"
              sortButton={BeerAndCider}
              product="beer"
            />
          )}
          {shopPage === "beverages" && (
            <Catalog
              title="Напитки"
              sortButton={Beverages}
              product="beverages"
            />
          )}
          {shopPage === "bottled" && (
            <Catalog
              title="Бутылочное"
              sortButton={BeerAndCider}
              product="bottled"
            />
          )}
          {shopPage === "chease" && (
            <Catalog title="Сыры" sortButton={Chease} product="chease" />
          )}
          {shopPage === "fishes" && (
            <Catalog title="Рыбы" sortButton={Fish} product="fishes" />
          )}
          {shopPage === "meat" && (
            <Catalog title="Мясо" sortButton={Meat} product="meat" />
          )}
          {shopPage === "other" && (
            <Catalog title="Прочее" sortButton={Other} product="other" />
          )}
          {shopPage === "snacks" && (
            <Catalog title="Снеки" sortButton={Snacks} product="snacks" />
          )}
        </BaseWrapperMargin>
      </HeaderWrapper>
    </>
  );
};

export default Home;
