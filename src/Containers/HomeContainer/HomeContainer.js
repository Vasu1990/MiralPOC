import React, { Component } from 'react';
import Slider from '../../Components/Home/Slider/Slider.js'
import Popular from '../../Components/Home/Popular/Popular.js'

class HomeContainer extends Component {
	render () {
	 	return (
	 		<div>
		   			<Slider/>
		   			<Popular/>
	 		</div>
	 	);

	 }
}

export default HomeContainer;