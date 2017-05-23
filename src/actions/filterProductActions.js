export const FILTER_BY_BRAND = 'FILTER_BY_BRAND';
export const SET_DATA = 'SET_DATA'

export function filterByBrand(brand) {
   return {
      type: FILTER_BY_BRAND,
      brand: brand
   };
}

export function setData() {
    return function (dispatch , getState) {
        let initialData = getState().productList.updateProductInList;
        console.log(initialData);
        return {
            type: SET_DATA,
            productData : initialData
         }
    }
}

