import React from "react";
import ReactDOM from "react-dom";

class Ficha extends React.Component{
	constructor (props){
		this.state={default:''};

	}
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	render(){
		return <h1>Listo</h1>
	}
}
$(function(){
	ReactDOM.render(<Ficha />, document.getElementById('fichas'));
})