import React, { Component } from 'react';
import Toolbar from './ToolBar.jsx';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productListData: this.props.productData
        };
        this.cartProducts = [];
        this.isNewProduct = false;
    }
    addToCart = (product , event) => {
        console.log(product);
        event.preventDefault();
        let newProductData = [...this.state.productListData];
        newProductData.forEach(function(element){
            if(element.id === product.id) {
                element.isAddedToCart = true;
            }
        });
        this.setState({productData : newProductData});
        this.cartProducts.push(product);
        window.localStorage.setItem('cartProducts' , JSON.stringify(this.cartProducts) );
    };

    removeFromCart = (product , event) => {
        console.log(product);
        event.preventDefault();
        let newProductData = [...this.state.productListData];
        newProductData.forEach(function(element){
            if(element.id === product.id) {
                element.isAddedToCart = false;
            }
        });
        this.setState({productData : newProductData});
        let eleIndex = this.cartProducts.indexOf(product);
        this.cartProducts.splice(eleIndex, 1);
        window.localStorage.setItem('cartProducts' , JSON.stringify(this.cartProducts) );
    };

    renderProductList() {
        return this.state.productListData.map((product, index) => {

            if(product.isNew) {
                this.isNewProduct = true;
            }

            return(

                this.renderProductTile(product , index)
            );

        });


    }

    renderProductTile(product , i) {
        return (
            <div className="product col-lg-4 col-md-6" key={product.id}>
                <div className="product-thumb">
                    <a href="#" className="thumb-link">
                        <img className="hover-img" src={product.imgUrl} alt="Product Hover" />
                        <img className="front-img" src={product.hoverImgUrl} alt="Product Front" />
                    </a>

                    {this.renderNewTag(product.isNew)}

                    {
                        product.isAddedToCart ?
                            <a className="to-cart"  onClick={(event) => this.removeFromCart(product ,event)} href="#"><i className="fa fa-shopping-cart"></i> Remove From Cart</a>
                            :
                            <a className="to-cart" onClick={(event) => this.addToCart(product ,event )}  href="#"><i className="fa fa-shopping-cart"></i> Add To Cart</a>
                    }

                    <div className="product-btn">
                        <a className="to-view" data-fancybox-type="iframe" href="product-quick-view.html"><i className="fa fa-eye"></i><span className="tooltip">Quick View</span></a>
                        <a className="to-compare" href="#"><i className="fa fa-plus"></i><span className="tooltip">Add To Compare</span></a>
                        <a className="to-wish" href="#"><i className="fa fa-heart"></i><span className="tooltip">Add To Wishlist</span></a>
                    </div>
                </div>
                <div className="product-info" >
                    <h5 className="product-name"><a href="#">{product.name}</a></h5>

                    {this.renderRating(product.rating)}

                    <p className="price">$ { product.price}</p>
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

    renderNewTag(isNewProduct) {
        if(isNewProduct) {
            return (
                <div className="attr-group">
                    <span className="new">New</span>
                </div>
            );
        }
    }

    renderRating(rating) {
        let starRating = [] , total = 5;

        for(let index = 0 ;index < total ;index++) {
            if(index < rating) {
                starRating.push(<span className="star star_full" key={index}></span>);
            } else{
                starRating.push(<span className="star" key={index}></span>);
            }
        }

        return(
            <div className="rating" itemType="http://schema.org/Offer" itemScope="">
                <div itemType="star_rating" itemScope="" itemProp="aggregateRating">
                    {starRating}
                </div>
            </div>
        )
    }

	render () {
	 	return (
	 	 
                        <div className="product-listing-wrap">
                            
                            <Toolbar />
                            
                            <div className="row">
                                <div id="product-wrap" className="grid_mode">
                                    { this.renderProductList()}
                                </div>
                                
                                <div className="col-md-12">
                                  {/*<Pagination />*/}
                                </div>
                            </div>
                        </div>


	 	);

	 }
}

export default List