//import these files from their respective folders
import React from 'react'
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider} from 'react-redux';
import CartContainer from './Containers/CartContainer/CartContainer.js'
import productApp from './reducers/ContainerReducer/main';
import style from '../public/assets/css/style.css';

//root is a static placeholder on the page
// where the components should render dynamically
var app = document.getElementById('root');

//JSON data from server should replace updateProductInCheckout 
const initialState = { 
  checkoutProductList: {
	  updateProductInCheckout : [{
				"id": 1,
				"description": "loremip sum" ,
				"imgUrl" : "assets/img/product/1.jpg" ,
				"hoverImgUrl" : "assets/img/product/1-hover.jpg",
				"isNew" : true ,
				"name" : "Funnky hight" ,
				"nameUrl" : "product-detail/1",
				"price" : "12" ,
				"rating" : 4 ,
				"isAddedToCart" : false ,
				"shipping" : 4
			} ,
				{
				"id": 2,
				"description": "loremip sum" ,
				"imgUrl" : "assets/img/product/2.jpg" ,
				"hoverImgUrl" : "assets/img/product/2-hover.jpg",
				"isNew" : false ,
				"name" : "Funnky hight" ,
				"nameUrl" : "product-detail/2",
				"price" : "12" ,
				"rating" : 4 ,
				"isAddedToCart" : false,
				"shipping" : 4
			},
				{
					"id": 3,
				"description": "loremip sum" ,
				"imgUrl" : "assets/img/product/3.jpg" ,
				"hoverImgUrl" : "assets/img/product/3-hover.jpg",
				"isNew" : true ,
				"name" : "Funnky hight" ,
				"nameUrl" : "product-detail/3",
				"price" : "12" ,
				"rating" : 4 ,
				"isAddedToCart" : false,
				"shipping" : 4
			},
				{
					"id": 4,
				"description": "loremip sum" ,
				"imgUrl" : "assets/img/product/4.jpg" ,
				"hoverImgUrl" : "assets/img/product/4-hover.jpg",
				"isNew" : true ,
				"name" : "Funnky hight" ,
				"nameUrl" : "product-detail/4",
				"price" : "12" ,
				"rating" : 3 ,
				"isAddedToCart" : false,
				"shipping" : 4
			},
				{
					"id": 5,
				"description": "loremip sum" ,
				"imgUrl" : "assets/img/product/5.jpg" ,
				"hoverImgUrl" : "assets/img/product/5-hover.jpg",
				"isNew" : true ,
				"name" : "Funnky hight" ,
				"nameUrl" : "product-detail/5",
				"price" : "12" ,
				"rating" : 2 ,
				"isAddedToCart" : false
			},	{
				"id": 6,
				"description": "loremip sum" ,
				"imgUrl" : "assets/img/product/6.jpg" ,
				"hoverImgUrl" : "assets/img/product/6-hover.jpg",
				"isNew" : true ,
				"name" : "Funnky hight" ,
				"nameUrl" : "product-detail/6",
				"price" : "12" ,
				"rating" : 4 ,
				"isAddedToCart" : false
			}
			,	{
				"id": 7,
				"description": "loremip sum" ,
				"imgUrl" : "assets/img/product/7.jpg" ,
				"hoverImgUrl" : "assets/img/product/7-hover.jpg",
				"isNew" : true ,
				"name" : "Funnky hight" ,
				"nameUrl" : "product-detail/7",
				"price" : "12" ,
				"rating" : 4 ,
				"isAddedToCart" : false
			},	{
				"id": 8,
				"description": "loremip sum" ,
				"imgUrl" : "assets/img/product/1.jpg" ,
				"hoverImgUrl" : "assets/img/product/1-hover.jpg",
				"isNew" : true ,
				"name" : "Funnky hight" ,
				"nameUrl" : "product-detail/8",
				"price" : "12" ,
				"rating" : 1 ,
				"isAddedToCart" : false
			},
				{
					"id": 9,
				"description": "loremip sum" ,
				"imgUrl" : "assets/img/product/2.jpg" ,
				"hoverImgUrl" : "assets/img/product/2-hover.jpg",
				"isNew" : true ,
				"name" : "Funnky hight" ,
				"nameUrl" : "product-detail/9",
				"price" : "12" ,
				"rating" : 5 ,
				"isAddedToCart" : false
			},
				{
					"id": 10,
				"description": "loremip sum" ,
				"imgUrl" : "assets/img/product3.jpg" ,
				"hoverImgUrl" : "assets/img/product/3-hover.jpg",
				"isNew" : true ,
				"name" : "Funnky hight" ,
				"nameUrl" : "product-detail/10",
				"price" : "12",
				"rating" : 0,
				"isAddedToCart" : false
			}] 
  } 
};

const store = createStore(productApp, initialState);

ReactDOM.render(
	<Provider store={store}>
		<CartContainer />
	</Provider>,
 app); 