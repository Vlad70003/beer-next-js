/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { useActions } from "../hooks/useActions";
import { Element } from "react-scroll";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Error from "next/error";

import { scroller } from "react-scroll";

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
import { addToOrderFirstProductAfterChangeShop } from "../script/order/addToOrderFirstProductAfterChangeShop";

const Home: NextPage<HomeProps> = ({ shops, catalog, errorCode, message }) => {
  //actions
  const { addShopsListAction } = useActions();
  const { fetchCatalogByIdShop } = useActions();
  const { addProductListAction } = useActions();
  const { addOrderAction } = useActions();

  //state
  const [product, setProduct] = useState<productState>({});
  const [productAfterChangeShop, setProductAfterChangeShop] = useState<{
    product: { id: any };
    step: number;
    rightPet: {} | null;
  } | null>(null);
  const [activeScrollPage, setActiveScrollPage] = useState(null);

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
  const petsBottle = productClass.getPetBottle({ products });

  useEffect(() => {
    addProductListAction(catalog);
  }, [catalog]);

  useEffect(() => {
    if (productAfterChangeShop) {
      addToOrderFirstProductAfterChangeShop({
        productsForShopData,
        productAfterChangeShop,
        addOrderAction,
        setProductAfterChangeShop,
      });
    }
  }, [productsForShopData]);

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

  const t = () => {
    productAfterChangeShop?.product?.id &&
      scroller.scrollTo(productAfterChangeShop?.product?.id, {
        duration: 0,
        delay: 0,
        smooth: true,
        offset: -120,
      });
  };

  useEffect(() => {
    !load && t();
  }, [load]);

  if (errorCode) {
    <Error statusCode={errorCode} title={message} />;
  }

  return (
    <>
      <Head>
        <meta name="keywords" content="Пивас и квас" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      </Head>

      <HeaderWrapper
        styles={styleHome}
        activeScrollPage={activeScrollPage}
        setActiveScrollPage={setActiveScrollPage}
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
                  <Element name={item[1].name} key={item[0]}>
                    <Catalog
                      title={name}
                      product={item[1].products}
                      filters={item[1].filters}
                      petsBottle={petsBottle}
                      setActiveScrollPage={setActiveScrollPage}
                      setProductAfterChangeShop={setProductAfterChangeShop}
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

export const getServerSideProps = async () => {
  try {
    const shopsApi = new ShopsApi();
    const catalogApi = new CatalogApi();
    const shopsList = await shopsApi.getShopsList();
    const catalogList = await catalogApi.getCatalogList();
    const shops = await shopsList.json();
    const catalog = await catalogList.json();

    if (!shops || !catalog) {
      return { notFound: true };
    }

    return {
      props: { shops, catalog },
    };
  } catch {
    return { props: { shops: null, catalog: null } };
  }
};

export default Home;
