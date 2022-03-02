import { actionState } from "./../../types/products";
import { Dispatch } from "redux";
import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
} from "./../reducers/products";

// import { getAllDivisions } from "../../api/product/getProduct";

export const fetachProducts = () => {
  return async (dispatch: Dispatch<actionState>) => {
    // try {

    //   dispatch({ type: FETCH_PRODUCT });

    //   await getAllDivisions()
    //     .then((response) => response.json())
    //     .then((data) =>
    //       dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data })
    //     );
        
    // } catch (error) {
    //   dispatch({
    //     type: FETCH_PRODUCT_ERROR,
    //     payload: "Произошла ошибка при загрузке списка продуктов",
    //   });
    // }
  };
};