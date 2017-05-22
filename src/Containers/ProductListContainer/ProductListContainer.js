import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListWrapper from '../../Components/ProductList/List/ListWrapper.js';
import Banner from '../../Components/ReUsable/Banner/Banner.js';
import {load,addToList,removeToList} from '../../actions/productlistactions';
import {addToCart,removeFromCart} from '../../actions/checkoutactions';




class ProductListContainer extends Component {

	

  addToCart = (product , event) => {
  	event.preventDefault();
    this.props.dispatch(addToList(product.id));
    this.props.dispatch(addToCart(product));
  }

   removeFromCart = (product , event) => {
    event.preventDefault();
    this.props.dispatch(removeToList(product.id));
    this.props.dispatch(removeFromCart(product.id));
  	
  }

  componentWillMount() {
    if(!this.props.productListLoaded) {
      this.props.dispatch(load());
    }
  }


  render() {
   
    return (
         <div className="page product-page">
         		 <Banner  pageTitle={this.title}/>
         		 <ListWrapper removeFromCartHandler={this.removeFromCart.bind(this)} addToCartHandler={this.addToCart.bind(this)}  productListData={this.props.productData} listLoaded={this.props.productListLoaded}/> 
     	 </div>
	    );
	  }
	}	

  const mapStateToProps = (state) => {
     return {
        productData: state.productList.updateProductInList,
        productListLoaded: state.productList.productListLoaded
    };
  }


export default connect(mapStateToProps)(ProductListContainer);
