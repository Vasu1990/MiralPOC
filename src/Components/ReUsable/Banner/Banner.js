import React, { Component } from 'react';


class Banner extends Component {
  render() {
    return (
        <div id="page-header-area" className="page-header-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header product-page-header">
                            <h1 className="page-title">{this.props.pageTitle}</h1>
                            <div className="breadcrumbs">
                                <div className="breadcrumb-item"><a href="home-1.html">Home</a></div><i className="fa fa-chevron-right"></i><div className="breadcrumb-item current">{this.props.pageTitle}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Banner;
