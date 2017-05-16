import React, { Component } from 'react';


class Pagination extends Component {
	render () {
	 	return (
	 		<div className="pagination-bar ">
	 			<div className="pagination-content">
                                        <div className="row">
                                            <div className="display-flex">
                                                <div className="col-md-2 col-sm-4">
                                              
                                                    <form method="post" action="http://codechant.com/envato/html/carparts/products-comparison.html" className="compare-form"> 
                                                        <button type="submit" className="btn_compare">
                                                            <span>Compare (<strong className="total-compare-val">3</strong>)</span> 
                                                        </button> 
                                                        <input type="hidden" name="compare_product_count" className="compare_product_count" value="3" /> 
                                                        <input type="hidden" name="compare_product_list" className="compare_product_list" value="" />
                                                    </form>
                                                </div>
                                                <div className="col-lg-7 col-md-6 col-sm-8">
                                                    <ul className="paginations">
                                                        <li className="pagination prev disabled"><a href="#"><i className="fa fa-chevron-left" aria-hidden="true"></i></a></li>
                                                        <li className="pagination current"><a href="#">1</a></li>
                                                        <li className="pagination"><a href="#">2</a></li>
                                                        <li className="pagination next"><a href="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-12">
                                                    <p className="product-count">Showing 1-12 of 16 items</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
	 		</div>
	 	);

	 }
}

export default Pagination