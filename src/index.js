import React from 'react'
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider} from 'react-redux';
import CartConiner from './Containers/CartContainer/CartContainer.js'
import productApp from './reducers/ContainerReducer/main';

const store = createStore(productApp);

var app = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<CartContainer />
	</Provider>,
 app); 