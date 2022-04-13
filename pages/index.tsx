import { useState } from "react";
import type { NextPage } from "next";
import { Element } from "react-scroll";

import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Catalog } from "../components/Catalog/Catalog";
import { baseBackground } from "../assests/variable/variable";

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
          <Element name="beer" className="beer">
            <Catalog
              title="Пиво и сидры"
              sortButton={BeerAndCider}
              product="beer"
            />
          </Element>
          <Element name="beverages" className="beverages">
            <Catalog
              title="Напитки"
              sortButton={Beverages}
              product="beverages"
            />
          </Element>
          <Element name="bottled" className="bottled">
            <Catalog
              title="Бутылочное"
              sortButton={BeerAndCider}
              product="bottled"
            />
          </Element>
          <Element name="chease" className="chease">
            <Catalog title="Сыры" sortButton={Chease} product="chease" />
          </Element>
          <Element name="fishes" className="fishes">
            <Catalog title="Рыбы" sortButton={Fish} product="fishes" />
          </Element>
          <Element name="meat" className="meat">
            <Catalog title="Мясо" sortButton={Meat} product="meat" />
          </Element>
          <Element name="snacks" className="snacks">
            <Catalog title="Снеки" sortButton={Snacks} product="snacks" />
          </Element>
          <Element name="other" className="other">
            <Catalog title="Прочее" sortButton={Other} product="other" />
          </Element>
          
        </BaseWrapperMargin>
      </HeaderWrapper>
    </>
  );
};

export default Home;
