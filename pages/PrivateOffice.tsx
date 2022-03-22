import { useState } from "react";
import style from "../styles/PrivateOffice.module.scss";

import { AdditionalPageWrapper } from "../components/wrappers/AdditionPageWrapper/AdditionPageWrapper";
import { Subtitle } from "../components/Subtitle/Subtitle";
import { Card } from "../components/Card/Card";
import { Info } from "../ui/Info/Info";
import { PrivateOfficeForm } from "../components/PrivateOfficeForm/PrivateOfficeForm";
import { ShopChanger } from "../components/ShopChanger/ShopChanger";
import { CardChanger } from "../components/CardChanger/CardChanger";
import { Button } from "../ui/Button/Button";
import { ProductListFromPrivateOffice } from "../components/ProductListFromPrivateOffice/ProductListFromPrivateOffice";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";
import { baseBackground } from "../assests/variable/variable";

import { historyOrderInSite, historyOrderInShop } from "../data/forPrivateOfficeData";
import { styleRouterState } from "../types/router";


const PrivateOffice = () => {
  const [shoppingMenuPage, setShoppingMenuPage] = useState("onTheSite");

  const handleShopingPage = (page: string) => {
    setShoppingMenuPage(page);
  };

    const styleHome: styleRouterState = {
      width: "100%",
      minHeight: "100vh",
      background: baseBackground,
    };

  return (
    <HeaderWrapper styles={styleHome} header footer>
        <BaseWrapperMargin flex="auto">
      {" "}
      <AdditionalPageWrapper title="Личный кабинет" mainPadding="18px 0 0px 0" padding="0 0 16px 0" bonus price>
        <main className={style.privateOffice}>
          <section className={style.privateOffice__leftSide}>
            <div className={style.privateOffice__wrapper}>
              <Subtitle text="Бонусная система" />
              <div className={style.privateOffice__cardWrapper}>
                <Card />
                <Info
                  left="310px"
                  positionWindow="right"
                  text="Электронная бонусная карта - позволяет накапливать и списывать бонусы за совершенные Вами покупки на сайте и в магазинах сети."
                />
              </div>
              <div className={style.privateOffice__posttitle}>
                Электронная бонусная карта появится автоматически при заполнении
                полей “Пол” и “Дата рождения”.
              </div>
            </div>
            <div className={style.privateOffice__wrapper}>
              <Subtitle text="Личные данные" />
              <PrivateOfficeForm />
            </div>
            <div className={style.privateOffice__wrapper}>
              <Subtitle text="Мой магазин" padding="0 0 16px 0" />
              <ShopChanger />
            </div>
            <div className={`${style.privateOffice__wrapper} ${style.privateOffice__wrapper__cardChanger}`} >
              <Subtitle text="Карты оплаты" padding="0 0 16px 0" />
              <CardChanger />
            </div>
            <div className={`${style.privateOffice__wrapper} ${style.privateOffice__wrapper__button}`}>
              <Button
                title="Выйти"
                color="#3D84B7"
                fontWeight="700"
                padding="0"
              />
            </div>
          </section>
          <section className={style.privateOffice__rightSide}>
            <Subtitle text="Мои покупки" padding="0 0 24px 0" />
            <div className={style.privateOffice__rightSide__buttonWrapper}>
              <Button
                title="На сайте"
                onClick={() => handleShopingPage("onTheSite")}
                borderBottom={
                  shoppingMenuPage === "onTheSite"
                    ? "4px solid #3D69B7"
                    : "4px solid transparent"
                }
                color={shoppingMenuPage === "onTheSite" ? "#3D69B7" : "#757575"}
                fontWeight="700"
                margin="0 32px 0 0"
              />
              <Button
                title="В магазине"
                onClick={() => handleShopingPage("inTheShop")}
                borderBottom={
                  shoppingMenuPage === "inTheShop"
                    ? "4px solid #3D69B7"
                    : "4px solid transparent"
                }
                color={shoppingMenuPage === "inTheShop" ? "#3D69B7" : "#757575"}
                fontWeight="700"
              />
            </div>
            <div className={style.privateOffice__rightSide__contentWrapper}>
              {shoppingMenuPage === "onTheSite" && (
                <ProductListFromPrivateOffice
                  productList={historyOrderInSite}
                />
              )}
              {shoppingMenuPage === "inTheShop" && (
                <ProductListFromPrivateOffice
                  productList={historyOrderInShop}
                />
              )}
            </div>
          </section>
        </main>
      </AdditionalPageWrapper>
    </BaseWrapperMargin>
    </HeaderWrapper>
    
  );
};

export default PrivateOffice;