import React, { Component } from 'react';
import Filter from '../Filter/Filter.js'
import Description from './Description.js'
import Toolbar from './ToolBar.js'
import Pagination from './Pagination.js'

class List extends Component {


  isNewProduct = false;

  render() {
    return (
        <div className="main-wrap page-main product-page-main">
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-5">
                        <Filter />
                    </div>

                    <div className="col-lg-9 col-md-8 col-sm-7">
                      <Description/>


                        <div className="product-listing-wrap">
                            
                            <Toolbar />
                            
                            <div className="row">
                                <div id="product-wrap" className="grid_mode">
                                    {this.renderProductList()}
                                </div>
                                
                                <div className="col-md-12">
                                  <Pagination />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
  }

  renderProductList() {
    console.log(this.props.productListData);
    return this.props.productListData.map((product, index) => {
  
      if(product.isNew) {
        this.isNewProduct = true;
      }
     
        return(
            
                this.renderProductTile(product , index)
        );
    
    });

       
  }

  renderProductTile(value , i) {
    console.log(value.id , "key");
    return ( 
        <div className="product col-lg-4 col-md-6" key={value.id}>
                            <div className="product-thumb">
                                <a href="#" className="thumb-link">
                                    <img className="hover-img" src={value.imgUrl} alt="Product Hover" />
                                    <img className="front-img" src={value.hoverImgUrl} alt="Product Front" />
                                </a>

                                {this.renderNewTag(value.isNew)}
                               
                                <a className="to-cart" href="#"><i className="fa fa-shopping-cart"></i> Add To Cart</a>
                                <div className="product-btn">
                                    <a className="to-view" data-fancybox-type="iframe" href="product-quick-view.html"><i className="fa fa-eye"></i><span className="tooltip">Quick View</span></a>
                                    <a className="to-compare" href="#"><i className="fa fa-plus"></i><span className="tooltip">Add To Compare</span></a>
                                    <a className="to-wish" href="#"><i className="fa fa-heart"></i><span className="tooltip">Add To Wishlist</span></a>
                                </div>
                            </div>
                            <div className="product-info" >
                                <h5 className="product-name"><a href="#">{value.name}</a></h5>
                                
                                {this.renderRating(value.rating)}

                                <p className="price">{value.price}</p>
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
          starRating.push(<span className="star star_full"></span>);
        } else{
          starRating.push(<span className="star"></span>);
        }
      }
    
    return(
      <div className="rating" itemType="http://schema.org/Offer" itemScope="">
          <div itemType="star_rating" itemType="http://schema.org/AggregateRating" itemScope="" itemProp="aggregateRating">
              {starRating}
          </div>
      </div>
      )
  }

}

export default List;
