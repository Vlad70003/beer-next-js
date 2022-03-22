import * as LoggedInAction from './loggedIn';
import * as loggedOutAction from "./loggedIn";
import * as FetachProducts from './products';
import * as CurrentShapAction from './currentShop';

export default {
    ...LoggedInAction,
    ...loggedOutAction,
    ...FetachProducts,
    ...CurrentShapAction,
}