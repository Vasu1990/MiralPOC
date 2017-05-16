import React from 'react';
import ReactDOM from 'react-dom';
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

var app = document.getElementById('root');
ReactDOM.render(
	<Router history={hashHistory}>
		<div>
		   <Header/>
		   
		   <Route exact path="/" component={HomeContainer}/>
       	   <Route path="/product-list" component={ProductListContainer}/>

		   <Footer/>

           
        </div>
    </Router>,
 app); 