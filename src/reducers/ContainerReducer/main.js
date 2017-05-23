import { combineReducers } from 'redux';
import productList from '../ProductListReducer/productlist';
import checkoutProductReducer from '../CartReducer/cart';


const mainReducer = combineReducers({productList:productList,checkoutProductList:checkoutProductReducer});

export default mainReducer;

