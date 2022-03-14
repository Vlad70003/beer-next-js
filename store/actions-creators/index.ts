import * as LoggedInAction from './loggedIn'
import * as FetachProducts from './products'

export default {
    ...LoggedInAction,
    ...FetachProducts,
}