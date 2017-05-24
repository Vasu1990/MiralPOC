import React, { Component } from 'react';


class Toolbar extends Component {
	render () {
	 	return (
	 		<div className="toolbar">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 col-sm-8">
                                        
                                        <div className="view-modes">
                                            <a href="#" className="grid view-mode active" title="Grid" data-mode="grid_mode"><i className="fa fa-th-large"></i></a>
                                            <a href="#" className="list view-mode" title="List" data-mode="list_mode"><i className="fa fa-th-list"></i></a>
                                        </div>

                                        
                                        <form method="post" action="http://codechant.com/envato/html/carparts/products-comparison.html" className="compare-form"> 
                                            <button type="submit" className="btn_compare">
                                                <span>Compare (<strong className="total-compare-val">3</strong>)</span> 
                                            </button> 
                                            <input type="hidden" name="compare_product_count" className="compare_product_count" value="3"/> 
                                            <input type="hidden" name="compare_product_list" className="compare_product_list" value=""/>
                                        </form>
                                    </div>
                                    
                                    
                                    <div className="col-lg-5 col-md-3 col-sm-4">
                                        <div className="itemnum-wrap">
                                            <label>Show:</label>
                                            <form name="itemPage" action="#" method="get" className="itemPage liveform">
                                                <div className="input-rule select">
                                                    <span className="input-style">12</span>
                                                    <select name="numberItem">
                                                        <option value="12">12</option>
                                                        <option value="24">24</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    
                                    <div className="col-lg-4 col-md-5 col-sm-12">
                                        <div className="shop-short-by">
                                            <label>Sort by:</label>
                                            <form className="woocommerce-ordering live-form" method="get">
                                                <div className="input-rule select">
                                                    <span className="input-style">--</span>
                                                    <select name="orderby" className="orderby">
                                                        <option value="menu_order" >--</option>
                                                        <option value="price-low">Price: Lowest first</option>
                                                        <option value="price-high">Price: Highest first</option>
                                                        <option value="name-a">Product Name: A to Z</option>
                                                        <option value="name-z">Product Name: Z to A</option>
                                                        <option value="onStock">In stock</option>
                                                        <option value="refer-low">Reference: Lowest first</option>
                                                        <option value="refer-high">Reference: Highest first</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
	 	);

	 }
}

export default Toolbar