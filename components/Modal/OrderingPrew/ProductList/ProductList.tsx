import React, { useEffect, useState } from "react";
import style from "./ProductList.module.scss";
import Image from "next/image";

//component
import { ProductCounter } from "../../../../ui/ProductCounter/ProductCounter";
import { DeleteButton } from "./DeleteButton/DeleteButton";

//script
import { addToOrder } from "./script";
import { ProductClass } from "../../../../script/product/product";

//hooks
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

//img
import noPhoto from "../../../../assests/img/no-photo.svg";

//types
import { orderArg } from "../../../../types/order";

export const ProductList = () => {
  const productClass = new ProductClass();

  const { order }: { order: orderArg[] } = useTypedSelector(
    (store) => store.order
  );
  const { generalOrder }: { generalOrder: orderArg[] } = useTypedSelector(
    (store) => store.generalOrder
  );

  const { productList } = useTypedSelector((store) => store.productList);

  const products = productList?.data?.products
  const petsBottle = products && productClass.getPetBottle({products: productList?.data?.products});

  const { deleteAllOrderAction } = useActions();
  const { addGeneralOrderAction } = useActions();

  useEffect(() => {
    addToOrder({ addGeneralOrderAction, order });
  }, [order]);

  return (
    <div className={style.productList}>
      {generalOrder?.length ? (
        <ul className={style.list}>
          {generalOrder.map((product) => {
            const productImg = product?.product?.productImg;
            const productPicture = product?.product?.picture;
            const productImage = productImg
              ? productImg
              : productPicture
              ? productPicture
              : noPhoto;

            const status = productClass.status({
              measure: product?.product?.measure,
              name: product?.product?.name,
            });

            return (
              <li className={style.item} key={product.key}>
                <div className={style.item__col}>
                  <div className={style.imageWrapper}>
                    {productImage && (
                      <Image
                        src={productImage}
                        alt="product"
                        className={style.image}
                        width={85}
                        height={85}
                      />
                    )}
                  </div>
                </div>
                <div className={style.item__col}>
                  <h4 className={style.nameProduct}>{product.product.name}</h4>
                  {status === "draft" && (
                    <div
                      className={style.item__displacement}
                    >{`${product.step} ??.`}</div>
                  )}
                  {status === "weight" && <div
                      className={style.item__displacement}
                    >{`${product.step * 100} ????`}</div>}
                </div>

                <div className={style.item__col}>
                  <ProductCounter
                    status={status}
                    productInfo={{
                      product: product?.product,
                      price: product.product.price,
                      measure: product.product.measure,
                      count: product.number || 1,
                      status: product.product.status,
                      step: product.step,
                    }}
                    petsBottle={petsBottle}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={style.clearList}>?????????????? ??????????, ???????????????? ??????????.</div>
      )}
      {generalOrder && generalOrder?.length ? (
        <div className={style.buttonWrapper}>
          <DeleteButton onClick={() => deleteAllOrderAction()} />
        </div>
      ) : null}
    </div>
  );
};
