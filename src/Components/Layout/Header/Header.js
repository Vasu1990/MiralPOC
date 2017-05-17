import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div>
             <div className="header-area affix-top" data-spy="affix" data-offset-top="200">
                <header id="top-header-area" className="top-header-area">
                    <div className="container">
                        <div className="top-header-inner">
                            <div className="top-header-content">
                                <div className="col-md-6 col-sm-12 col-xs-7">

                               


                                </div>

                                <div className="col-md-6 col-sm-12 col-xs-5">
                                    <div id="top-nav" className="top-nav">
                                        <div className="selected"><i className="fa fa-user"></i>My Account</div>
                                        <ul id="top-menu" className="menu top-menu right-menu" >
                                            <li><a href="#"><span><i className="fa fa-user"></i>My Account</span></a></li>
                                            <li><a href="#"><span><i className="fa fa-heart"></i>Wishlist</span></a></li>
                                            <li><a href="#"><span><i className="fa fa-check"></i>Checkout</span></a></li>
                                            <li><a href="#"><span><i className="fa fa-lock"></i>Log In</span></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>                    
                        </div>
                    </div>
                </header>

                <header id="main-header" className="main-header">
                    <div className="container">
                        <div className="main-header-inner">
                            <div className="display-flex main-header-content">

                                <div className="col-sm-4">
                                    <form id="searchform" className="searchform" action="#" method="post">
                                        <input type="search" name="keyword" placeholder="Search entire store here..." required=""/>
                                        <button type="submit" name="searchsubmit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>

                                <div className="col-sm-4 text-center">
                                    <a className="site-logo-link" href="#">
                                        <img src="assets/img/color-1/template/logo.png" alt="Site logo"/>
                                    </a>
                                </div>

                                <div className="col-sm-4">
                                    <div className="block-minicart">
                                        <a href="cart.html" className="cartlink"><i className="fa fa-shopping-cart" aria-hidden="true"></i>My Cart<span className="cart-subtotal"> (2) Items - <span className="cart-subtotal-price">$79.00</span></span>
                                        </a>
                                        <div className="on-minicart">
                                            <dl className="cart-products">
                                                <dt className="cart-product">
                                                    <a className="cart-thumb" href="#">
                                                        <img src="assets/img/product/cart-thumb-1.jpg" alt="Cart Thumb" />
                                                    </a>
                                                    <div className="cart-info">
                                                        <div className="product-name">
                                                            <span className="quantity-formated">
                                                                <span className="quantity">1</span>x
                                                                </span>
                                                            <a href="#">Funnky hight</a>
                                                        </div>
                                                        <div className="product-attributes">
                                                            <a href="#">S, Beige</a>
                                                        </div>
                                                        <span className="price">$50.99</span>
                                                    </div>
                                                    <span className="remove-link">
                                                        <a href="#"><i className="fa fa-times-circle" aria-hidden="true"></i></a>
                                                    </span>
                                                </dt>
                                                <dd></dd>
                                                <dt className="cart-product">
                                                    <a className="cart-thumb" href="#">
                                                        <img src="assets/img/product/cart-thumb-2.jpg" alt="Cart Thumb"/>
                                                    </a>
                                                    <div className="cart-info">
                                                        <div className="product-name">
                                                            <span className="quantity-formated">
                                                                <span className="quantity">1</span>x
                                                            </span>
                                                            <a href="#">Funnky hight</a>
                                                        </div>
                                                        <div className="product-attributes">
                                                            <a href="#">S, Beige</a>
                                                        </div>
                                                        <span className="price">$35</span>
                                                    </div>
                                                    <span className="remove-link">
                                                        <a href="#"><i className="fa fa-times-circle" aria-hidden="true"></i></a>
                                                    </span>
                                                </dt>
                                                <dd></dd>
                                            </dl>
                                            <p className="cart-no-product">No products</p>
                                            <div className="cart-prices">
                                                <div className="cart-fee-wrap cart-shipping-fee">
                                                    <span className="cart-text">Shipping</span>
                                                    <span className="cart-fee price">$2.00</span>
                                                </div>
                                                <div className="cart-fee-wrap cart-total-fee">
                                                    <span className="cart-text">Total</span>
                                                    <span className="cart-fee price">$120.49</span>
                                                </div>
                                            </div>
                                            <div className="cart-checkout">
                                                <a href="#" className="btn checkout-btn">Check out<i className="fa fa-angle-right right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-navigation-wrap">
                            <nav className="navbar navbar-default">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="menu nav navbar-nav main-menu">
                                        <li className="dropdown">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="dropdown mega-holder">
                                            <Link to="/product-list">Products</Link>
                                        </li>
                                        <li className="dropdown mega-holder">
                                            <Link to="/checkout">Checkout</Link>
                                        </li>
                                        <li className="dropdown mega-holder">
                                            <a href="products.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Lights</a>
                                            <ul className="dropdown-menu mega-menu col-md-4 col-sm-6">
                                                <li className="menu-row">
                                                    <ul className="menu-column md-2-4">
                                                        <li className="menu-title">
                                                            <a href="products.html">Lights 1</a>
                                                            <ul className="menu-items" >
                                                                <li className="menu-item"><a href="products.html">Shop</a></li>
                                                                <li className="menu-item"><a href="products.html">Casual Shoes</a></li>
                                                                <li className="menu-item"><a href="products.html">Spring &amp; Autumn</a></li>
                                                                <li className="menu-item"><a href="products.html">Winter Sneakers</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="menu-column md-2-4">
                                                        <li className="menu-title">
                                                            <a href="products.html">Lights 2</a>
                                                            <ul className="menu-items" >
                                                                <li className="menu-item"><a href="products.html">Shop</a></li>
                                                                <li className="menu-item"><a href="products.html">Casual Shoes</a></li>
                                                                <li className="menu-item"><a href="products.html">Spring &amp; Autumn</a></li>
                                                                <li className="menu-item"><a href="products.html">Winter Sneakers</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown mega-holder">
                                            <a href="products.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Audio</a>
                                            <ul className="dropdown-menu mega-menu mega-right col-lg-6 col-md-7 col-sm-10">
                                                <li className="menu-row">
                                                    <ul className="menu-column md-1-3">
                                                        <li className="menu-title">
                                                            <a className="menu-banner" href="products.html"><img src="assets/img/menu/audio-1.png" alt="..."/></a>
                                                            <a href="products.html">Audio 1</a>
                                                            <ul className="menu-items" >
                                                                <li className="menu-item"><a href="products.html">Shop</a></li>
                                                                <li className="menu-item"><a href="products.html">Casual Shoes</a></li>
                                                                <li className="menu-item"><a href="products.html">Springs &amp; Autumn</a></li>
                                                                <li className="menu-item"><a href="products.html">Winter Sneakers</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="menu-column md-1-3">
                                                        <li className="menu-title">
                                                            <a className="menu-banner" href="products.html"><img src="assets/img/menu/audio-2.png" alt="..."/></a>
                                                            <a href="products.html">Audio 2</a>
                                                            <ul className="menu-items" >
                                                                <li className="menu-item"><a href="products.html">Shop</a></li>
                                                                <li className="menu-item"><a href="products.html">Casual Shoes</a></li>
                                                                <li className="menu-item"><a href="products.html">Springs &amp; Autumn</a></li>
                                                                <li className="menu-item"><a href="products.html">Winter Sneakers</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="menu-column md-1-3">
                                                        <li className="menu-title">
                                                            <a className="menu-banner" href="products.html"><img src="assets/img/menu/audio-3.png" alt="..."/></a>
                                                            <a href="products.html">Audio 3</a>
                                                            <ul className="menu-items" >
                                                                <li className="menu-item"><a href="products.html">Shop</a></li>
                                                                <li className="menu-item"><a href="products.html">Casual Shoes</a></li>
                                                                <li className="menu-item"><a href="products.html">Springs &amp; Autumn</a></li>
                                                                <li className="menu-item"><a href="products.html">Winter Sneakers</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="blog.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                            <ul className="dropdown-menu">
                                                <li><a href="blog.html">Blog Listing</a></li>
                                                <li><a href="blog-single.html">Blog Single</a></li>
                                            </ul>
                                        </li>
                                    </ul>      
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
             </div>
      </div>
    );
  }
}

export default Header;
