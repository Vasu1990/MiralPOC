import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import productApp from '../../reducers/ContainerReducer/main';
import CartContainer from '../../Containers/CartContainer/CartContainer';
import {createStore} from 'redux';
import {createGlobalStore} from '../../store/store'


const store = createGlobalStore();

const ReactComponent1 =  
                <Provider store={store}>
                    <CartContainer />
                </Provider>
             
ReactDOM.render(
	ReactComponent1,
 document.getElementById('react-component1')); 

export default ReactComponent1;
 

