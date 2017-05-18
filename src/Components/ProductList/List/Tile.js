import React, { Component } from 'react';


class Tile extends Component {

    constructor(props) {
        super(props)
        this.product = this.props.productDetail;
        console.log(this.product ,"list");
    }


    render () {
        return (
                        <div className="product col-lg-4 col-md-6" >
                            <div className="product-thumb">
                                <a href="#" className="thumb-link">
                                    <img className="hover-img" src={this.product.imgUrl} alt="Product Hover" />
                                    <img className="front-img" src={this.product.hoverImgUrl} alt="Product Front" />
                                </a>

                                {this.props.renderNewTag(this.product.isNew)}
                               
                               {
                                    this.product.isAddedToCart ? 
                                        <a className="to-cart"  onClick={(event) => this.props.removeFromCartHandler(this.product ,event)} href="#"><i className="fa fa-shopping-cart"></i> Remove From Cart</a>
                                    : 
                                    <a className="to-cart" onClick={(event) => this.props.addToCartHandler(this.product ,event )}  href="#"><i className="fa fa-shopping-cart"></i> Add To Cart</a>
                                }
                                
                                <div className="product-btn">
                                    <a className="to-view" data-fancybox-type="iframe" href="product-quick-view.html"><i className="fa fa-eye"></i><span className="tooltip">Quick View</span></a>
                                    <a className="to-compare" href="#"><i className="fa fa-plus"></i><span className="tooltip">Add To Compare</span></a>
                                    <a className="to-wish" href="#"><i className="fa fa-heart"></i><span className="tooltip">Add To Wishlist</span></a>
                                </div>
                            </div>
                            <div className="product-info" >
                                <h5 className="product-name"><a href="#">{this.product.name}</a></h5>
                                
                                {this.props.renderRating(this.product.rating)}

                                <p className="price">{this.product.price}</p>
                                <div className="product-description">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
                                    <a href="product-single.html" className="product-desc-link">Learn More</a>
                                </div>
                                <div className="list_mode_btns">
                                    <a className="to-cart" href="#"><i className="fa fa-shopping-cart"></i> Add To Cart</a>
                                    <div className="product-btn">
                                        <a className="to-view" data-fancybox-type="iframe" href="product-quick-view.html"><i className="fa fa-eye"></i><span className="tooltip">Quick View</span></a>
                                        <a className="to-compare" href="#"><i className="fa fa-plus"></i><span className="tooltip">Add To Compare</span></a>
                                        <a className="to-wish" href="#"><i className="fa fa-heart"></i><span className="tooltip">Add To Wishlist</span></a>
                                    </div>
                                </div>
                            </div>
                      </div>
        );

     }
}

export default Tile