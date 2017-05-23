import React, { Component } from 'react';
import Banner from '../../Components/ReUsable/Banner/Banner.js';
import Cart from '../../Components/Cart/Cart';


class CheckoutContainer extends Component {

  render() {
    this.title = 'CART';

      return ( 
        <div className="page checkout-page">
            <div className="container">
              <div className="row">              
                  <div className="col-sm-12">
                  <Banner pageTitle={this.title} />
                      <Cart />
                    </div>
              </div>
            </div>
          </div>
      );
  }
}

export default  CheckoutContainer;


