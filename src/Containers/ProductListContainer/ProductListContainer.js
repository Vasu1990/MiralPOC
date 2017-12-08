import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListWrapper from '../../Components/ProductList/List/ListWrapper.js';
import Banner from '../../Components/ReUsable/Banner/Banner.js';
import {load,addToList,removeFromList} from '../../actions/productlistactions';
import {addToCart,removeFromCart} from '../../actions/cartactions';


class ProductListContainer extends Component {

  addToCart = (product , event) => {
  	event.preventDefault();
    this.props.dispatch(addToList(product.id));
    // this.props.dispatch(addToCart(product));
  };

   removeFromCart = (productId , event) => {
    event.preventDefault();
    this.props.dispatch(removeFromList(productId));
    // this.props.dispatch(removeFromCart(productId));
  	
  };

  componentWillMount() {
    if(!this.props.productListLoaded) {
      this.props.dispatch(load());
    }
  }


  render() {
   this.title = "Products";
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
  };


export default connect(mapStateToProps)(ProductListContainer);
