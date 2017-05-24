// var EventEmitter = {
//     _events: {},
//     dispatch: function (event, data) {
//         if (!this._events[event]) return; // no one is listening to this event
//         for (var i = 0; i < this._events[event].length; i++)
//             this._events[event][i](data);
//     },
//     subscribe: function (event, callback) {
//       if (!this._events[event]) this._events[event] = []; // new event
//       this._events[event].push(callback);
//     }
//     // note that we do not handle unsubscribe here
// }
import axios from 'axios';


import React, { Component } from 'react';
import Filter from '../Filter/Filter.js';
import Description from './Description.jsx';
import List from './List.jsx';

class ListWrapper extends Component {

    constructor() {
        super();

        this.state = {
            productData : [] ,
            productListLoaded  : false
        };
        this.title = "Products";
        this.cartProducts = [];
    }

    componentWillMount() {
        this.getProductListData();
    }
    getProductListData() {
        return axios.get("./data/product-list.json")
            .then(res => {
                console.log(res.data.productList);
                let productData = res.data.productList;
                this.setState({productData : productData  , productListLoaded : true});
            });
    }
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
                      {this.state.productListLoaded ? <List productData={this.state.productData}/>: <h1 className="loader">Fetching Products...</h1>}
                    </div>
                    
                </div>
            </div>
        </div>
    );
  }


}

export default ListWrapper;
