import React, { useState, useEffect } from "react";
import style from "./OpenProduct.module.scss";
import Image from "next/image";

//script
import { checkedProductInOrder } from "../../../script/order/checkedProductInOrder";
import { handleProductionPrice } from "../../../script/calculate/handleProductionPrice";
import { handleProductionCount } from "../../../script/calculate/handleProductionCount";
import { addToOrderFirstProduct } from "../../../script/order/addToOrderFirstProduct";

//example
import { container } from "../../Product/productExample";

//component
import { ChooseVolume } from "../../../ui/ChooseVolume/ChooseVolume";
import { ProductCounter } from "../../../ui/ProductCounter/ProductCounter";
import { Button } from "../../../ui/Button/Button";

//action, selector
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

//img
import noPhoto from "../../../assests/img/no-photo.svg";

interface OpenProductProps {
  product: {
    brewery?: string;
    picture: string;
    productCount: string;
    stock: string;
    productTitle: string;
    measure: { symbol: string; ratio: string };
    name: string;
    description?: string;
    id: number;
  };
  stepInOpenProduct: number;
  setProductAfterChangeShop: (value: any) => void;
  productGrade: string;
  productPrice: number;
  numberOrder: number;
  productSubtitle: string;
  petsBottle: { smallPet: {}; mediumPet: {}; bigPet: {} }
  productProduction: string;
  status: string;
  checkedAndNumberProductInOrder: {
    productIsOrder: boolean;
    numberOrder: number | null;
  };
  handleStep: (value: number) => void;
}

export const OpenProduct = ({
  product,
  stepInOpenProduct,
  handleStep,
  productGrade,
  productSubtitle,
  productProduction,
  status,
  productPrice,
  checkedAndNumberProductInOrder,
  petsBottle,
  setProductAfterChangeShop
}: OpenProductProps) => {
  const { brewery, picture, productCount, stock, name, description, id } =
    product;

  const { addOrderAction } = useActions();
  const { openModalAction } = useActions();
  const { currentShop } = useTypedSelector((state) => state.currentShop);
  const { generalOrder } = useTypedSelector((state) => state.generalOrder);

  const [step, setStep] = useState(stepInOpenProduct);

  useEffect(() => {
    setStep(stepInOpenProduct);
  }, [stepInOpenProduct]);

  return (
    <div className={style.openProduct}>
      <div className={style.leftSide}>
        <Image
          src={picture ? picture : noPhoto}
          width="240px"
          height="240px"
          alt="product img"
        />
      </div>
      <div className={style.rightSide}>
        <main className={style.main}>
          <div className={style.row}>
            <h4 className={style.title}>{name}</h4>
          </div>
          <div className={style.row}>
            <div className={style.text}>{productGrade}</div>
          </div>
          <div className={style.row}>
            <div className={style.text}>{productSubtitle}</div>
          </div>
          {brewery && (
            <div className={style.row}>
              <div className={`${style.text} ${style.text__grey}`}>
                {brewery}
              </div>
            </div>
          )}
          <div className={style.row}>
            <div className={`${style.text} ${style.text__grey}`}>
              {productProduction}
            </div>
          </div>
          {description && (
            <div className={style.row}>
              <div className={`${style.text} ${style.text__description}`}>
                {description}
              </div>
            </div>
          )}
          {status === "draft" && (
            <div className={style.row}>
              <ChooseVolume
                handleStep={handleStep}
                step={step}
                measure={product.measure}
              />
            </div>
          )}
        </main>
        <footer className={style.footer}>
          <div className={style.footer__column}>
            <div className={style.footer__row}>{`${handleProductionPrice({
              productPrice,
              step: checkedAndNumberProductInOrder?.numberOrder || step,
              status: status
            })}`}</div>
            <div className={style.footer__row}>
              {handleProductionCount({
                productCount,
                status,
                step,
                checkedAndNumberProductInOrder,
              })}
            </div>
          </div>
          <div className={style.footer__column}>
            {checkedAndNumberProductInOrder?.productIsOrder ? (
              <ProductCounter
                customNumber
                padding="0 50px"
                status={status}
                productInfo={{
                  product: product,
                  price: productPrice,
                  count: checkedAndNumberProductInOrder?.numberOrder || 1,
                  status: status,
                  step: step,
                  measure: product.measure,
                }}
                petsBottle={petsBottle}
              />
            ) : (
              <Button
                title="В корзину"
                fontSize="18px"
                background="#20598E"
                padding="11px 0"
                width="100%"
                color="white"
                borderRadius="60px"
                onClick={() =>
                  addToOrderFirstProduct({
                    currentShop,
                    openModalAction,
                    setProductAfterChangeShop,
                    addOrderAction,
                    product,
                    container,
                    step,
                    status,
                    petsBottle,
                  })
                }
              />
            )}
          </div>
        </footer>
      </div>
    </div>
  );
};
