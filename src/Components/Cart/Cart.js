import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart,removeFromCart} from '../../actions/cartactions';
import {removeFromList} from '../../actions/productlistactions';
import CartUtil from '../../Utils/CartUtil';


class Cart extends Component {
    render() {
        this.totalShippingAmount = CartUtil.calculateShipping(this.props.cartProducts);
        this.totalAmount = CartUtil.calculateTotal(this.props.cartProducts , this.totalShippingAmount);
        return (
            <div>
                {this.renderCart()}
            </div>
        );
    }

    componentWillReceiveProps (nextProps) {
        let addedProducts = [];
        for(let i = 0; i< nextProps.productList.length;i++) {
            if(nextProps.productList[i].isAddedToCart) {
                addedProducts.push(nextProps.productList[i]);
            }
        }
        if(addedProducts.length != nextProps.cartProducts.length) {
            this.props.dispatch(addToCart(addedProducts));
        }
    }

    renderCart() {
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
                                   <i className="fa fa-times-circle" aria-hidden="true"> </i>
                                </a>
                              </span>
                </dt>
            );
        });
    };
    removeProductFromCart(product ,event) {

        event.preventDefault();

        this.props.dispatch(removeFromCart(product.id));
        this.props.dispatch(removeFromList(product.id));


    }
}

const mapStateToProps = (state) => {
    return {
        cartProducts: state.checkoutProductList.updateProductInCheckout,
        productList: state.productList.updateProductInList
    };
};


export default connect(mapStateToProps)(Cart);
