import combinedReducers  from '../reducers/ContainerReducer/main';
import { createStore} from 'redux';


export function createGlobalStore() {
    let store;
    if(window.store) {
        store = window.store;
    } else {
        window.store = createStore(combinedReducers, window.cartData);
        store = window.store;
    }
    return store;
}