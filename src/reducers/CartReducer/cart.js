import { combineReducers } from 'redux'
import { ADD_TO_CART,REMOVE_FROM_CART  } from '../../actions/cartactions'



function updateProductInCheckout(checkoutProductList = [{	
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
			}], action) {
   switch (action.type) {
	
      case ADD_TO_CART:
         return [
            ...checkoutProductList,action.payload
         ];

      case REMOVE_FROM_CART:
         checkoutProductList.forEach(function(product, index) {
            if(product.id === action.id) {
               checkoutProductList.splice(index,1);
            }
         });
         return [
            ...checkoutProductList
         ];

      default:
      return [...checkoutProductList];
   }
}

const checkOutProduct = combineReducers({updateProductInCheckout });

export default checkOutProduct;

