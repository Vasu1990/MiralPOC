export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_CART_TOTAL =  'GET_CART_TOTAL';


export function addToCart(product) {
   return {
      type: ADD_TO_CART,
      payload: product
     
   };
}

export function removeFromCart(id) {
   return {
      type: REMOVE_FROM_CART,
      id: id
   };
}

export function  getCartTotal(products) {
    return {
       type: GET_CART_TOTAL ,
        products : products
    };
}