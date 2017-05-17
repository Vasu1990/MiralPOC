import React, { Component } from 'react';
import Banner from '../../Components/ReUsable/Banner/Banner.js';

class CheckoutContainer extends Component {

  constructor() {
    super();

    this.title = "Checkout"
  }

    render() {
        return ( 
          <div className="page checkout-page">
              <div className="container">
                <div className="row">              
                    <div className="col-sm-12">
                    <Banner pageTitle={this.title} />
                         <dl className="cart-products">
                            <dt className="cart-product">
                               <a className="cart-thumb" href="#"><img src="assets/img/product/cart-thumb-1.jpg" alt="Cart Thumb"/></a>
                               <div className="cart-info">
                                  <div className="product-name"><span className="quantity-formated"><span className="quantity">1</span>x</span><a href="#">Funnky hight</a></div>
                                  <div className="product-attributes"><a href="#">S, Beige</a></div>
                                  <span className="price">$50.99</span>
                               </div>
                               <span className="remove-link"><a href="#"><i className="fa fa-times-circle" aria-hidden="true"></i></a></span>
                            </dt>
                            <dd></dd>
                            <dt className="cart-product">
                               <a className="cart-thumb" href="#"><img src="assets/img/product/cart-thumb-2.jpg" alt="Cart Thumb"/></a>
                               <div className="cart-info">
                                  <div className="product-name"><span className="quantity-formated"><span className="quantity">1</span>x</span><a href="#">Funnky hight</a></div>
                                  <div className="product-attributes"><a href="#">S, Beige</a></div>
                                  <span className="price">$35</span>
                               </div>
                               <span className="remove-link"><a href="#"><i className="fa fa-times-circle" aria-hidden="true"></i></a></span>
                            </dt>
                            <dd></dd>
                         </dl>

                         <p className="cart-no-product">No products</p>
                         <div className="cart-prices">
                            <div className="cart-fee-wrap cart-shipping-fee"><span className="cart-text">Shipping</span><span className="cart-fee price">$2.00</span></div>
                            <div className="cart-fee-wrap cart-total-fee"><span className="cart-text">Total</span><span className="cart-fee price">$120.49</span></div>
                         </div>
                          <div className="cart-checkout">
                            <a href="#" className="btn checkout-btn">Check out<i className="fa fa-angle-right right"></i></a>
                          </div>
                      </div>
                </div>
              </div>
            </div>
        );
    }
}

export default CheckoutContainer;
