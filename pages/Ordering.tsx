import React, { useState } from "react";
import style from "../styles/Ordering.module.scss";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";

//api
import { ShopsApi } from "../api/shopsApi";

//components
import { AdditionalPageWrapper } from "../components/wrappers/AdditionPageWrapper/AdditionPageWrapper";
import { Subtitle } from "../components/Subtitle/Subtitle";
import { ReCheckBox } from "../ui/Re-checkbox/ReCheckBox";
import { BorderWrapper } from "../components/wrappers/borderWrapper/BorderWrapper";
import { Input } from "../ui/Input/Input";
import TimeChange from "../ui/TimeChange/TimeChange";
import { Button } from "../ui/Button/Button";
import OrderWindow from "../components/OrderWindow/OrderWindow";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";
import { PurchaseSuccess } from "../components/Modal/PurchaseSuccess/PurchaseSuccess";
import { TimeChanger } from "../components/Modal/TimeChanger/TimeChanger";
import { ModalWrapper } from "../components/Modal/ModalWrapper";

//hooks
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

//types
import { styleRouterState } from "../types/router";
import { OrderingProps } from "../types/pages";

//assests
import masterCard from "../assests/img/masterCard.svg";
import visa from "../assests/img/visa.svg";
import mir from "../assests/img/mir.svg";
import { baseBackground } from "../assests/variable/variable";

