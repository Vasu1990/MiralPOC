import { combineReducers } from 'redux'
import { FILTER_BY_BRAND ,SET_DATA } from '../../actions/filterProductActions'



function filterProducts(filterProductList = [], action) {
   switch (action.type) {

       case FILTER_BY_BRAND:
         return [
             ...filterProductList.filter(brand => action.brand)
         ];

       case SET_DATA:
           filterProductList = [...action.productData];
          return [

              ...filterProductList
          ];


      default:
      return [...filterProductList];
   }
}

const filterProductReducer = combineReducers({filterProducts });

export default filterProductReducer;

