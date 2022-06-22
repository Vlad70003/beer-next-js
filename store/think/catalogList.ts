import { loadProductListAction, errorProductListAction, addProductListAction } from "../actions-creators/productsList";
import { CatalogApi } from "../../api/catalogApi";

export const fetchCatalogByIdShop = (id:string) => {
  const catalog = new CatalogApi()
  return async (dispatch: any) => {
    try {
      dispatch(loadProductListAction());
      const res = await catalog.getCatalogListByShopId(id);
      const json = await res.json();
      dispatch(addProductListAction(json));
      
    } catch (e) {
      dispatch(errorProductListAction(e));
    }
  };
};
