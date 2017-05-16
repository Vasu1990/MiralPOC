import React, { Component } from 'react';


class Popular extends Component {
  render() {
    return (
        <div className="shop-module category-module">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="module-header">
                                <h3 className="module-title">Popular Categories</h3>
                                <div className="module-sep"><div className="decorative-icons"></div><div className="decorative-bars"></div></div>
                                <p className="module-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="category-wrap">
                            <div className="col-md-6">
                                <a className="category-banner category-1" href="#">
                                    <div className="col-sm-5 hidden-xs">
                                        <img className="cat-img" src="assets/img/banner/cat-1.png" alt="..."/>
                                    </div>
                                    <div className="col-sm-7">
                                        <h4 className="category-title">Vehicle and car accessories</h4>
                                        <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                                    </div>
                                    <span className="btn btn-category">Shop Now!</span>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a className="category-banner category-2" href="#">
                                    <div className="col-sm-5 hidden-xs">
                                        <img className="cat-img" src="assets/img/banner/cat-2.png" alt="..."/>
                                    </div>
                                    <div className="col-sm-7">
                                        <h4 className="category-title">Vehicle and car accessories</h4>
                                        <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                                    </div>
                                    <span className="btn btn-category">Shop Now!</span>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a className="category-banner category-3" href="#">
                                    <div className="col-sm-5 hidden-xs">
                                        <img className="cat-img" src="assets/img/banner/cat-3.png" alt="..."/>
                                    </div>
                                    <div className="col-sm-7">
                                        <h4 className="category-title">Vehicle and car accessories</h4>
                                        <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                                    </div>
                                    <span className="btn btn-category">Shop Now!</span>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a className="category-banner category-4" href="#">
                                    <div className="col-sm-5 hidden-xs">
                                        <img className="cat-img" src="assets/img/banner/cat-4.png" alt="..."/>
                                    </div>
                                    <div className="col-sm-7">
                                        <h4 className="category-title">Vehicle and car accessories</h4>
                                        <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                                    </div>
                                    <span className="btn btn-category">Shop Now!</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default Popular;
