import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useActions } from "../hooks/useActions";
import { Element } from "react-scroll";

//components
import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Catalog } from "../components/Catalog/Catalog";
import { baseBackground } from "../assests/variable/variable";

//api
import { ShopsApi } from "../api/shopsApi";

//types
import { styleRouterState } from "../types/router";
import { HomeProps } from "../types/pages";

import {
  BeerAndCider,
  Beverages,
  Chease,
  Fish,
  Meat,
  Other,
  Snacks,
} from "../data/sortButton";

import { productExample } from "../components/Product/productExample";

interface productState {
  beer?: any;
  beverages?: any;
  fish?: any;
  meat?: any;
  chease?: any;
  snack?: any;
  other?: any;
  stock?: any;
  bottled?: any;
}

const Home: NextPage<HomeProps> = ({ shops }) => {
  const [shopPage, setShopPage] = useState("beer");
  const [product, setProduct] = useState<productState>({});
  const {addShopsListAction} = useActions();

  useEffect(() => {
    shops && addShopsListAction(shops)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shops])

  useEffect(() => {
    const sortProduct: productState = {
      beer: [],
      beverages: [],
      bottled: [],
      fish: [],
      meat: [],
      chease: [],
      snack: [],
      other: [],
      stock: [],
    };

    productExample.forEach((item) => {
      item.stock && sortProduct.stock.push(item);

      if (item.kind === "beer") {
        sortProduct.beer.push(item);
      } else if (item.kind === "beverages") {
        sortProduct.beverages.push(item);
      } else if (item.kind === "bottled") {
        sortProduct.bottled.push(item);
      } else if (item.kind === "fish") {
        sortProduct.fish.push(item);
      } else if (item.kind === "meat") {
        sortProduct.meat.push(item);
      } else if (item.kind === "chease") {
        sortProduct.chease.push(item);
      } else if (item.kind === "snack") {
        sortProduct.snack.push(item);
      } else if (item.kind === "other") {
        sortProduct.other.push(item);
      }
    });

    setProduct(sortProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productExample]);

  const handlePage = (value: string) => {
    setShopPage(value);
  };

  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
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
              product={product?.beer}
            />
          </Element>
          <Element name="beverages" className="beverages">
            <Catalog
              title="Напитки"
              sortButton={Beverages}
              product={product?.beverages}
            />
          </Element>
          <Element name="bottled" className="bottled">
            <Catalog
              title="Бутылочное"
              sortButton={BeerAndCider}
              product={product?.bottled}
            />
          </Element>
          <Element name="chease" className="chease">
            <Catalog
              title="Сыры"
              sortButton={Chease}
              product={product?.chease}
            />
          </Element>
          <Element name="fishes" className="fishes">
            <Catalog title="Рыба" sortButton={Fish} product={product?.fish} />
          </Element>
          <Element name="meat" className="meat">
            <Catalog title="Мясо" sortButton={Meat} product={product?.meat} />
          </Element>
          <Element name="snacks" className="snacks">
            <Catalog
              title="Снеки"
              sortButton={Snacks}
              product={product?.snack}
            />
          </Element>
          <Element name="other" className="other">
            <Catalog
              title="Прочее"
              sortButton={Other}
              product={product?.other}
            />
          </Element>
          <Element name="stock" className="stock">
            <Catalog
              title="Акции"
              sortButton={Other}
              product={product?.stock}
            />
          </Element>
        </BaseWrapperMargin>
      </HeaderWrapper>
    </>
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

export default Home;
