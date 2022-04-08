import { addToOrderArg, orderArg } from "../../../../types/order";

export const addToOrder = ({
  addGeneralOrderAction,
  order
}: addToOrderArg) => {

  const compareItems = (resultItem: any, orderItem: any) => {
    return resultItem?.product?.id === orderItem.product.id
      && resultItem?.step === orderItem.step
  }

  const result: any = []

  order.forEach((orderItem, ind) => {

    const filtered = result.filter(
      (resultItem: any) => compareItems(resultItem, orderItem))

    if (filtered.length > 0) {
      const inx = result.findIndex((resultItem: any) => compareItems(resultItem, orderItem))
      result[inx].number += orderItem.step
    } else {
      result.push({ ...orderItem, number: orderItem.step, key: ind })
    }
  })

  const sortResult = result.sort((a: orderArg, b: orderArg) => (a.product.id + a.step) - (b.product.id + b.step));

  addGeneralOrderAction(sortResult)
  
};