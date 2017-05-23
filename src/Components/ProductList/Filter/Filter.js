import React, { Component } from 'react';


class Filter extends Component {

    filterByBrandHandler(brand) {

    }

	render () {
	 	return (
	 		<div className="sidebar shop-sidebar">
                            <div className="widget sidebar-widget category-widget">
                                <div className="widget-header">
                                    <h3 className="widget-title">Category</h3>
                                    <div className="module-sep"><div className="decorative-icons"></div><div className="decorative-bars"></div></div>
                                </div>
                                <div className="widget-content">
                                    <ul className="menu custom-menu sidebar-menu category-menu">
                                        <li>
                                            <a href="#">Lights</a>
                                            <span className="grower"></span>
                                            <ul className="sub-menu">
                                                <li><a href="#">Headlights</a></li>
                                                <li>
                                                    <a href="#">Light Back</a>
                                                    <span className="grower"></span>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">Rounded Light</a></li>
                                                        <li><a href="#">Square Light</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Light Red</a></li>
                                                <li><a href="#">Light Blue</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Wheels</a>
                                            <span className="grower"></span>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="#">Wheel Selling</a>
                                                    <span className="grower"></span>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">Cross Body</a></li>
                                                        <li><a href="#">Satchels</a></li>
                                                        <li><a href="#">Clutches</a></li>
                                                        <li><a href="#">Toter</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Common Wheel</a></li>
                                                <li>
                                                    <a href="#">Modern Wheel</a>
                                                    <span className="grower"></span>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">Bras</a></li>
                                                        <li><a href="#">Lifestyle</a></li>
                                                        <li><a href="#">Hats and Gloves</a></li>
                                                        <li><a href="#">Accessories</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">classNameic Wheels</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Mirror</a>
                                            <span className="grower"></span>
                                            <ul className="sub-menu">
                                                <li><a href="#">Large Mirrors</a></li>
                                                <li><a href="#">Rearview Mirror</a></li>
                                                <li><a href="#">Right Mirror</a></li>
                                                <li><a href="#">Left Mirror</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Audio</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div id="woocommerce-filter-module" className="widget sidebar-widget filter-widget">        
                                <div className="widget-header">
                                    <h3 className="widget-title">Catalog</h3>
                                    <div className="module-sep"><div className="decorative-icons"></div><div className="decorative-bars"></div></div>
                                </div>
                                <div className="widget-content">
                                    <form id="filterform" className="filterform layered-form liveform" name="filterform" action="#" method="get">
                                        
                                        <div className="layered-filter">
                                            <h4 className="filter-title">Categories</h4>
                                            <div className="filter-content">
                                                <div className="input-row">
                                                    <div className="input-col-2">
                                                        <div className="input-rule check">
                                                            <span className="input-style"></span>
                                                            <input id="beds" type="checkbox" name="category" value="beds"/>
                                                        </div>
                                                        <label className="filter-label" htmlFor="beds">Beds <span className="numofitems">(8)</span></label>
                                                    </div>
                                                    <div className="input-col-2">
                                                        <div className="input-rule check">
                                                            <span className="input-style"></span>
                                                            <input id="chairs" type="checkbox" name="category" value="chairs"/>
                                                        </div>
                                                        <label className="filter-label" htmlFor="chairs">Chairs <span className="numofitems">(5)</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                      
                              
                                        
                                        <div className="layered-filter">
                                            <h4 className="filter-title">Availability</h4>
                                            <div className="filter-content">
                                                <div className="input-row">
                                                    <div className="input-col-1">
                                                        <div className="input-rule check">
                                                            <span className="input-style"></span>
                                                            <input id="stock" type="checkbox" name="availability" value="stock"/>
                                                        </div>
                                                        <label className="filter-label" htmlFor="stock">In Stock <span className="numofitems">(15)</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="layered-filter">
                                            <h4 className="filter-title">Manufacturer</h4>
                                            <div className="filter-content">
                                                <div className="input-row">
                                                    <div className="input-col-2">
                                                        <div className="input-rule check">
                                                            <span className="input-style"></span>
                                                            <input id="swat" type="checkbox" name="manufacturer" value="mrf" onClick={this.filterByBrandHandler('mrf')}/>
                                                        </div>
                                                        <label className="filter-label" htmlFor="swat">MRF <span className="numofitems">(6)</span></label>
                                                    </div>
                                                    <div className="input-col-2">
                                                        <div className="input-rule check">
                                                            <span className="input-style"></span>
                                                            <input id="hogama" type="checkbox" name="manufacturer" value="jk" onClick={this.filterByBrandHandler('jk')}/>
                                                        </div>
                                                        <label className="filter-label" htmlFor="hogama">JK <span className="numofitems">(8)</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                      
                                        
                                    </form>
                                </div>
                            </div>
                            
                            <div className="widget sidebar-widget top-seller-widget">
                                <div className="widget-header">
                                    <h3 className="widget-title">Top Sellers</h3>
                                    <div className="module-sep"><div className="decorative-icons"></div><div className="decorative-bars"></div></div>
                                </div>
                                <div className="widget-content">
                                    <div className="widget-product">
                                        <div className="product">
                                            <a className="product-thumb" href="#">
                                               <img className="front-img" src="assets/img/product/1.jpg" alt="Product Front"/>
                                            </a>
                                            <div className="product-info">
                                                <h5 className="product-name"><a href="#">Funnky hight</a></h5>
                                                <div className="rating" itemType="http://schema.org/Offer" itemScope="">
                                                    <div className="star_rating" itemType="http://schema.org/AggregateRating" itemScope="" itemProp="aggregateRating">
                                                        <span className="star star_full"></span>
                                                        <span className="star star_full"></span>
                                                        <span className="star star_full"></span>
                                                        <span className="star star_full"></span>
                                                        <span className="star star_half"></span>
                                                  
                                                    </div>
                                                </div>
                                                <p className="price">
                                                    <span className="discount-price">$60.80</span>
                                                    <span className="regular-price">$80.99</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <a className="product-thumb" href="#">
                                               <img className="front-img" src="assets/img/product/2.jpg" alt="Product Front"/>
                                            </a>
                                            <div className="product-info">
                                                <h5 className="product-name"><a href="#">Funnky hight</a></h5>
                                                <div className="rating" itemType="http://schema.org/Offer" itemScope="">
                                                    <div className="star_rating" itemType="http://schema.org/AggregateRating" itemScope="" itemProp="aggregateRating">
                                                        <span className="star star_full"></span>
                                                        <span className="star star_full"></span>
                                                        <span className="star star_full"></span>
                                                        <span className="star star_full"></span>
                                                        <span className="star star_half"></span>
                                                 
                                                </div>
                                                <p className="price">
                                                    <span className="discount-price">$60.80</span>
                                                    <span className="regular-price">$80.99</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <a className="product-thumb" href="#">
                                               <img className="front-img" src="assets/img/product/3.jpg" alt="Product Front"/>
                                            </a>
                                            <div className="product-info">
                                                <h5 className="product-name"><a href="#">Funnky hight</a></h5>
                                                <div className="rating" itemType="http://schema.org/Offer" itemScope=""/>
                                                    <div className="star_rating" itemType="http://schema.org/AggregateRating" itemScope="" itemProp="aggregateRating">
                                                        <span className="star star_full"></span>
                                                        <span className="star star_full"></span>
                                                        <span className="star star_full"></span>
                                                        <span className="star star_full"></span>
                                                        <span className="star star_half"></span>
                                                
                                                    </div>
                                                </div>
                                                <p className="price">
                                                 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
	 	);

	 }
}

export default Filter;