import { combineReducers } from 'redux'
import { ADD_TO_LIST,REMOVE_FROM_LIST,LOAD } from '../../actions/productlistactions'

function updateProductInList(productList = [], action) {
   switch (action.type) {
   
      case ADD_TO_LIST:
         productList.forEach(function(product) {
            if(product.id === action.id) {
               product.isAddedToCart = true;
            }
         });
         return [
            ...productList
         ];

      case REMOVE_FROM_LIST:
         productList.forEach(function(product) {
            if(product.id === action.id) {
               product.isAddedToCart = false;
            }
         });
         return [
            ...productList
         ];

      case LOAD:
         return [
            ...action.payload
         ];
         
      default:
      return productList
   }
}

function productListLoaded (productListLoaded=false, action) {

   switch (action.type) {

      case LOAD:
         return true;
         
      default:
      return productListLoaded;
   }
}



const productList = combineReducers({updateProductInList,productListLoaded});

export default productList;

