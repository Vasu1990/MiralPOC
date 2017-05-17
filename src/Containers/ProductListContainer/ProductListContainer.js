import React, { Component } from 'react';
import axios from 'axios';

import ListWrapper from '../../Components/ProductList/List/ListWrapper.js';
import Banner from '../../Components/ProductList/Banner/Banner.js';


class ProductListContainer extends Component {

	constructor() {
	super();
	
		this.state = {
			productData : [] ,
			productListLoaded  : false
		}
		this.getProductListData();
	}



  getProductListData() {
    return axios.get("./data/product-list.json")
      .then(res => {
      	console.log(res.data.productList);
      	let productData = res.data.productList
        this.setState({productData : productData  , productListLoaded : true});
      });
  }



  render() {
    return (
         <div className="page product-page">
         		 <Banner/>
         		 <ListWrapper productListData={this.state.productData} listLoaded={this.state.productListLoaded}/> 
     	 </div>
	    );
	  }
	}

export default ProductListContainer;
