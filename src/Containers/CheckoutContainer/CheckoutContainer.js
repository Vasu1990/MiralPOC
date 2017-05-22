import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../Components/ReUsable/Banner/Banner.js';
import {removeFromCart} from '../../actions/checkoutactions';
import {removeToList} from '../../actions/productlistactions';

class CheckoutContainer extends Component {



 renderCart = () => {
    if(this.props.cartProducts.length > 0 ) {
            return(  
                    <div>
                            <dl className="cart-products">
                              {
                                  this.renderCartRows(this.props.cartProducts)
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
    
  };

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
                                   <i className="fa fa-times-circle" aria-hidden="true"> </i>
                                </a>
                              </span>
                  </dt>
        );
    });
  };

  calculateTotal = (cartProducts , shippingAmnt) => {
    let totalAmount = 0;
    
    cartProducts.forEach(function(product) {
        totalAmount +=  parseInt(product.price);
    });

    totalAmount += shippingAmnt;
    return totalAmount;
  };

  calculateShipping = (cartProducts) => {
    let totalAmount = 0;
    
    cartProducts.forEach(function(product) {
        totalAmount= totalAmount + parseInt(product.shipping ? product.shipping : 0);
    });

    return totalAmount;
  };

  removeProductFromCart(product ,event) {

    event.preventDefault();

    this.props.dispatch(removeFromCart(product.id));
    this.props.dispatch(removeToList(product.id));

 
  }


  render() {
    this.title = 'CHECKOUT';
    this.totalShippingAmount = this.calculateShipping(this.props.cartProducts);
    this.totalAmount = this.calculateTotal(this.props.cartProducts , this.totalShippingAmount);
      return ( 
        <div className="page checkout-page">
            <div className="container">
              <div className="row">              
                  <div className="col-sm-12">
                  <Banner pageTitle={this.title} />
                       {this.renderCart()}
                    </div>
              </div>
            </div>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
     return {
        cartProducts: state.checkoutProductList.updateProductInCheckout
    };
};


export default connect(mapStateToProps)(CheckoutContainer);


