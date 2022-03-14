import { combineReducers } from "redux";
import { productsReducers } from "./products";
import { auntificateReducers } from "./auntificate";


export const rootReducer = combineReducers({
    products: productsReducers,
    auntificate: auntificateReducers,
});

export type RootState = ReturnType <typeof rootReducer>