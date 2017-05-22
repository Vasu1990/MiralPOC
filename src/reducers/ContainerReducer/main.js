import { combineReducers } from 'redux';
import productList from '../ProductListReducer/productlist';
import checkoutProductReducer from '../CheckoutProductReducer/checkoutproduct';


const mainReducer = combineReducers({productList:productList,checkoutProductList:checkoutProductReducer});

export default mainReducer;

