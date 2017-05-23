import { combineReducers } from 'redux';
import productList from '../ProductListReducer/productlist';
import checkoutProductReducer from '../CartReducer/cart';
import filterProductReducer from '../FilterReducer/filter'


const mainReducer = combineReducers({productList:productList,checkoutProductList:checkoutProductReducer , filterProductReducer :filterProductReducer});

export default mainReducer;

