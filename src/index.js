import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  hashHistory
} from 'react-router-dom';  

import CartContainer from './Containers/CartContainer/CartContainer.js'

import productApp from './reducers/ContainerReducer/main';

const store = createStore(productApp);



var app = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<div>
			   
			   <Route exact path="/" component={CartContainer}/>


	           
	        </div>
	    </Router>
	</Provider>,
 app); 