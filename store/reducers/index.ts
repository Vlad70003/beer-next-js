import { combineReducers } from "redux";
import { productsReducers } from "./products";
import { auntificateReducers } from "./auntificate";
import { chooseCurrentShopReducers } from "./currentShop";


export const rootReducer = combineReducers({
    products: productsReducers,
    auntificate: auntificateReducers,
    currentShop: chooseCurrentShopReducers,
});

export type RootState = ReturnType <typeof rootReducer>