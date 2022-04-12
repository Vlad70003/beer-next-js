import React from 'react';
import style from "./OrderIndicator.module.scss";

import { useTypedSelector } from '../../hooks/useTypedSelector';

export const OrderIndicator = () => {

    const {generalOrder} = useTypedSelector(store => store.generalOrder);

  return (
    <div className={style.OrderIndicator}>
        {generalOrder?.length}
    </div>
  )
}
