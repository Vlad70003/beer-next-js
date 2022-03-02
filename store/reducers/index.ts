import { combineReducers } from "redux";
import { productsReducers } from "./products";


export const rootReducer = combineReducers({
    products: productsReducers,
});

export type RootState = ReturnType <typeof rootReducer>