import axios from 'axios';
import {SET_DATA} from './filterProductActions';

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';
export const LOAD = 'LOAD';


export function addToList(id) {
   return {
      type: ADD_TO_LIST,
      id: id
   };
}

export function removeFromList(id) {
   return {
      type: REMOVE_FROM_LIST,
      id: id
   };
}

export function load(text) {

   return function(dispatch){
   	axios.get("../data/product-list.json")
      .then(res => {
      	dispatch({type:LOAD,payload:res.data.productList});
      	dispatch({type: SET_DATA , productData:res.data.productList})
     });
   };

}