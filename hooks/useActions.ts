import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import * as ProductsActionCreators from "../store/actions-creators/products";
import * as ProductsActionCreators from "../store/actions-creators/products";


export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ProductsActionCreators, dispatch);
};