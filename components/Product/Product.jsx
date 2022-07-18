import React, { useEffect, useState } from "react";
import style from "./Product.module.scss";
import Image from "next/image";

//hooks
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

//component
import { Info } from "../../ui/Info/Info";
import { Button } from "../../ui/Button/Button";
import { ChooseVolume } from "../../ui/ChooseVolume/ChooseVolume";
import { ModalWrapper } from "../Modal/ModalWrapper";
import { OpenProduct } from "../Modal/OpenProduct/OpenProduct";
import { ProductCounter } from "../../ui/ProductCounter/ProductCounter";

//script
import { checkedProductInOrder } from "../../script/order/checkedProductInOrder";
import { handleProductionCount } from "../../script/calculate/handleProductionCount";
import { handleProductionPrice } from "../../script/calculate/handleProductionPrice";
import { ProductClass } from "../../script/product/product";
import { addToOrderFirstProduct } from "../../script/order/addToOrderFirstProduct";

//assests
import noPhoto from "../../assests/img/no-photo.svg";

//data
import { container } from "./productExample";

export const Product = ({ product }) => {
  const {
    alkogol,
    brend,
    category_id,
    cml2_manufacturer,
    detail_text,
    filtr_ryba,
    filtr_sneki,
    filtr_vape,
    filtratsiya,
    id,
    measure,
    name,
    picture,
    pivovarnya,
    plotnost,
    preview_text,
    price,
    proizvodstvo,
    quantity,
    stil_piva,
    vid_piva,
    xml_id,
  } = product;

  const productClass = new ProductClass();
  const modal = useTypedSelector((state) => state.modal);
  const { openModalAction } = useActions();
  const { addOrderAction } = useActions();
  const { currentShop } = useTypedSelector((state) => state.currentShop);
  const { generalOrder } = useTypedSelector((state) => state.generalOrder);

  const productGrade = productClass.grade({ category_id, vid_piva, measure });
  const productSubtitle = productClass.subtitle({
    category_id,
    alkogol,
    plotnost,
  });
  const status = productClass.status({ measure });
  const productProduction = productClass.production({
    category_id,
    proizvodstvo,
  });
  const productPrice = productClass.price({ price });

  const [step, setStep] = useState(+measure.ratio);
  const [checkedAndNumberProductInOrder, setCheckedAndNumberProductInOrder] =
    useState(null);

  const productCount = productClass.count({ measure });

  useEffect(() => {
    const { productIsOrder, numberOrder } = checkedProductInOrder({
      generalOrder,
      id,
      step,
      status,
    });
    setCheckedAndNumberProductInOrder({ productIsOrder, numberOrder });
  }, [generalOrder, id, step]);

  const handleStep = (value) => {
    setStep(value);
  };

  const handleModal = (event, openModalAction) => {
    const elementId = event.target;

    if (
      elementId.closest(".chooseVolume") ||
      elementId.closest(".product__button-wrapper")
    ) {
      return;
    }

    openModalAction("open-product", id);
  };

  return (
    <>
      <ul
        className={style.product}
        onClick={(event) => handleModal(event, openModalAction)}
      >
        <li className={style.product__img__wrapper}>
          <Image
            src={picture ? picture : noPhoto}
            alt="product image"
            className={style.product__img}
            width={220}
            height={220}
          />
        </li>
        <li className={style.product__title__wrapper}>
          <div className={style.product__title}>{name}</div>
          <div className={style.product__grade}>{productGrade}</div>
          <div className={style.product__subtitle}>{productSubtitle}</div>
          {status !== "draft" && (
            <div className={style.product__production}>{productProduction}</div>
          )}
          {status === "draft" && (
            <div className={`${style.product__chooseVolume} chooseVolume`}>
              {
                <ChooseVolume
                  step={step}
                  handleStep={handleStep}
                  measure={measure}
                />
              }
            </div>
          )}

          <div className={style.product__footer}>
            <div className={style.product__production__leftSide}>
              <div className={style.product__production__price}>
                {`${handleProductionPrice({
                  productPrice,
                  status,
                  step: checkedAndNumberProductInOrder?.numberOrder || step,
                })}`}
              </div>
              <div className={style.product__production__count}>
                {handleProductionCount({
                  productCount,
                  status,
                  step,
                  checkedAndNumberProductInOrder,
                })}
              </div>
            </div>
            <div
              className={`${style.product__production__rightSide} product__button-wrapper`}
            >
              {checkedAndNumberProductInOrder?.productIsOrder ? (
                <ProductCounter
                  customNumber
                  productInfo={{
                    product: product,
                    price: productPrice,
                    count: checkedAndNumberProductInOrder?.numberOrder || 1,
                    status: status,
                    step: step,
                  }}
                  status={status}
                />
              ) : (
                <Info
                  text="Пожалуйста выберите магазин, чтобы мы могли педоставить вам актуальный ассортимент"
                  position="relative"
                  width="100%"
                  height="auto"
                  positionWindow="bottom"
                >
                  <Button
                    title="В корзину"
                    color="white"
                    background="#20598E"
                    padding="11px 24px"
                    borderRadius="60px"
                    onClick={() =>
                      addToOrderFirstProduct({
                        currentShop,
                        openModalAction,
                        addOrderAction,
                        product,
                        container,
                        step,
                      })
                    }
                    hoverClassColor="productBtnHover"
                    fontSize="1rem"
                  />
                </Info>
              )}
            </div>
          </div>
        </li>
        {/* {stock && (
          <div className={style["product__stock--wrapper"]}>
            <div className={style.product__stock}>{stock}</div>
          </div>
        )} */}
      </ul>

      {modal.typeModal === "open-product" && modal.id === id && (
        <ModalWrapper
          padding="48px"
          borderRadius="20px"
          top="30%"
          left="50%"
          maxWidth="800px"
          minWidth="740px"
          modalIsOpen={modal.modalOpen}
          backgroundColor="#0000004D"
          onRequestClose
          close
        >
          <OpenProduct
            product={product}
            stepInOpenProduct={step}
            handleStep={handleStep}
            productGrade={productGrade}
            checkedAndNumberProductInOrder={checkedAndNumberProductInOrder}
            productSubtitle={productSubtitle}
            productProduction={productProduction}
            productPrice={productPrice}
            status={status}
          />
        </ModalWrapper>
      )}
    </>
  );
};
