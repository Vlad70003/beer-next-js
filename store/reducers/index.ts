import { combineReducers } from "redux";
import { productsReducers } from "./products";
import { auntificateReducers } from "./auntificate";
import { chooseCurrentShopReducers } from "./currentShop";
import { modalReducers } from "./modal";
import { orderReducers } from "./order";
import { generalOrderReducers } from "./genegalOrder";
import { shopsListReducers } from "./shopsList";
import { productListReducers } from "./productsList";


export const rootReducer = combineReducers({
    products: productsReducers,
    auntificate: auntificateReducers,
    currentShop: chooseCurrentShopReducers,
    modal: modalReducers,
    order: orderReducers,
    generalOrder: generalOrderReducers,
    shopList: shopsListReducers,
    productList: productListReducers,
});

export type RootState = ReturnType <typeof rootReducer>