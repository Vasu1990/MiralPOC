import React, { Component } from 'react';
import axios from 'axios';

import ListWrapper from '../../Components/ProductList/List/ListWrapper.js';
import Banner from '../../Components/ReUsable/Banner/Banner.js';


class ProductListContainer extends Component {

	constructor() {
	super();
	
		this.state = {
			productData : [] ,
			productListLoaded  : false
		}
		this.title = "Products";
		this.getProductListData();
		this.cartProducts = [];
	}

  getProductListData() {
    return axios.get("./data/product-list.json")
      .then(res => {
      	console.log(res.data.productList);
      	let productData = res.data.productList
        this.setState({productData : productData  , productListLoaded : true});
      });
  }

  addToCart = (product , event) => {
  	console.log(product);
  	event.preventDefault();
  	var newProductData = [...this.state.productData];
  	newProductData.forEach(function(element){
  		if(element.id === product.id) {
  			element.isAddedToCart = true;
  		}
  	})
  	this.setState({productData : newProductData});
  	this.cartProducts.push(product);
  	window.localStorage.setItem('cartProducts' , JSON.stringify(this.cartProducts) );
  }

   removeFromCart = (product , event) => {
  	console.log(product);
  	event.preventDefault();
  	var newProductData = [...this.state.productData];
  	newProductData.forEach(function(element){
  		if(element.id === product.id) {
  			element.isAddedToCart = false;
  		}
  	})
  	this.setState({productData : newProductData});
  	var eleIndex = this.cartProducts.indexOf(product)
  	this.cartProducts.splice(eleIndex, 1);
  	window.localStorage.setItem('cartProducts' , JSON.stringify(this.cartProducts) );
  }


  render() {
    return (
         <div className="page product-page">
         		 <Banner  pageTitle={this.title}/>
         		 <ListWrapper removeFromCartHandler={this.removeFromCart.bind(this)} addToCartHandler={this.addToCart.bind(this)}  productListData={this.state.productData} listLoaded={this.state.productListLoaded}/> 
     	 </div>
	    );
	  }
	}	

export default ProductListContainer;
