import { combineReducers } from 'redux'
import { ADD_TO_CART,REMOVE_FROM_CART } from '../../actions/checkoutactions'



function updateProductInCheckout(checkoutProductList = [], action) {
   switch (action.type) {
	
      case ADD_TO_CART:
         return [
            ...checkoutProductList,action.payload
         ];

      case REMOVE_FROM_CART:
         checkoutProductList.forEach(function(product, index) {
            if(product.id == action.id) {
               checkoutProductList.splice(index,1);
            }
         });
         return [
            ...checkoutProductList
         ];
			
      default:
      return [...checkoutProductList];
   }
}



const checkOutProduct = combineReducers({updateProductInCheckout});

export default checkOutProduct;

