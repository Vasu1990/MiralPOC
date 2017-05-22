import axios from 'axios';

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const REMOVE_TO_LIST = 'REMOVE_TO_LIST';
export const LOAD = 'LOAD';


export function addToList(id) {
   return {
      type: ADD_TO_LIST,
      id: id
   };
}

export function removeToList(id) {
   return {
      type: REMOVE_TO_LIST,
      id: id
   };
}

export function load(text) {

   return function(dispatch){
   	axios.get("../data/product-list.json")
      .then(res => {
      	dispatch({type:LOAD,payload:res.data.productList});
     });
   };

}