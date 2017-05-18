import React, { Component } from 'react';
import Banner from '../../Components/ReUsable/Banner/Banner.js';

class CheckoutContainer extends Component {

  constructor() {
    super();

    this.title = "Checkout";
    this.state ={
      cartProducts : []
    }

  }

  componentWillMount() {
    this.initCart();
  }
  initCart() {
    var cartData = this.fetchCartItems();
    this.setState({cartProducts : cartData});
  }

  fetchCartItems() {
    return JSON.parse(window.localStorage.getItem('cartProducts'));
  }
 renderCart = () => {
    if(this.state.cartProducts) {
      
        return(  
              <div>
                        <dl className="cart-products">
                            {this.renderCartRows(this.state.cartProducts)}
                         </dl>
                         <div className="cart-prices">
                            <div className="cart-fee-wrap cart-shipping-fee"><span className="cart-text">Shipping</span><span className="cart-fee price">$2.00</span></div>
                            <div className="cart-fee-wrap cart-total-fee"><span className="cart-text">Total</span><span className="cart-fee price">$120.49</span></div>
                         </div>
                          <div className="cart-checkout">
                            <a href="#" className="btn checkout-btn">Check out<i className="fa fa-angle-right right"></i></a>
                          </div>
              </div>
              );
      
    } else{
        return( <dt>
             <h1 className="empty-cart">Cart Is Empty :(</h1>
        </dt>);
    }
    
  }

  renderCartRows = (cartProducts) => {
    cartProducts.map((product ,index) => {
      console.log(product);
      return (
              <dt className="cart-product" key={product.id}>
                         <a className="cart-thumb" href="#"><img src={product.imgUrl} alt="Cart Thumb"/></a>
                           
                           <div className="cart-info">
                              <div className="product-name"><span className="quantity-formated"><span className="quantity">1</span>x</span><a href="#">Funnky hight</a></div>
                              <div className="product-attributes"><a href="#">{product.name}</a></div>
                              <span className="price">{product.price}</span>
                           </div>
                           
                           <span className="remove-link">
                            <a href="#">
                               <i className="fa fa-times-circle" aria-hidden="true"></i>
                            </a>
                          </span>
              </dt>
        );
    });
  }

    render() {
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

export default CheckoutContainer;
