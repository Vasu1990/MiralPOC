import React, { Component } from 'react';
import Toolbar from './ToolBar.js'
import Pagination from './Pagination.js'

class List extends Component {
	render () {
	 	return (
	 	 
                        <div className="product-listing-wrap">
                            
                            <Toolbar />
                            
                            <div className="row">
                                <div id="product-wrap" className="grid_mode">
                                    { this.props.renderProductList()}
                                </div>
                                
                                <div className="col-md-12">
                                  <Pagination />
                                </div>
                            </div>
                        </div>


	 	);

	 }
}

export default List