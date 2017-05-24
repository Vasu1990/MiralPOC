import React, { Component } from 'react';
// import axios from 'axios';

import ListWrapper from '../../Components/ProductList/List/ListWrapper.jsx';
import Banner from '../../Components/ReUsable/Banner/Banner.js';


class ProductListContainer extends Component {

  render() {
    return (
         <div className="page product-page">
         		 <Banner  pageTitle={this.title}/>
         		 <ListWrapper />
     	 </div>
	    );
	  }
	}	

export default ProductListContainer;
