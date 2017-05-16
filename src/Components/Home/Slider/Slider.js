import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import './Slider.css'

class Slider extends Component {
  render() {
    return (
          <div id="main-slider-area" className="main-slider-area">
              <div id="header-slider" className="owl-carousel header-slider">
                  <div className="slider-item item-1">
                      <div className="slider-caption">
                          <div className="container">
                              <h1 className="display-inline">20%</h1>
                              <h2 className="display-inline">Off <span>Everything</span></h2><br/>
                              <Link className="btn btn-big" to="/product-list">Products</Link>
                          </div>
                      </div>
                  </div>
                  <div className="slider-item item-2">
                      <div className="slider-caption">
                          <div className="container">
                              <h1 className="display-inline">20%</h1>
                              <h2 className="display-inline">Off <span>Everything</span></h2><br/>
                              <a className="btn btn-big" href="#">Shop Now !</a>
                          </div>
                      </div>
                  </div>
                  <div className="slider-item item-3">
                      <div className="slider-caption">
                          <div className="container">
                              <h1 className="display-inline">20%</h1>
                              <h2 className="display-inline">Off <span>Everything</span></h2><br/>
                              <a className="btn btn-big" href="#">Shop Now !</a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
    );
  }
}

export default Slider;
