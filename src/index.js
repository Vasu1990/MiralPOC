import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  hashHistory
} from 'react-router-dom';  
import './index.css';

import Header from './Components/Layout/Header/Header.js'
import Footer from './Components/Layout/Footer/Footer.js'

import ProductListContainer from './Containers/ProductListContainer/ProductListContainer.js'
import HomeContainer from './Containers/HomeContainer/HomeContainer.js'
import CartContainer from './Containers/CartContainer/CartContainer.js'

import productApp from './reducers/ContainerReducer/main';

const store = createStore(productApp, applyMiddleware(thunk));



var app = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<div>
			   <Header/>
			   
			   <Route exact path="/" component={HomeContainer}/>
	       	   <Route path="/product-list" component={ProductListContainer}/>
				<Route path="/view-cart" component={CartContainer}/>
			   <Footer/>

	           
	        </div>
	    </Router>
	</Provider>,
 app); 