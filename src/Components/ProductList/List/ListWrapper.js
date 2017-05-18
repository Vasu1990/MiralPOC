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


import React, { Component } from 'react';
import Filter from '../Filter/Filter.js'
import Description from './Description.js'
import List from './List.js'
import Tile from './Tile.js'

class ListWrapper extends Component {


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
                      {this.props.listLoaded ? <List renderProductList={this.renderProductList.bind(this)} />: <h1 className="loader">Fetching Products...</h1>}
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
      <Tile key={value.id} removeFromCartHandler={this.props.removeFromCartHandler}  addToCartHandler={this.props.addToCartHandler} productDetail={value} renderNewTag={this.renderNewTag} renderRating={this.renderRating}/>
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
          starRating.push(<span className="star star_full" key={index}></span>);
        } else{
          starRating.push(<span className="star" key={index}></span>);
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

export default ListWrapper;
