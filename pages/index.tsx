/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useActions } from "../hooks/useActions";
import { Element } from "react-scroll";
import { useTypedSelector } from "../hooks/useTypedSelector";

//components
import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { Catalog } from "../components/Catalog/Catalog";
import { baseBackground } from "../assests/variable/variable";

//api
import { ShopsApi } from "../api/shopsApi";
import { CatalogApi } from "../api/catalogApi";

//types
import { styleRouterState } from "../types/router";
import { HomeProps } from "../types/pages";
import { productState } from "../types/product";

//script
import { ProductClass } from "../script/product/product";

//sort
import {
  BeerAndCider,
  Beverages,
  Chease,
  Fish,
  Meat,
  Other,
  Snacks,
} from "../data/sortButton";

const Home: NextPage<HomeProps> = ({ shops, catalog }) => {

  //actions
  const { addShopsListAction } = useActions();
  const { fetchCatalogByIdShop } = useActions();

  //state
  const [shopPage, setShopPage] = useState("beer");
  const [product, setProduct] = useState<productState>({});

  //typeSelector
  const { currentShop } = useTypedSelector((state) => state.currentShop);
  const { productList, load, error } = useTypedSelector(
    (state) => state.productList
  );

  //class
  const productClass = new ProductClass();

  const handlePage = (value: string) => {
    setShopPage(value);
  };

  //value
  const { products, categories } = catalog?.data;
  const productsForShopData = productList?.data;

  //useEffect
  useEffect(() => {
    shops && addShopsListAction(shops);
  }, [shops]);

  useEffect(() => {
    currentShop.id && fetchCatalogByIdShop(currentShop.id);
  }, [currentShop]);

  useEffect(() => {
    const productsForShop = productsForShopData?.products;

    const sortProduct = productsForShop
      ? productClass.sorted({ products: productsForShop })
      : productClass.sorted({ products });

    setProduct(sortProduct);
  }, [catalog]);

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
          {!load ? (
            <>
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
                <Catalog
                  title="Рыба"
                  sortButton={Fish}
                  product={product?.fish}
                />
              </Element>
              <Element name="meat" className="meat">
                <Catalog
                  title="Мясо"
                  sortButton={Meat}
                  product={product?.meat}
                />
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
            </>
          ) : (
            "Загрузка..."
          )}
        </BaseWrapperMargin>
      </HeaderWrapper>
    </>
  );
};

export async function getStaticProps() {
  const shopsApi = new ShopsApi();
  const catalogApi = new CatalogApi();

  const shopsList = await shopsApi.getShopsList();
  const catalogList = await catalogApi.getCatalogList();
  const shops = await shopsList.json();
  const catalog = await catalogList.json();

  return {
    props: { shops, catalog },
  };
}

export default Home;
