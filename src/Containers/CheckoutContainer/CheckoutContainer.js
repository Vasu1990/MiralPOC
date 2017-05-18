import React, { Component } from 'react';
import Banner from '../../Components/ReUsable/Banner/Banner.js';
import axios from 'axios';

class CheckoutContainer extends Component {

  constructor() {
    super();

    this.totalShippingAmount = 0;
    this.totalAmount = 0;

     this.state = {
        cartProducts : [] ,
        carProductsLoaded : false
      }
    this.title = "Checkout";
  }

  componentWillMount() {
     this.fetchCartItems();
  }


  fetchCartItems() {
    var resData = JSON.parse(window.localStorage.getItem('cartProducts')) || [];
     this.totalShippingAmount = this.calculateShipping(resData);
     this.totalAmount = this.calculateTotal(resData , this.totalShippingAmount);
     this.setState({cartProducts : resData , carProductsLoaded : true});
  }

 renderCart = () => {
    if(this.state.cartProducts.length > 0 ) {
            return(  
                    <div>
                            <dl className="cart-products">
                              {
                                  this.renderCartRows(this.state.cartProducts)
                              }
                                
                             </dl>

                             <div className="cart-prices">
                                <div className="cart-fee-wrap cart-shipping-fee">
                                  <span className="cart-text">Shipping</span>
                                  <span className="cart-fee price">{this.totalShippingAmount}</span>
                                </div>
                                <div className="cart-fee-wrap cart-total-fee">
                                  <span className="cart-text">Total</span>
                                  <span className="cart-fee price"> $ { this.totalAmount }</span>
                                </div>
                             </div>

                              <div className="cart-checkout">
                                <a href="#" className="btn checkout-btn">Check out<i className="fa fa-angle-right right"></i></a>
                              </div>
                     </div>
                  );
      
    } else{
        return( <dl>
              <dt><h1 className="empty-cart">Cart Is Empty :(</h1></dt>
        </dl>);
    }
    
  }

  renderCartRows = (cartProducts) => {
    return cartProducts.map((product ,index) => {
      console.log(product);
      return (
                  <dt className="cart-product" key={product.id}>
                             <a className="cart-thumb" href="#"><img src={product.imgUrl} alt="Cart Thumb"/></a>
                               
                               <div className="cart-info">
                                  <div className="product-name"><span className="quantity-formated"><span className="quantity">1</span>x</span><a href="#">Funnky hight</a></div>
                                  <div className="product-attributes"><a href="#">{product.name}</a></div>
                                  <span className="price">$ {product.price}</span>
                               </div>
                               
                               <span className="remove-link" onClick={(event) => this.removeProductFromCart(product ,event)}>
                                <a href="#">
                                   <i className="fa fa-times-circle" aria-hidden="true"></i>
                                </a>
                              </span>
                  </dt>
        );
    });
  }

  calculateTotal = (cartProducts , shippingAmnt) => {
    var totalAmount = 0;
    
    cartProducts.forEach(function(product) {
        totalAmount +=  parseInt(product.price);
    });

    totalAmount += shippingAmnt;
    return totalAmount;
  }

  calculateShipping = (cartProducts) => {
    var totalAmount = 0;
    
    cartProducts.forEach(function(product) {
        totalAmount= totalAmount + parseInt(product.shipping ? product.shipping : 0);
    });

    return totalAmount;
  }

  removeProductFromCart(product ,event) {

    this.state.cartProducts.indexOf(product);
    event.preventDefault();
    var newCartData = [...this.state.cartProducts];

    var eleIndex = newCartData.indexOf(product);
    newCartData.splice(eleIndex, 1);

    this.totalShippingAmount = this.calculateShipping(newCartData);
    this.totalAmount = this.calculateTotal(newCartData , this.totalShippingAmount );

    this.setState({cartProducts : newCartData});

    window.localStorage.setItem('cartProducts' , JSON.stringify(newCartData) );
  }


  render() {
      return ( 
        <div className="page checkout-page">
            <div className="container">
              <div className="row">              
                  <div className="col-sm-12">
                  <Banner pageTitle={this.title} />
                   {this.state.carProductsLoaded ? 
                       this.renderCart()
                   :    
                        <h1> fetching cart items</h1>
                    }
                    </div>
              </div>
            </div>
          </div>
      );
  }
}

export default CheckoutContainer;
