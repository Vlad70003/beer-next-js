import React from 'react'

import OrderWindowItem from "../OrderWindowItem/OrderWindowItem";

interface OrderWindowListData {
    content?: any[] | undefined,
}

export default function OrderWindowList({content}:OrderWindowListData) {

  return (
    <ul className="orderWindow__list">
        {content && content.map((item, idx) => {
            return < OrderWindowItem item={item} key={idx} />
        })}
    </ul>
  )
}
