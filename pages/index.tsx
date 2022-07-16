/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useActions } from "../hooks/useActions";
import { Element } from "react-scroll";
import { useTypedSelector } from "../hooks/useTypedSelector";

//components
import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";
import BaseWrapperMargin from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
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

const Home: NextPage<HomeProps> = ({ shops, catalog }) => {
  //actions
  const { addShopsListAction } = useActions();
  const { fetchCatalogByIdShop } = useActions();

  //state
  const [product, setProduct] = useState<productState>({});

  //typeSelector
  const { currentShop } = useTypedSelector((state) => state.currentShop);
  const { productList, load, error } = useTypedSelector(
    (state) => state.productList
  );
  const productJSON = Object.entries(product);

  //class
  const productClass = new ProductClass();

  //value
  const { products, categories } = catalog?.data;
  const productsForShopData = productList?.data;
  const categorySort = productClass.category(categories);

  //state
  const [shopPage, setShopPage] = useState(categories[0]?.id);

  const handlePage = (value: string) => {
    setShopPage(value);
  };

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
      ? productClass.sorted({ products: productsForShop, categorySort })
      : productClass.sorted({ products, categorySort });

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
        categories={categories}
        header
        navigation
        slider
        footer
      >
        <BaseWrapperMargin flex="auto">
          {!load ? (
            <>
              {productJSON?.map((item, ind) => {
                const name =
                  item[1].name[0].toUpperCase() +
                  item[1].name.slice(1).toLowerCase();
                return (
                  <Element name={item[1].name} className="other" key={item[0]}>
                    <Catalog
                      title={name}
                      product={item[1].products}
                      filters={item[1].filters}
                      
                    />
                  </Element>
                );
              })}
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
