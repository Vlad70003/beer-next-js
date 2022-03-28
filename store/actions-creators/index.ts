import * as LoggedInAction from './loggedIn';
import * as loggedOutAction from "./loggedIn";
import * as FetachProducts from './products';
import * as CurrentShapAction from './currentShop';
import * as openModalAction from './modal';
import * as closeModalAction from './modal';

export default {
    ...LoggedInAction,
    ...loggedOutAction,
    ...FetachProducts,
    ...CurrentShapAction,
    ...openModalAction,
    ...closeModalAction,
}