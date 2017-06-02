import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import productApp from '../../reducers/ContainerReducer/main';
import CartContainer from '../../Containers/CartContainer/CartContainer';
import {createGlobalStore} from '../../store/store'


const store = createGlobalStore();

const ReactComponent2 =  
                <Provider store={store}>
                    <CartContainer/>
                </Provider>
             

ReactDOM.render(
	ReactComponent2,
 document.getElementById('react-component2')); 

export default ReactComponent2;
 