const Ordering:NextPage<OrderingProps> = ({shops}) => {
  const [timeOrder, setTimeOrder] = useState("Побыстрее");
  const [timeChangeIsOpen, setTimeChangeIsOpen] = useState(false);

  const modal = useTypedSelector((state) => state.modal);
  const { openModalAction } = useActions();

  const handleOpen = () => {
    setTimeChangeIsOpen(!timeChangeIsOpen);
  };

  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <>
      <HeaderWrapper styles={styleHome} header footer>
        <BaseWrapperMargin flex="auto">
          <AdditionalPageWrapper
            title="Оформление заказа"
            bonus
            mainPadding="26px 0 0 0"
          >
            <main className={style.ordering}>
              <section className={style.ordering__leftSide}>
                <Subtitle
                  text="Детали заказа"
                  fontSize="20px"
                  padding="0 0 8px 0"
                />
                <h5 className={style.ordering__detailsPosttitle}>
                  Самовывоз из магазина по адресу: г. Северодвинск, ул.
                  Железнодорожная, 50/1
                </h5>
                <div className={style.ordering__checkboxWrapper}>
                  <label className={style.ordering__label}>
                    <ReCheckBox padding="0 8px 0 0" />
                    Использовать этот магазин по умолчанию при сделующих заказах
                  </label>
                </div>
                <div
                  className={`${style.ordering__flexWrapper} ${style.ordering__padding8} ${style.ordering__spaceBetween}`}
                >
                  <label
                    htmlFor=""
                    className={`${style.ordering__label} ${style.ordering__marginRight24}`}
                  >
                    <pre>Имя получателя:     </pre>
                    <BorderWrapper
                      border="1px solid #BFBFBF"
                      borderRadius="92px"
                      background="white"
                      padding="8px 24px"
                      maxWidth="150px"
                      position="relative"
                      minWidth="170px"
                    >
                      <Input width="100%" placeholder="Ведите имя" />
                    </BorderWrapper>
                  </label>
                  <label
                    htmlFor=""
                    className={style.ordering__label}
                    onClick={() => openModalAction("time-picker")}
                  >
                    <pre>Время:     </pre>
                    <BorderWrapper
                      border="1px solid #BFBFBF"
                      borderRadius="92px"
                      background="white"
                      padding="8px 24px"
                      position="relative"
                      display="flex"
                    >
                      <TimeChange
                        margin="0 10px 0 0"
                        setTimeOrder={setTimeOrder}
                        timeChangeIsOpen={timeChangeIsOpen}
                        handleOpen={handleOpen}
                      />
                      <div>{timeOrder}</div>
                    </BorderWrapper>
                  </label>
                </div>
                <div
                  className={`${style.ordering__flexWrapper} ${style.ordering__padding8}`}
                >
                  <label className={style.ordering__label}>
                    <ReCheckBox padding="0 8px 0 0" />
                    <pre>Использовать бонусы:     </pre>
                  </label>
                  <BorderWrapper
                    border="1px solid #BFBFBF"
                    borderRadius="92px"
                    background="white"
                    padding="8px 24px"
                    position="relative"
                    minWidth="70px"
                    maxWidth="100px"
                  >
                    <Input width="100%" placeholder="Бонусы" type="number" />
                  </BorderWrapper>
                </div>
                <div
                  className={`${style.ordering__flexWrapper} ${style.ordering__padding24}`}
                >
                  <label className={style.ordering__label}>
                    <pre>Комментарий к заказу:     </pre>
                  </label>
                  <BorderWrapper
                    border="1px solid #BFBFBF"
                    borderRadius="92px"
                    background="white"
                    padding="8px 24px"
                    position="relative"
                    width="inherit"
                  >
                    <Input width="inherit" placeholder="Введите комментарий" />
                  </BorderWrapper>
                </div>
                <Subtitle text="Оплата" fontSize="18px" padding="0 0 8px 0" />
                <h5 className={style.ordering__payPosttitle}>
                  Вводя данные карты, вы подтверждаете свое согласие, что
                  денежные средства с вашей карты будут зарезервированы до
                  момента подтверждения оплаты в точке выдачи товара.
                  Окончательный расчет и фактическое списание денежных средств с
                  вашей карты будут произведены при личном посещении вами
                  торговой точки и подтверждения возраста. Вы соглашаетесь с
                  тем, что компания может взимать плату за отказ от бронирования
                  в сумме понесенных расходов, если такой отказ произошел после
                  выполнения заказа, и Компания понесла расходы. Размер такой
                  платы рассчитывается аналогично стоимости совершенного заказа.
                </h5>
                <div
                  className={`${style.ordering__flexWrapper} ${style.ordering__padding24}`}
                >
                  <label className={style.ordering__label}>
                    <ReCheckBox padding="0 8px 0 0" />
                    Принимаю
                  </label>
                </div>
                <div
                  className={`${style.ordering__flexWrapper} ${style.ordering__padding8}`}
                >
                  <label className={style.ordering__label}>
                    <Input type="radio" margin="0 8px 0 0" disabled checked />
                    Картой на сайте
                  </label>
                </div>
                <div className={style.ordering__cardInfWrapper}>
                  <div
                    className={`${style.ordering__flexWrapper} ${style.ordering__width100} ${style.ordering__padding8}`}
                  >
                    <BorderWrapper
                      border="1px solid #BFBFBF"
                      borderRadius="92px"
                      background="white"
                      padding="8px 24px"
                      position="relative"
                      width="100%"
                      flex="1"
                    >
                      <Input
                        type="number"
                        width="inherit"
                        placeholder="Номер карты"
                      />
                    </BorderWrapper>
                    <div className={style.ordering__imageWrapper}>
                      <Image
                        src={masterCard}
                        alt={"masterCard"}
                        className={
                          style.ordering__cardInfWrapper__imageWrapper__image
                        }
                      />
                      <Image
                        src={visa}
                        alt={"visa"}
                        className={
                          style.ordering__cardInfWrapper__imageWrapper__image
                        }
                      />
                      <Image
                        src={mir}
                        alt={"mir"}
                        className={
                          style.ordering__cardInfWrapper__imageWrapper__image
                        }
                      />
                    </div>
                  </div>
                  <div
                    className={`${style.ordering__flexWrapper} ${style.ordering__width50} ${style.ordering__padding8}`}
                  >
                    <BorderWrapper
                      border="1px solid #BFBFBF"
                      borderRadius="92px"
                      background="white"
                      padding="8px 24px"
                      position="relative"
                      width="60%"
                      margin="0 24px 0 0"
                    >
                      <Input width="100%" placeholder="Введите срок" />
                    </BorderWrapper>
                    <BorderWrapper
                      border="1px solid #BFBFBF"
                      borderRadius="92px"
                      background="white"
                      padding="8px 24px"
                      position="relative"
                      width="30%"
                    >
                      <Input width="100%" placeholder="CVV" maxLength="3" />
                    </BorderWrapper>
                  </div>

                  {/* <Image
                    src={masterCard}
                    alt={"masterCard"}
                    className={
                      style.ordering__cardInfWrapper__imageWrapper__image
                    }
                  />
                  <Image
                    src={visa}
                    alt={"visa"}
                    className={
                      style.ordering__cardInfWrapper__imageWrapper__image
                    }
                  />
                  <Image
                    src={mir}
                    alt={"mir"}
                    className={
                      style.ordering__cardInfWrapper__imageWrapper__image
                    }
                  /> */}
                </div>
                <div className={style.ordering__flexWrapper}>
                  <label className={style.ordering__label}>
                    <ReCheckBox padding="0 8px 0 0" />
                    Привязать карту для быстрой оплаты следующих заказов
                  </label>
                </div>
                <Link href="/">
                  <a>
                    <Button
                      title="Назад"
                      color="#3D69B7"
                      border="1px solid #3D69B7"
                      padding="12px 70px"
                      borderRadius="60px"
                      margin="32px 0 100px 0"
                      hoverClassColor="orderBackBtnHover"
                    />
                  </a>
                </Link>
              </section>
              <section className={style.ordering__rightSide}>
                <OrderWindow />
                <pre className={style.ordering__rightSide__bonusAccrual}>
                  Начислим <b>100</b> бонусов
                </pre>
                <Button
                  title="Оформить заказ"
                  color="white"
                  borderRadius="60px"
                  background="#20598E"
                  padding="12px"
                  width="100%"
                  onClick={() => openModalAction("purchase-success")}
                  hoverClassColor="orderBtnHover"
                />
              </section>
            </main>
          </AdditionalPageWrapper>
        </BaseWrapperMargin>
      </HeaderWrapper>

      {modal.typeModal === "purchase-success" && (
        <ModalWrapper
          padding="32px 54px"
          borderRadius="20px"
          top="30%"
          left="50%"
          minWidth="514px"
          maxWidth="530px"
          modalIsOpen={modal.modalOpen}
          backgroundColor="#0000004D"
          transform="translate(-50%, -50%)"
        >
          <PurchaseSuccess />
        </ModalWrapper>
      )}

      {modal.typeModal === "time-picker" && (
        <ModalWrapper
          padding="32px 54px"
          borderRadius="20px"
          top="50%"
          left="50%"
          minWidth="600px"
          maxWidth="650px"
          modalIsOpen={modal.modalOpen}
          backgroundColor="#0000004D"
          transform="translate(-50%, -50%)"
          close
        >
          <TimeChanger
            setTimeOrder={setTimeOrder}
            timeOrder={timeOrder}
            closeModal
          />
        </ModalWrapper>
      )}
    </>
  );
}

export async function getStaticProps() {
  const shopsApi = new ShopsApi();

  const res = await shopsApi.getShopsList();
  const shops = await res.json();

  return {
    props: { shops },
  };
}

export default Ordering;
