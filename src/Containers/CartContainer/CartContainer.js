import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckoutContainer extends Component {
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
                </dt>
            );
        });
    };

  render() {

      return ( 
        <div className="page checkout-page">
            <div className="container">
              <div className="row">              
                  <div className="col-sm-12">
                    <h1>Cart Listing</h1>
                      <dl className="cart-products">
                            {
                                this.renderCartRows(this.props.cartProducts)
                            }
                    </dl>
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


