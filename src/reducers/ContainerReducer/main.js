import { combineReducers } from 'redux';
import checkoutProductReducer from '../CartReducer/cart';


const mainReducer = combineReducers({checkoutProductList:checkoutProductReducer});

export default mainReducer;

