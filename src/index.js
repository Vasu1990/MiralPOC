// import these files from their respective folders
import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import ServerComponents from './app.js';



//  ReactDOM.render(
// 	ServerComponents.component1,
//  document.getElementById('react-component1')); 

 ReactDOM.render(
	<ServerComponents.component1/>,
 document.getElementById('react-component1')); 


//  class ReactComponent1 extends Component {

//     render() {

//         return (
//             ServerComponents.component1
//         )
//     }
// }

ReactDOM.render(
	ServerComponents.SimpleComponent,
 document.getElementById('simple-component')); 



 ReactDOM.render(
	ServerComponents.component2,
 document.getElementById('react-component2')); 

