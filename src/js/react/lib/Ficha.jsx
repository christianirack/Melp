import React from 'react';
import ReactDOM from 'react-dom';

/*----------  Json  ----------*/

var data = [];
function json(){
	var urlRequest = './json.php?url=http://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json';
	$.getJSON(urlRequest, function( dataCallback ) {
		data = dataCallback;
		//console.log(data.length);
		$.each( dataCallback, function( key, val ) {
	    	console.log(key, val);
	  	});
		renderear();
	});
}

/*----------  Class  ----------*/

class Ficha extends React.Component{



	constructor (props){
		super(props);
		this.state={default:''};
	}
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	render(){
		return <div>
		----------------------> {window.data}
			{ 
			data.map((data) =>{
				return <h1 key={data.id}>asi es {data.name} {this.state.default} </h1>
			})
			}</div>
	}
}
function renderear(){
	ReactDOM.render(<Ficha />, document.getElementById('fichas'));
}
$(function(){
	json();
})